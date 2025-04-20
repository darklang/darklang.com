/**
 * App Component
 * The root component of the application.
 * Sets up routing with React Router.
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Roadmap from "./pages/Roadmap";
import CLIPage from "./pages/CLI";
import CloudPage from "./pages/Cloud";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="cli" element={<CLIPage />} />
          <Route path="cloud" element={<CloudPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
