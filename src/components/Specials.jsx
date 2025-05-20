import React from "react";
import Salad from "../images/greek salad.png";
import Fish from "../images/grilledfish.png";
import Pasta from "../images/pasta primera.png";
import Cake from "../images/lemon cake.png";
const Specials = () => {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>Today's Specials</h2>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={Salad} alt="Greek Salad" className="card-image" />
          <div className="card-content">
            <h3>Greek Salad</h3>
            <p className="price">$12.99</p>
            <p className="description">
              A refreshing mix of ripe tomatoes, crisp cucumbers, red onions,
              Kalamata olives, and creamy feta cheese, drizzled with extra
              virgin olive oil and a touch of oregano.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Fish} alt="Grilled Fish" className="card-image" />
          <div className="card-content">
            <h3>Grilled Fish</h3>
            <p className="price">$18.99</p>
            <p className="description">
              Locally sourced white fish grilled to perfection with a zesty
              lemon-garlic marinade, served with roasted vegetables and a side
              of wild rice.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Pasta} alt="Pasta Primavera" className="card-image" />
          <div className="card-content">
            <h3>Pasta Primavera</h3>
            <p className="price">$14.50</p>
            <p className="description">
              Handmade pasta tossed in a light garlic cream sauce with seasonal
              vegetables like zucchini, bell peppers, cherry tomatoes, and
              asparagus.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Cake} alt="Lemon Cake" className="card-image" />
          <div className="card-content">
            <h3>Lemon Cake</h3>
            <p className="price">$6.00</p>
            <p className="description">
              A moist, handcrafted lemon cake topped with a tangy glaze and
              fresh mint leaves. Made daily using organic lemons and real
              butter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Specials;
