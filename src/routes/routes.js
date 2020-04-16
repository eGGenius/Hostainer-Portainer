import React from "react";
import {
  Route, Switch, Redirect
} from "react-router-dom";
import AppStorePage from "../pages/app-store";
import MyAppsPage from "../pages/my-apps";


// Router der App - Die Seiten sind nur erreichbar, wenn der Nutzer eingeloggt ist
function PrivateRouter() {
  return (
    <React.Fragment>
      <Route exact path="/my-apps">
        <MyAppsPage />
      </Route>
      <Route exact path="/apps">
        <AppStorePage />
      </Route>
      <Route path="/">
        <Redirect to="/my-apps"/>
      </Route>
     </React.Fragment>
      );
}

function RouterSwitch(props) {
  return (
    <Switch>
      {props.isLoggedIn  && <PrivateRouter />}
      <Route path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

// Subrouter
// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }

export default RouterSwitch;