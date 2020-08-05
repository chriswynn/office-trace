/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

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
          Welcome {session.user.name}
          {session.user.role === "ADMIN" && (
            <Link href="/admin">
              <a>Admin Panel</a>
            </Link>
          )}
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
