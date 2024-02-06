import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />
    },
    {
        path:"/asdf",
        element:<span>THIS IS ASDF</span>
    }
])

export default router;