import React from "react";
import Header from "../Components/Header"; // Importing the Header component
import Hero from "../Components/Hero"; // Importing the Hero component
import GenereMovieList from "../Components/GenereMovieList"; // Importing the GenereMovieList component
import Footer from "../Components/Footer"; // Importing the footer component

// Home component - serves as the main landing page of the application
function Home() {
  return (
    <div>
      <Header /> {/* Renders the navigation header */}
      <Hero /> {/* Renders the main hero section */}
      <GenereMovieList /> {/* Renders the main hero section */}
      <Footer/> {/* Renders the main footer section */}
    </div>
  );
}

export default Home;
