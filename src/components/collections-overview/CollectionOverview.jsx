import React from "react";
import "./CollectionOverview.scss";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector";
import { CollectionPreview } from "../collection-preview/CollectionPreview";
import { connect } from "react-redux";
const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
