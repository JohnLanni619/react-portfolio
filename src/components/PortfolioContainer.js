import { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Projects";
import Resume from "./pages/Resume";

export default function Portfolio() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState("Home");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About Me":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Projects":
        return <Project />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="my-5" id="page">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage()}</div>
    </div>
  );
}
