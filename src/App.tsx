import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./common/utils/ScrollToTop";
import Layout from "./common/layout/Layout";

import Home from "./pages/Home";

import Classic from "./pages/Classic";

import Language from "./pages/Language";
import Editing from "./pages/Editing";
import CLI from "./pages/CLI";
import Backends from "./pages/Backends";
import AI from "./pages/AI";
import Distribution from "./pages/Distribution";
import Execution from "./pages/Execution";
import TraceDriven from "./pages/TraceDriven";
import TypeChecking from "./pages/TypeChecking";

import Company from "./pages/Company";
import GettingStarted from "./pages/GettingStarted";
import ForX from "./pages/For";
import Cloud from "./pages/Cloud";
// import Packages from "./pages/Packages";
// import PackageDetail from "./pages/PackageDetail";

import NotFound from "./pages/NotFound";
import NewsletterPage from "./pages/Newsletter";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/classic" element={<Classic />} />

          <Route path="language" element={<Language />} />
          <Route path="editing" element={<Editing />} />
          <Route path="typeChecking" element={<TypeChecking />} />
          <Route path="execution" element={<Execution />} />
          <Route path="distribution" element={<Distribution />} />
          <Route path="traceDriven" element={<TraceDriven />} />
          <Route path="cli" element={<CLI />} />
          <Route path="backends" element={<Backends />} />
          <Route path="ai" element={<AI />} />

          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="company" element={<Company />} />
          <Route path="our-cloud" element={<Cloud />} />
          <Route path="for" element={<ForX />} />
          <Route path="newsletter" element={<NewsletterPage />} />
          {/* <Route path="packages" element={<Packages />} /> */}
          {/* <Route path="packages/:packageName" element={<PackageDetail />} /> */}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
