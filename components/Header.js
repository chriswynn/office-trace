/** @jsx jsx */
import { jsx, Box, Container, Image } from "theme-ui";
import { Fragment } from "react";
import { useSession } from "next-auth/client";

const Header = () => {
  const [session] = useSession();

  return (
    <Fragment>
      {session && (
        <Box as="header" sx={styles.header}>
          <Container sx={styles.container}>
            <Box sx={styles.avatarContainer}>
              <Image src={session.user.image} />
            </Box>
          </Container>
        </Box>
      )}
    </Fragment>
  );
};
const styles = {
  header: {
    marginBottom: 4,
    paddingY: 3,
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "flex-end",
  },
  hex: {
    height: 40,
    width: 40,
  },
  avatarContainer: {
    borderRadius: "100%",
    height: 40,
    overflow: "hidden",
    width: 40,
  },
};

export default Header;
