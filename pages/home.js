import { useEffect } from "react";
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
    <div>
      {session ? <div>Welcome {session.user.name}</div> : <div>loading...</div>}
    </div>
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
