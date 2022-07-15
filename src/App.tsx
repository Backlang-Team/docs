import { Route, Routes } from "solid-app-router";
import type { Component } from "solid-js";
import { lazy } from "solid-js";
import "tailwindcss/tailwind.css";

import Header from "./components/Header";

const Home = lazy(() => import("./routes/Home"));
const GettingStarted = lazy(() => import("./routes/GettingStarted"));
const Docs = lazy(() => import("./routes/Docs"));

const App: Component = () => {
  return (
    <div class="h-screen bg-[#1E1F33]">
      <Header />
      <Routes>
        <Route path="" component={Home} />
        <Route path="getting-started" component={GettingStarted} />
        <Route path="docs/*doc" component={Docs} />
      </Routes>
    </div>
  );
};

export default App;
