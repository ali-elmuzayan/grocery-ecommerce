import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="min-h-screen">
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        
      </footer>
    </div>
  );
};

export default RootLayout;
