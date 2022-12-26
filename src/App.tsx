
import { Routes, Route, useLocation } from "react-router-dom";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div>
      
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location}>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}


export default App;