import { Route, Routes } from "react-router-dom";
import Layout from "./inc/Layout";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Network from "./pages/Network";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="network" element={<Network />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={"This Feature is not avilable right now. I am wrking for it"} />
        </Route>
        {/* <Route path="" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </div>
  );
}

export default App;
