import React from 'react'
import Navbar from '../Frontend/Navbar.jsx'
import Card from 'react-bootstrap/Card';

const Heal = () => {
  return (
    <>
   
      <Navbar/>
  
    <div className="about-container">
      <h2 className="about-heading">Care That Feels Like Home</h2>
      <p className="about-subtext">
        We strive to connect families with the right caregivers and healthcare
        resources, helping their loved ones stay safe, healthy, and comfortable
        at home.
      </p>

      <div className="about-card-wrapper">
        <Card className="about-card-outer">
          <Card.Body className="about-card-inner">
            <div className="abouts">
              <h4 className="section-heading">About HealSync</h4>
              <Card className="about-text-card">
                <Card.Body>
                  
                  <p>
                    HealSync is a smart healthcare platform designed to help
                    families keep their loved ones safe, healthy, and
                    comfortable at home. We understand that many people prefer
                    to receive care in their own homes, surrounded by
                    familiarity. That’s why HealSync combines advanced
                    technology with compassionate support to connect patients
                    and their families with the right caregivers, medical
                    services, and resources making it easier to plan,
                    coordinate, and manage care from anywhere.
                  </p>

                  <h4 className="section-heading">Our Services</h4>
                  <p>
                    HealSync offers its care-matching and health management
                    tools at no cost to families. Our platform is supported by
                    partnerships with trusted healthcare providers, home care
                    agencies, and service networks. These collaborations allow
                    us to deliver a wide range of caregiving resources without
                    passing any costs on to you.
                  </p>

                  <h4 className="section-heading">Care Matching & Referrals</h4>
                  <p>
                    Our Care Coordinators work with families to match them with
                    trusted providers in their area based on medical needs,
                    location, and personal preferences. Providers may support
                    HealSync through referral fees, partnerships, or premium
                    listings in our directory but regardless of payment, our
                    commitment is to connect you with the best possible care
                    options.
                  </p>
                  <p>
                    HealSync’s referral service is designed to guide your
                    search, not replace your judgment. We encourage families to
                    review provider details, check ratings, and have direct
                    conversations to ensure the best fit for their loved ones.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>


    </>
  )
}

export default Heal
