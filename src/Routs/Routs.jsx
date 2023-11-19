import { createBrowserRouter } from "react-router-dom";
import Main from "../LAYOUTS/main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/SignUp";
import Booking from "../Pages/BookingForm/Booking";
import BookedItems from "../Pages/BookedItems/BookedItems";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/booking/:id",
    element: <Booking />,
    loader: ({ params }) =>
      fetch(`http://localhost:5300/services/${params.id}`),
  },
  {
    path: "/bookedItem",
    element: (
      <PrivateRoute>
        <BookedItems></BookedItems>
      </PrivateRoute>
    ),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup></Signup>,
  },
]);

export default router;
