import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import LatestJobs from "./components/LatestJobs";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingPage onFinish={() => setIsLoading(false)} />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <Partners />
          <LatestJobs />
          <Footer />
        </div>
      )}
    </>
  );
}


