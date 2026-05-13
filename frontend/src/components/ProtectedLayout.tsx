import { Navigate, Outlet } from "react-router";
import useAuthStore from "@/hooks/useAuthStore";

const ProtectedLayout = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
