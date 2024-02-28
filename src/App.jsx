import { createHashRouter, RouterProvider, Link } from "react-router-dom";
import SharedLayout from "./components/sharedLayout";
import Error from "./components/Error";
import Bonus from "./pages/Bonus";
import DMS from "./pages/DMS";
import Insurance from "./pages/Insurance";

const router = createHashRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Bonus />,
      },
      {
        path: "DMS",
        element: <DMS />,
      },
      {
        path: "insurance",
        element: <Insurance />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
