import React from 'react'
import './Dashboard.css'
import {  NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import react from '../../Assets/react.avif';
import Card from 'react-bootstrap/Card';
import mindfulness from '../../Assets/mindfulness.png';
import healthcare from '../../Assets/healthcare.png';
import healthcaree from '../../Assets/healthcaree.png';
import brain from '../../Assets/brain.png';
import planning from '../../Assets/planning.png';
import predict from '../../Assets/predict.png';

const Dashboard = () => {
  return (
    <>
    

             <h3  className="dashboardh">Heal Sync Feature</h3>
    <div>
         <Card className="dashboradcard1" >
            <Card className="dashboradcard2">
                <div className="abouts">
                    <div className="aboutssss">
                        <Card className="dashboardcards3">
                        

                         <div  className="dash1">
          <div >
          <NavLink to="/resourcecenter">
          <button  class="button-48" ><span class="text">Resource Center</span></button> 
          </NavLink>
       </div>
       <div >
           <NavLink to="/healthmontorning">
          <button  class="button-48" ><span class="text">Health Montorning</span></button>
           </NavLink>
       </div>
       </div>

       <div className="dash2">
       <div>
          <NavLink to="/location">
          <button  class="button-48"  ><span class="text">Live Location Tracking</span></button>
          </NavLink>
       </div> 
       <div >
           <NavLink to="/task">
          <button class="button-48"><span class="text">Task Plan & Management</span></button>
           </NavLink>
       </div>
    </div>

    <div className="dash3">
    <div>
     <NavLink to="/mood">
     <button  class="button-48" ><span class="text">Mood Behaviour & Tracking</span></button>
     </NavLink>
    </div>
    <div>
     <NavLink to="/progress">
     <button  class="button-48"  ><span class="text">Progress Tracking & Reports</span></button>
     </NavLink>
    </div>
    </div>
     <div className="dash4">
           <NavLink to="/calender">
          <button  class="button-48"><span class="text">Shared Calendars & Appointment</span></button>
          </NavLink>
        </div>
                       
                        
                        </Card>
                    </div>
                   

                </div>

                        
                       
                
            
    </Card>
      
       
        
     
    </Card>
      </div>









   

<div className="car">
     
      <h2 className="hi" style={{paddingLeft:"40px" ,paddingBottom:"20px"}}>Your Health, Always Connected</h2>
      <p className="pe">HealSync is a modern healthcare platform that keeps patients, families, and doctors connected.</p>
      </div>

      <div className="advantage">
         <Card style={{ width: '16rem',height:'20rem' ,backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img  variant='top' src={brain} style={{width:"60px",marginLeft:"80px",paddingTop:"40px"}}
      />
      <Card.Body>
        
        <Card.Text  style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
        A smart healthcare platform for appointments, medication alerts, SOS emergencies, and a health resource center keeping patients and families informed in real time.
        </Card.Text>
       
      </Card.Body>
    </Card>
     
    <Card style={{ width: '16rem',height:'20rem',backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img variant="top" src={predict} style={{width:"60px",paddingTop:"40px",marginLeft:"80px"}} />
      <Card.Body>
       
        <Card.Text style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
        Manage appointments, get medication reminders, send SOS alerts, and access health resources HealSync keeps care simple and connected.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem',height:'20rem',backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img variant="top" src={planning} style={{width:"60px",paddingTop:"40px",marginLeft:"80px"}} />
      <Card.Body>
       
        <Card.Text style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
        The built-in resource center provides reliable health information, while real-time updates, task alerts, and a family dashboard keep everyone informed.  
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
       


       <div className="advantage" style={{marginTop:"20px"}}>
         <Card style={{ width: '16rem',height:'20rem' ,backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img  variant='top' src={mindfulness} style={{width:"60px",marginLeft:"80px",paddingTop:"40px"}}
      />
      <Card.Body>
        
        <Card.Text  style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
       It offers easy appointment scheduling, timely medication alerts. Users can access a trusted health resource center, receive real-time updates, and track treatment progress through task completion alerts. 
        </Card.Text>
       
      </Card.Body>
    </Card>
     
    <Card style={{ width: '16rem',height:'20rem',backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img variant="top" src={healthcaree} style={{width:"60px",paddingTop:"40px",marginLeft:"80px"}} />
      <Card.Body>
       
        <Card.Text style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
         HealSync is a smart healthcare platform that brings all essential care tools into one place. It helps patients manage appointments, get medication reminders, and send instant SOS alerts to family and doctors in emergencies.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '16rem',height:'20rem',backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img variant="top" src={healthcare} style={{width:"60px",paddingTop:"40px",marginLeft:"80px"}} />
      <Card.Body>
        
        <Card.Text style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
          HealSync connects patients, families, and healthcare providers through appointment scheduling, SOS emergency notifications, and a built-in health resource center ensuring care and updates in real time.
        </Card.Text>
        
      </Card.Body>
    </Card>
    
      </div>


     


<div>
         <Card className="dc" >
            <Card  className="ancard">
                <div className="abouts">
                    <div>
                        <h4 className="dh" > Smarter Care & Stronger Connections</h4>
                        <Card className="dcc" >
                        
                        <h4 className="dabout" >Connect & Coordinate</h4>
                        <p>Securely link patients, families, and healthcare providers in one platform for better communication and updates.</p>

                        <h4 className="dabout" >Alerts & Reminders</h4>
                        <p>Send instant SOS alerts, appointment reminders, and medication notifications to the right people at the right time.</p>
                        <h4 className="dabout" > Resource & Support Hub</h4>
                        <p>Access trusted health guides, service referrals, and wellness tips to manage care confidently at home.</p>
                        <h4 className="dabout"  >Care Connection</h4>
                        <p>Keep patients, families, and providers connected in real time.</p>
                        <h4  className="dabout" >All-in-One Resource Center</h4>
                        <p>Reliable guides, referrals, and tools for better care.</p>
                        <h4 className="dabout"  >Smart Notifications </h4>
                        <p> Instant SOS alerts, timely reminders, and important updates.</p>
                        <h4 className="dabout" > Home Care</h4>
                        <p> In-home care allows your loved one to receive personalized support in the comfort of their own home.</p>
                        </Card>
                    </div>
                </div>    
    </Card>
    </Card>
      </div>

    <div className="carouseldiv" >
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={react}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="carouselh">Heal Sync</h5>
          <p className="carouselp">HealSync is an all-in-one digital health solution that simplifies patient care and communication. It enables users to manage appointments, receive timely medication alerts, send instant SOS notifications to family members, and access a comprehensive health resource center. With its user-friendly interface and real-time updates, HealSync bridges the gap between patients, families, and healthcare providers, ensuring safety, convenience, and better health management anytime, anywhere.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={react}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="carouselh">Heal Sync</h5>
          <p className="carouselp" >HealSync is a modern healthcare companion that keeps patients and their loved ones connected and informed. From scheduling appointments and tracking medications to sending urgent SOS alerts in emergencies, it ensures care is always within reach. Its built-in resource center provides reliable health information, making it easier to stay informed and take proactive steps toward better well-being. HealSync brings care, safety, and information together in one seamless platform.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={react}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="carouselh">Heal Sync</h5>
          <p className="carouselp" >
           HealSync is a smart healthcare management platform designed to connect patients, family members, and healthcare providers in real time. It offers features like appointment scheduling, medication reminders, SOS emergency alerts, and a resource center for health-related information.By streamlining communication and providing timely notifications, HealSync helps ensure better care, quick responses in emergencies, and improved health outcomes all in one easy-to-use system
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="bottom">
       <h2 className="bottomh">Heal Sync</h2>
    
      <a href="/" className="bottoma1" >Home</a>
      <a href="/benefits" className="bottoma2">About</a>
      <a href="/advantage" className="bottoma3">Advantages</a>
      <a href="/login" className="bottom4">Login</a>
   
      
    </div>
    <div className="bar">
    <p>© Created by</p>
    <p>All rights Reserved</p>
   </div> 
    </>
  )
}

export default Dashboard
