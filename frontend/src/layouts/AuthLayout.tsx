import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header>Auth Layout</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
