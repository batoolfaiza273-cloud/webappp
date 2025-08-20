import React from 'react';
import Navbar from '../Frontend/Navbar.jsx'
import './Task.css';
import TaaskList from './Plan/TaaskList';
import Footer from '../Frontend/Footer';
import Card from 'react-bootstrap/Card';
import icon2 from '../../Assets/icon2.png';

const Task = () => {
  return (
    <>
  <Navbar/>

      <div style={{ padding: '10px',paddingTop:"20px",
       }}>
      <h1  className="p" > Task & Plan Management</h1>
    </div>
    <TaaskList/>
    


       <div className="advantage">
         <Card style={{ width: '16rem',height:'16rem' ,backgroundColor:" #EAEBD0",border:"none",boxShadow:"0 0 10px rgba(0, 123, 255, 0.5)"  }}>
      <Card.Img  variant='top' src={icon2} style={{width:"60px",marginLeft:"80px",paddingTop:"40px"}}
      />
      <Card.Body>
        
        <Card.Text  style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"#AF3E3E"}}>
        A smart healthcare platform for appointments, medication alerts, SOS emergencies, and a health resource center keeping patients and families informed in real time.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem',height:'16rem' ,backgroundColor:" #EAEBD0",border:"none" ,boxShadow:"0 0 10px rgba(0, 123, 255, 0.5)" }}>
      <Card.Img  variant='top' src={icon2} style={{width:"60px",marginLeft:"80px",paddingTop:"40px"}}
      />
      <Card.Body>
        
        <Card.Text  style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"#AF3E3E"}}>
       A good system also provides reminders, progress tracking, and categorization to keep work organized and prevent important items from being overlooked.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem',height:'16rem' ,backgroundColor:" #EAEBD0",border:"none",boxShadow:"0 0 10px rgba(0, 123, 255, 0.5)"  }}>
      <Card.Img  variant='top' src={icon2} style={{width:"60px",marginLeft:"80px",paddingTop:"40px"}}
      />
      <Card.Body>
        
        <Card.Text  style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"#AF3E3E"}}>
         It involves creating tasks, grouping them into plans, assigning responsibilities, and setting deadlines to ensure timely completion.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>

    <Footer/>
    </>
  )
}

export default Task

