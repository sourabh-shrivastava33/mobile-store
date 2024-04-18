import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}

export default App;
