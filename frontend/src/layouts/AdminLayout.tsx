import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      <header>Auth Layout</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
