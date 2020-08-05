/** @jsx jsx */
import { jsx, Box, Heading, Button } from "theme-ui";
import { Fragment, useState } from "react";

import AddLocation from "./AddLocation";

const LocationsList = ({ locations }) => {
  const handleDelete = (id) => {
    fetch("/api/locations", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
  };

  return (
    <Fragment>
      <Heading marginBottom={3} as="h2">
        Locations
      </Heading>
      <Box sx={styles.list} as="ul">
        {locations.map((location) => (
          <Box as="li">
            {location.name}
            <Button onClick={() => handleDelete(location.id)}>Delete</Button>
          </Box>
        ))}
        <Box as="li">
          <AddLocation />
        </Box>
      </Box>
    </Fragment>
  );
};

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
