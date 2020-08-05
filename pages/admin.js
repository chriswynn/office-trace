/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

const AdminPage = ({ session }) => {
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

  return <Container>Welcome to the Admin Panel!</Container>;
};

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}

export default AdminPage;
