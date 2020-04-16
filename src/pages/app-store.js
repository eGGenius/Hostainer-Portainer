import React, { Component } from "react";
import SearchAndFilterBar from "../components/app-search-filter/app-search-filter"
import ListApps from "../components/list-apps/list-apps"

class AppStorePage extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchAndFilterBar />
        <ListApps />
      </React.Fragment>
    );
  }
}

export default AppStorePage;
