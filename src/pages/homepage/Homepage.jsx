import React from "react";
import "./Homepage.scss";
import Directory from "../../components/directory/Directory";
import { HomepageContainer } from "./Homepage.styles";
export const Homepage = () => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};
