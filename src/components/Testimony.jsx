import React from "react";
import { FaStar } from "react-icons/fa";
const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The food was absolutely amazing! I loved the Greek Salad — fresh, flavorful, and perfect for lunch.",
    avatar: "https://i.pravatar.cc/100?img=1 ",
  },
  {
    name: "John D.",
    rating: 5,
    text: "Best grilled fish I’ve ever had. The service was top-notch and the ambiance was very cozy.",
    avatar: "https://i.pravatar.cc/100?img=2 ",
  },
  {
    name: "Linda R.",
    rating: 5,
    text: "The lemon cake is to die for! Moist, zesty, and not too sweet. Definitely coming back soon.",
    avatar: "https://i.pravatar.cc/100?img=3 ",
  },
];
const Testimony = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="testimonial-avatar"
              />
              <div>
                <h4>{testimonial.name}</h4>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
                </div>
              </div>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimony;
