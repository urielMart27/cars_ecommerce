import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AppointmentsTable.css";

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getUpcomingAppointments = async () => {
      try {
        const response = await axios.get(
          "https://localhost:5001/api/employee/appointments"
        );
        console.log("API Response:", response.data);

        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching upcoming appointments: ", error);
      }
    };

    getUpcomingAppointments();
  }, []);

  return (
    <div>
      <h2>Upcoming Appointments</h2>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Service Type</th>
            <th>Service Date</th>
            <th>Car Details</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.serviceType}</td>
              <td>{appointment.serviceDate}</td>
              <td>{`${appointment.associatedCar.year} ${appointment.associatedCar.make} ${appointment.associatedCar.model}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
