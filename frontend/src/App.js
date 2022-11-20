import { Route, Routes } from "react-router-dom";
import Layout from "./inc/Layout";
import Home from "./pages/Home";
import Network from "./pages/Network";
import Notification from "./pages/Notification";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="network" element={<Network />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
