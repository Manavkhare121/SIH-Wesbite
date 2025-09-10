import React, { useState } from "react";
import "./BookingAppointment.css";

const BookingAppointment = () => {
  const [problem, setProblem] = useState("");
  const [date, setDate] = useState("");
  const [showProblemInput, setShowProblemInput] = useState(false);
  const [showDateInput, setShowDateInput] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleConfirm = () => {
    if (!problem || !date) return;

    if (editIndex !== null) {
      const updated = [...bookings];
      updated[editIndex] = { problem, date };
      setBookings(updated);
      setEditIndex(null);
    } else {
      setBookings([...bookings, { problem, date }]);
    }

    setProblem("");
    setDate("");
    setShowProblemInput(false);
    setShowDateInput(false);
  };

  const handleEdit = (index) => {
    setProblem(bookings[index].problem);
    setDate(bookings[index].date);
    setEditIndex(index);
    setShowProblemInput(true);
    setShowDateInput(true);
  };

  const handleDelete = (index) => {
    setBookings(bookings.filter((_, i) => i !== index));
  };

  return (
    <div className="booking-container">
      <div className="dashboard-session-container">
        <div className="dashboard-header">
          <h1>Session Status</h1>
        </div>

        <div className="dashboard-details">
          <div className="dashboard-details-left">
            <div className="dashboard-item">
              <div
                className="dashboard-box"
                onClick={() => setShowProblemInput(!showProblemInput)}
              >
                <h1>Problem</h1>
              </div>
              {showProblemInput && (
                <input
                  type="text"
                  placeholder="Enter your problem"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  className="dashboard-input"
                />
              )}
            </div>

            <div className="dashboard-item">
              <div
                className="dashboard-box"
                onClick={() => setShowDateInput(!showDateInput)}
              >
                <h1>Date</h1>
              </div>
              {showDateInput && (
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="dashboard-input"
                />
              )}
            </div>
          </div>

          <div className="dashboard-details-right">
            <div className="dashboard-button" onClick={handleConfirm}>
              <p>{editIndex !== null ? "Update" : "Confirm"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="booked-details">
        <h2>Booking Status</h2>
        {bookings.length === 0 ? (
          <p className="no-booking">No bookings yet.</p>
        ) : (
          bookings.map((b, i) => (
            <div key={i} className="booking-entry">
              <div>
                <p>
                  <strong>Problem:</strong> {b.problem}
                </p>
                <p>
                  <strong>Date:</strong> {b.date}
                </p>
              </div>
              <div className="booking-actions">
                <button className="edit-btn" onClick={() => handleEdit(i)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(i)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookingAppointment;
