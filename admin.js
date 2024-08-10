import { db } from './firebase.js';
import { doc, updateDoc } from "firebase/firestore";

// Approve or cancel an appointment
async function updateAppointmentStatus(appointmentId, status) {
    const appointmentRef = doc(db, "Appointments", appointmentId);
    try {
        await updateDoc(appointmentRef, { status: status });
        console.log("Appointment updated:", status);
    } catch (error) {
        console.error("Error:", error);
    }
}
