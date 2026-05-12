import { Link, Outlet } from "react-router";

const ProtectedLayout = () => {
  const admin = false;

  if (!admin) {
    return (
      <div>
        Not authorized <Link to="/">Go to home</Link>
      </div>
    );
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
