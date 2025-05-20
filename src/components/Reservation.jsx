// import React from "react";
// const Reservation = () => {
//   const handleReserve = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData.entries());
//     console.log(data);
//   };
//   return (
//     <div>
//       Reservation
//       <form onSubmit={handleReserve}>
//         <label>Name:</label>
//         <input type="text" name="name" required />
//         <label>Occasion</label>
//         <select name="occasion" required>
//           <option value="">Select occasion</option>
//           <option value="birthday">Birthday</option>
//           <option value="anniversary">Anniversary</option>
//           <option value="wedding">Wedding</option>
//           <option value="other">Other</option>
//         </select>
//         <label>Number of guests:</label>
//         <input type="number" name="guests" min="1" required />
//         <label>Date:</label>
//         <input type="date" name="date" required />
//         <label>Time:</label>
//         <input type="time" name="time" required />
//         <button>Reserve a table</button>
//       </form>
//     </div>
//   );
// };
// export default Reservation;

import React from "react";
import Toast from "./Toast"; // Reuse the same toast we built earlier

const ReservationModal = ({ onClose }) => {
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleReserve = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);

    setToastMessage("Table reserved successfully!");
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      onClose();
    }, 3000);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Reserve a Table</h2>
          <form onSubmit={handleReserve} className="reservation-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" name="occasion" required>
                <option value="">Select occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="wedding">Wedding</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <input id="guests" type="number" name="guests" min="1" required />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input id="date" type="date" name="date" required />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input id="time" type="time" name="time" required />
            </div>

            <button type="submit" className="submit-btn">
              Reserve a Table
            </button>
          </form>
        </div>
      </div>

      <Toast message={toastMessage} show={showToast} onClose={() => setShowToast(false)} />
    </>
  );
};

export default ReservationModal;