
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="OsiriAI" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://osiri.ai/" />
        <meta property="og:title" content="Grow your business with an AI powered Command Center" />
        <meta property="og:description" content="Transform your business data into actionable insights through natural conversations with OsiriAI. Customize for any industry." />
        <meta property="og:image" content="https://osiri.ai/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OsiriAI" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Testimonials />
        <Pricing />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
