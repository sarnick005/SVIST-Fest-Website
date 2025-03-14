import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Member from "./components/members";
import UpdatedEvents from "./components/events";
import Body from "./components/body";
import Tour from "./components/Tour";
import Dept from "./components/dept";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import PublishPost from "./components/PublishPost/PublishPost";
import Gallery from "./components/Gallery/Gallery";
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home key="1" />} />
      <Route path="/about" element={<About />} />
      <Route path="/members" element={<Member />} />
      <Route path="/events" element={<UpdatedEvents />} />
      <Route path="/body" element={<Body />} />
      <Route path="/pasttour" element={<Tour />} />
      <Route path="/dept" element={<Dept />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/publish-post" element={<PublishPost />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
