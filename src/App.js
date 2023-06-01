import "./App.css";
import Home from "./pages/home/Home.js";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
  { path: "/", element: <Home />},
  { path: "/profile", element: <Profile /> },
  { path: "/login", element: <Login /> }
]);

function App() {
  return (
    <div>
      {/* <Home/> */}
      {/* <Profile/> */}
      {/* <Login/> */}
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
