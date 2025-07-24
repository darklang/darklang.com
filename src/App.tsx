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
import Sustainability from "./pages/Company/Sustainability";
import GettingStarted from "./pages/GettingStarted";
import ForX from "./pages/For";
import WebDevelopers from "./pages/For/WebDevelopers";
import PythonDevelopers from "./pages/For/PythonDevelopers";
import AIDevelopers from "./pages/For/AIDevelopers";
import SecurityNerds from "./pages/For/SecurityNerds";
import FSharpDevelopers from "./pages/For/FSharpDevelopers";
import SmallBusinesses from "./pages/For/SmallBusinesses";
import LocalFirst from "./pages/For/LocalFirst";
import WebScrapers from "./pages/For/WebScrapers";
import LazyPeople from "./pages/For/LazyPeople";
import Cloud from "./pages/Cloud";
import Packages from "./pages/Packages";
import PackageDetail from "./pages/PackageDetail";

import NotFound from "./pages/NotFound";
import NewsletterPage from "./pages/Newsletter";
import Support from "./pages/Support";
import SourceControl from "./pages/SourceControl";
import Sharing from "./pages/Sharing";
import No from "./pages/No";
import Stats from "./pages/Stats";

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
          <Route path="type-checking" element={<TypeChecking />} />
          <Route path="execution" element={<Execution />} />
          <Route path="distribution" element={<Distribution />} />
          <Route path="traceDriven" element={<TraceDriven />} />
          <Route path="source-control" element={<SourceControl />} />
          <Route path="cli" element={<CLI />} />
          <Route path="backends" element={<Backends />} />
          <Route path="ai" element={<AI />} />
          <Route path="AI" element={<AI />} />

          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="company" element={<Company />} />
          <Route path="company/sustainability" element={<Sustainability />} />
          <Route path="our-cloud" element={<Cloud />} />
          <Route path="for" element={<ForX />} />
          <Route path="for/web-developers" element={<WebDevelopers />} />
          <Route path="for/python-developers" element={<PythonDevelopers />} />
          <Route path="for/ai-developers" element={<AIDevelopers />} />
          <Route path="for/security-nerds" element={<SecurityNerds />} />
          <Route path="for/fsharp-developers" element={<FSharpDevelopers />} />
          <Route path="for/small-businesses" element={<SmallBusinesses />} />
          <Route path="for/local-first" element={<LocalFirst />} />
          <Route path="for/web-scrapers" element={<WebScrapers />} />
          <Route path="for/lazy-people" element={<LazyPeople />} />
          <Route path="newsletter" element={<NewsletterPage />} />
          <Route path="support" element={<Support />} />
          <Route path="sharing" element={<Sharing />} />
          <Route path="no" element={<No />} />
          <Route path="stats" element={<Stats />} />
          <Route path="packages" element={<Packages />} />
          <Route path="packages/:packageName" element={<PackageDetail />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
