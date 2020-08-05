/** @jsx jsx */
import { jsx, Box, Input, Label, Button, Heading } from "theme-ui";
import { Fragment } from "react";

const AddLocation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    fetch("/api/locations", {
      method: "POST",
      body: JSON.stringify({ name: data.get("locationName") }),
    });
  };

  return (
    <Fragment>
      <Heading marginBottom={1} as="h3">
        Add Location
      </Heading>
      <Box onSubmit={handleSubmit} as="form">
        <Label htmlFor="locationName">Name</Label>
        <Input name="locationName" mb={3} />
        <Button type="submit">Add</Button>
      </Box>
    </Fragment>
  );
};

export default AddLocation;
