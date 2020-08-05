/** @jsx jsx */
import { jsx, Box, Heading } from "theme-ui";
import { Fragment } from "react";

import AddLocation from "./AddLocation";

const LocationsList = ({ locations }) => (
  <Fragment>
    <Heading marginBottom={3} as="h2">
      Locations
    </Heading>
    <Box sx={styles.list} as="ul">
      {locations.map((location) => (
        <Box as="li">{location.name}</Box>
      ))}
      <Box as="li">
        <AddLocation />
      </Box>
    </Box>
  </Fragment>
);

const styles = {
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    li: {
      marginBottom: 3,
    },
  },
};

export default LocationsList;
