import React from 'react'
import TaskList from './Progresss/Tasklist';
import Navbar from '../Frontend/Navbar';
import Footer from '../Frontend/Footer';


const Progress = () => {
  return (
    <>
<Navbar/>
    <div style={{ padding: '20px' }}>
      <h1 style={{color:"#AF3E3E",fontWeight:"bold",display:"flex",justifyContent:"center"}}> Progress Page & Task Report</h1>
      
    </div>
     <TaskList/>

     <Footer/>
    </>
  )
}

export default Progress
