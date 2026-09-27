import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./common/utils/ScrollToTop";
import Layout from "./common/layout/Layout";

import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import HomeControl from "./pages/HomeControl";
import Home4 from "./pages/Home4";
import Home5 from "./pages/Home5";
import Home6 from "./pages/Home6";
import Home7 from "./pages/Home7";
import Home8 from "./pages/Home8";
import BuiltForAgents from "./pages/BuiltForAgents";
import AgentIssues from "./pages/AgentIssues";
import Home9 from "./pages/Home9";
import Home10 from "./pages/Home10";
import Home11 from "./pages/Home11";

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
import AIAndSecurity from "./pages/For/AIAndSecurity";
import FSharpDevelopers from "./pages/For/FSharpDevelopers";
import SmallBusinesses from "./pages/For/SmallBusinesses";
import LocalFirst from "./pages/For/LocalFirst";
import WebScrapers from "./pages/For/WebScrapers";
import LazyPeople from "./pages/For/LazyPeople";
import Cloud from "./pages/Cloud";
import Packages from "./pages/Packages";
import PackageDetail from "./pages/PackageDetail";
import PackageManager from "./pages/PackageManager";

import NotFound from "./pages/NotFound";
import NewsletterPage from "./pages/Newsletter";
import Support from "./pages/Support";
import SourceControl from "./pages/SourceControl";
import Sharing from "./pages/Sharing";
import No from "./pages/No";
import History from "./pages/History";
import Stats from "./pages/Stats";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home2 />} />
          <Route path="home2" element={<HomeControl />} />
          <Route path="home4" element={<Home4 />} />
          <Route path="home5" element={<Home5 />} />
          <Route path="home6" element={<Home6 />} />
          <Route path="home7" element={<Home7 />} />
          <Route path="home8" element={<Home8 />} />
          <Route path="home9" element={<Home9 />} />
          <Route path="home10" element={<Home10 />} />
          <Route path="home11" element={<Home11 />} />
          <Route path="built-for-agents" element={<BuiltForAgents />} />
          <Route path="agent-issues" element={<AgentIssues />} />

          <Route path="/classic" element={<Classic />} />

          <Route path="language" element={<Language />} />
          <Route path="editing" element={<Editing />} />
          <Route path="type-checking" element={<TypeChecking />} />
          <Route path="execution" element={<Execution />} />
          <Route path="distribution" element={<Distribution />} />
          <Route path="traceDriven" element={<TraceDriven />} />
          <Route path="source-control" element={<SourceControl />} />
          <Route path="cli" element={<CLI />} />
          <Route path="package-manager" element={<PackageManager />} />
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
          <Route path="for/ai-and-security" element={<AIAndSecurity />} />
          <Route path="for/fsharp-developers" element={<FSharpDevelopers />} />
          <Route path="for/small-businesses" element={<SmallBusinesses />} />
          <Route path="for/local-first" element={<LocalFirst />} />
          <Route path="for/web-scrapers" element={<WebScrapers />} />
          <Route path="for/lazy-people" element={<LazyPeople />} />
          <Route path="newsletter" element={<NewsletterPage />} />
          <Route path="support" element={<Support />} />
          <Route path="sharing" element={<Sharing />} />
          <Route path="no" element={<No />} />
          <Route path="history" element={<History />} />
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
