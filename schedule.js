import { db, auth } from './firebase.js';
import { collection, addDoc, Timestamp } from "firebase/firestore";

// Schedule an appointment
document.getElementById('scheduleForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const teacherId = document.getElementById('teacherId').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;

    try {
        const appointment = await addDoc(collection(db, "Appointments"), {
            studentId: auth.currentUser.uid,
            teacherId: teacherId,
            date: date,
            time: time,
            message: message,
            status: "Pending",
            createdAt: Timestamp.now()
        });
        console.log("Appointment Scheduled:", appointment.id);
    } catch (error) {
        console.error("Error:", error);
    }
});
