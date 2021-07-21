import React from "react";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
import { MenuItem } from "../menu-item/MenuItem";
import "./Directory.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ title, imageUrl, size, id }) => (
      <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
