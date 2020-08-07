/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

import CurrentTime from "../components/CurrentTime";

const HomePage = ({ session }) => {
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session]);

  return (
    <Container>
      {session ? (
        <div>
          <CurrentTime />
        </div>
      ) : (
        <div>loading...</div>
      )}
    </Container>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}

export default HomePage;
