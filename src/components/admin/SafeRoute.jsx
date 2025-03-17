import { Navigate } from "react-router";
import useAuthContext from "../../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuthContext();
  const isAuthenticated = isLoggedIn;
  // console.log(isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/account/login" />;
};

export default ProtectedRoute;
