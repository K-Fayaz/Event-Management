
// import node dependencies here
import { BrowserRouter , Routes , Route } from "react-router-dom";

// import view components here
import Home from "./view/home";
import Navbar from "./partials/navbar";
import Register from "./view/register";
import AllEVents from "./view/allevents";
import CreateEvent from "./view/create_event";
import ConfirmEmailContainer from "./view/confirmEmail";


// import CSS files here
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/all/events" element={<AllEVents/>}/>
          <Route path="/create/event" element={<CreateEvent/>}/>
          <Route path="/confirm/email" element={<ConfirmEmailContainer/>}/>
          <Route path="/signup" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
