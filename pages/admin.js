/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { PrismaClient } from "@prisma/client";

import LocationsList from "../components/Admin/LocationsList";

const AdminPage = ({ session, locations }) => {
  const router = useRouter();

  useEffect(() => {
    if (!session || session.user.role != "ADMIN") {
      router.push("/");
    } else if (session.user.role != "ADMIN") {
      router.push("/home");
    }
  }, [session]);

  if (!session || session.user.role != "ADMIN") {
    return <div>Loading....</div>;
  }

  return (
    <Container>
      <LocationsList locations={locations} />
    </Container>
  );
};

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();

  const locationsData = await prisma.location.findMany();

  const locations = locationsData.map((location) => ({
    id: location.id,
    name: location.name,
  }));

  return {
    props: {
      session: await getSession(context),
      locations,
    },
  };
}

export default AdminPage;
