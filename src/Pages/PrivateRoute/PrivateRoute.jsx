import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    <Navigate to="/login" state={{ from: location }}></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
