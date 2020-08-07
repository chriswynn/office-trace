/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { useState, useEffect } from "react";
import { format } from "date-fns";

import useInterval from "../lib/hooks/use-interval";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useInterval(() => {
    setCurrentTime(Date.now());
  }, 3000);

  return (
    <div
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Flex sx={styles.container}>
        <span sx={styles.time}>{format(currentTime, "HH:mm")}</span>
        <span sx={styles.date}>{format(currentTime, "MMM dd yyyy")}</span>
      </Flex>
    </div>
  );
};

const styles = {
  container: {
    borderRadius: "50%",
    boxShadow: "36px 36px 72px #cccccf, -36px -36px 72px #ffffff",
    width: 300,
    height: 300,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: 6,
  },
  time: {
    display: "block",
    fontSize: 60,
    fontWeight: "bold",
  },
  date: {
    display: "block",
    fontSize: 21,
  },
};

export default CurrentTime;
