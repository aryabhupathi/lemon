import React from "react";
import Lemon from "../images/lemonlogo.png";
const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. Our menu is inspired
            by the fresh, vibrant flavors of the Mediterranean, using locally
            sourced ingredients whenever possible.
          </p>
          <p>
            Located in the heart of Chicago, Little Lemon brings together the
            warmth of authentic cuisine and the comfort of home. Whether it's
            our handcrafted lemon cake or the mouthwatering grilled fish, we
            promise an unforgettable dining experience.
          </p>
        </div>
        <div className="about-image">
          <img src={Lemon} alt="Little Lemon Restaurant" />
        </div>
      </div>
    </section>
  );
};
export default About;
