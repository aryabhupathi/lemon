import React from "react";
import hero from "../images/herorest.png";
import ReservationModal from "./Reservation";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We're a family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist. Come experience the flavors of the
            Mediterranean right in the heart of Chicago.
          </p>
          <button className="cta-button" onClick={() => setIsModalOpen(true)}>
            Reserve a Table
          </button>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Little Lemon Restaurant" />
        </div>
      </section>
      {isModalOpen && <ReservationModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Hero;