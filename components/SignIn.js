/** @jsx jsx */
import { jsx, Flex, Button, Image } from "theme-ui";
import { signIn } from "next-auth/client";

const SignInForm = ({ providers }) => {
  return (
    <Flex sx={styles.container}>
      <Image sx={styles.hex} src="/img/hex.svg" />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Button sx={styles.button} onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </Button>
        </div>
      ))}
    </Flex>
  );
};

const styles = {
  container: {
    alignItems: "center",
    backgroundColor: "mojoGreen",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  },
  hex: {
    height: 80,
    width: 80,
    marginBottom: 60,
  },
  button: {
    background: "white",
    color: "mojoGreen",
  },
};

export default SignInForm;
