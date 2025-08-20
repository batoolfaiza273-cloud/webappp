import React from 'react'
import CalendarPage from './Appointments/CalendarPage';
import Navbar from '../Frontend/Navbar.jsx'
import Footer from '../Frontend/Footer';
const Appointment = () => {
  return (
    <>
    <div >
   <Navbar/>
         

          <CalendarPage/>

          <Footer/>
          </div>
    </>
  )
}

export default Appointment;
