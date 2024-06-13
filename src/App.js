import React, { useEffect } from "react";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import ImageSection from "./components/ImageSection";
import OnlineExperiences from "./components/OnlineExperiences";

function App() {
   useEffect(() => {
     const link = document.createElement("link");
     link.href =
       "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap";
     link.rel = "stylesheet";
     document.head.appendChild(link);
   }, []);
  return (
    <div>
      <CssBaseline />
      <Header />
      <ImageSection />
      <OnlineExperiences />
    </div>
  );
}

export default App;
