import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MyContextProvider } from "./Components/3. Hooks/UseContextHook";
import BasicComponent from "./Components/1. Basics/BasicComponent";
import NavbarComponent from "./Components/Navbar/Navbar";
import StatePropComponent from "./Components/2. State And Props/StatePropComponent";
import HooksCoponent from "./Components/3. Hooks/HooksCoponent";
import LifeCycleComponent from "./Components/4. React LifeCycle/LifeCycleComponent";
import EventHandlerComponent from "./Components/5. Event Handling/EventHandlerComponent";
import ReactRouter from "./Components/6. React Router/ReactRouter";
import { About, Home } from "./Components/6. React Router/UseHistory";
import { NotFound, UserProfile } from "./Components/6. React Router/UseParam";
import StateManagementComponent from "./Components/7. State Management/StateManagementComponent";
import Optimization from "./Components/8. Performance Optimization/Optimization";
import LandingPage from "./Components/Welcome/LandingPage";
import ReactForms from "./Components/9. Forms in React/ReactForms";
import ReactApi from "./Components/10. React with APIs/ReactApi";
function App() {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/basic" element={<BasicComponent />} />
          <Route path="/state-props" element={<StatePropComponent />} />
          <Route path="/hooks" element={<HooksCoponent />} />
          <Route path="/Lifecycle" element={<LifeCycleComponent />} />
          <Route path="/eventHandler" element={<EventHandlerComponent />} />
          <Route path="/react-router" element={<ReactRouter />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user/:username?" element={<UserProfile />} />
          <Route path="/redux" element={<StateManagementComponent />} />
          <Route path="/Performance" element={<Optimization />} />
          <Route path="/ReactForms" element={<ReactForms />} />
          <Route path="/reactApi" element={<ReactApi />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  );
}

export default App;
