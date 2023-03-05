import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/user/:_id",
    element: <Profile />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
