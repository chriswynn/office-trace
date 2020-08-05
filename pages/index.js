import { useEffect } from "react";
import { useRouter } from "next/router";
import { providers, getSession } from "next-auth/client";

import SignInForm from "../components/SignIn";

const IndexPage = ({ session, providers }) => {
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/home");
    }
  }, [session]);

  return (
    <div>
      {!session ? <SignInForm providers={providers} /> : <div>loading....</div>}
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      providers: await providers(context),
      session: await getSession(context),
    },
  };
}

export default IndexPage;
