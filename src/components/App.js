import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { handleInitialData } from "../redux/actions/shared";
import Leaderboard from "./Leaderboard";
import Dashboard from "./Dashboard";

export default function App() {
  const store = useSelector((state) => state);
  console.log(store);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authedUser === null);

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <div className="container">{loading === true ? null : <Dashboard />}</div>
    </Router>
  );
}
