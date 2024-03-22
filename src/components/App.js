import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../redux/actions/shared";

export default function App() {
  const store = useSelector((state) => state);
  console.log(store);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authedUser === null);

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div className="container">
      {loading === true ? null : <div>Redux Polls</div>}
    </div>
  );
}
