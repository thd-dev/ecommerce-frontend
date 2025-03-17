import { Outlet } from "react-router";
import Navbar from "./components/UiComponents/Navbar";
import useAuthContext from "./contexts/AuthContext";
import Loader from "./components/UiComponents/Loader";
import { AdminContextProvider } from "./contexts/AdminContext";
function App() {
  const { isLoading } = useAuthContext();
  return (
    <AdminContextProvider>
      <div className="min-h-screen w-full bg-gray-100 relative">
        {
          isLoading ? (
            <Loader />
          ) : (
            <>
              <Navbar /> <Outlet />
            </>
          )
          // ? <Loader />
          // : <Navbar /> <Outlet />
        }
      </div>
    </AdminContextProvider>
  );
}

export default App;
