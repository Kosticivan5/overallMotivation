import { createHashRouter, RouterProvider, Link } from "react-router-dom";
import SharedLayout from "./components/sharedLayout";
import Error from "./components/Error";
import Bonus from "./pages/Bonus";
import DMS from "./pages/DMS";
import Insurance from "./pages/Insurance";
import { getData } from "./featuresDMS/dmsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const router = createHashRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <DMS />,
      },
      {
        path: "insurance",
        element: <Insurance />,
      },
      {
        path: "general-motivation",
        element: <Bonus />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.dms);

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;
