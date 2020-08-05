import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
  callbacks: {
    session: async (session, user) => {
      const sessionWithRole = {
        ...session,
        user: {
          ...session.user,
          role: user.role,
        },
      };

      return Promise.resolve(sessionWithRole);
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
