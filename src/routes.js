import Index from "./views/Index.js";
import Profile from "./views/examples/Profile.js";
import UserProfile from "./views/examples/UserProfile.js";
import Maps from "./views/examples/Maps.js";
import Register from "./views/examples/Register.js";
import Login from "./views/examples/Login.js";
import Patients from "./views/examples/Patients.js";
import Icons from "./views/examples/Icons.js";
import Appointment from "./views/examples/Appointment.js";
import Consultation from "./views/examples/Consultation.js";
import Reminders from "./views/examples/Reminders.js";
import MedicineOrder from "./views/examples/MedicineOrder.js";
import LabTests from "./views/examples/LabTests.js";
import MyDoctors from "./views/examples/MyDoctors.js";
import MedicalRecords from "./views/examples/MedicalRecords.js";
import UserIndex from "./views/UserIndex.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/patients",
    name: "Patients",
    icon: "ni ni-bullet-list-67 text-red",
    component: Patients,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: UserIndex,
    layout: "/patient"
  },
  {
    path: "/appointment",
    name: "Appointments",
    icon: "ni ni-bullet-list-67 text-red",
    component: Appointment,
    layout: "/patient"
  },
  {
    path: "/consultation",
    name: "Consultations",
    icon: "ni ni-planet text-blue",
    component: Consultation,
    layout: "/patient"
  },
  {
    path: "/reminders",
    name: "Reminders",
    icon: "ni ni-planet text-blue",
    component: Reminders,
    layout: "/patient"
  },
  {
    path: "/medicine-order",
    name: "Medicine Orders",
    icon: "ni ni-planet text-blue",
    component: MedicineOrder,
    layout: "/patient"
  },
  {
    path: "/lab-tests",
    name: "Lab Tests",
    icon: "ni ni-planet text-blue",
    component: LabTests,
    layout: "/patient"
  },
  {
    path: "/my-doctors",
    name: "My Doctors",
    icon: "ni ni-planet text-blue",
    component: MyDoctors,
    layout: "/patient"
  },
  {
    path: "/medical-records",
    name: "Medical Records",
    icon: "ni ni-pin-3 text-orange",
    component: MedicalRecords,
    layout: "/patient"
  },
  {
    path: "/user-profile",
    name: "My Profile",
    icon: "ni ni-single-02 text-yellow",
    component: UserProfile,
    layout: "/patient"
  }
];
export default routes;
