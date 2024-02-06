import { createBrowserRouter } from "react-router-dom";
import CollectPersonalData from "./pages/CollectPersonalData";
import App from "./pages/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CollectPersonalData />,
  },
  // {
  //   path: "/",
  //   element: <App />,
  // },
]);

export default router;
