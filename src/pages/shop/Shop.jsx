import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverviewContainer from "../../components/collections-overview/CollectionOverview.container";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionContainer from "../collection/Collection.container";

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
