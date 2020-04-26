import React, { Component } from "react";
import SearchAndFilterBar from "../components/app-search-filter/app-search-filter"
import ListApps from "../components/list-apps/list-apps"

class AppStorePage extends Component {
  render() {
    return (
      <div class="site-content">
        <SearchAndFilterBar />
        <ListApps />
      </div>
    );
  }
}

export default AppStorePage;
