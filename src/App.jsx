import React from "react";
import Header from "./header";
import Home from "./home";
import About from "./about";
import Workprocess from "./workprocess";
import Portfolio from "./portfolio";
import Projectidea from "./projectidea";
import Blog from "./blog";
import What from "./whatido";
import Happy from "./happyclient";
import Happyclient from "./happyclient2";
import Contact from "./Contact";
import Copy from "./copy";
import Profile from "./Profile";
import './app.css'

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-500 min-h-screen font-sans selection:bg-violet-500/35 selection:text-violet-950 dark:selection:text-violet-100">
      <Header />
      
      <main className="pt-20">
        <section id="profile">
          <Profile />
        </section>

      <section id="about">
        <About />
      </section>

      <section id="process">
        <Workprocess />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="projectidea">
        <Projectidea />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="what">
        <What />
      </section>

      <section id="happy">
        <Happy />
      </section>

      <section id="happyclient">
        <Happyclient />
      </section>

      <section id="address">
        <Contact />
      </section>

      <section id="copy">
        <Copy />
      </section>
      </main>
    </div>
  );
}

export default App;