import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../features/authentication/useUser";
import Spinner from "../Spinner/Spinner";
import "./ProtectedRoute.scss";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, navigate, isLoading]);

  if (isLoading)
    return (
      <div className="full-page">
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
