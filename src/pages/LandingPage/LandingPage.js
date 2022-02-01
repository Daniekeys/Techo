import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import bluelogo from "../../assets/bluelogo.png";
import landingImg from "../../assets/intro.png";
import ilusA from "../../assets/ilus1.png";
import ilusB from "../../assets/ilus2.png";
import ilusC from "../../assets/ilus3.png";
import ilusD from "../../assets/ilus4.png";
import Header from "../../components/header/Header";
import whitelogo from "../../assets/whitelogo.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import media from "../../assets/media.png";
import "./landingstyles.css";
import Section1 from "../../components/Section1/Section1";
import Section2 from "../../components/Section2/Section2";
import Section3 from "../../components/Section3/Section3";
import GetStartedSection from "../../components/GetStartedSection/GetStartedSection";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
const pathway = [
  {
    number: "1",
    class: "number-one",
    step: "Kick start your tech career",
  },
  {
    number: "2",
    class: "number-two",
    step: "Choose the right career path",
  },
  {
    number: "3",
    class: "number-three",
    step: "Upskill and grow with community support",
  },
  {
    number: "4",
    class: "number-four",
    step: "Share and access local and global opportunities",
  },
  {
    number: "5",
    class: "number-five",
    step: "Find jobs build projects, change the world!",
  },
  {
    number: "6",
    class: "number-six",
    step: "Continue to grow and earn whilst giving back to the society",
  },
];

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className="landingBody">
        <Grid container className={classes.container}>
          <Container className={classes.LandingNav}>
            <Grid item xs={6}>
              <img
                src={bluelogo}
                alt="Techsemester logo"
                className={classes.logo}
              />
            </Grid>
            <Grid item xs={6} className={classes.btnContainer}>
              <Button component={Link} to="/auth" className={classes.loginBtn}>
                Login
              </Button>
              <Button
                component={Link}
                to="/auth"
                className={classes.registerBtn}
              >
                Register
              </Button>
            </Grid>
          </Container>

          <Header />
          <Section1 />
          <Section2 />
          <Section3 />

          {/* <div className="sectionTwo">
            We help you build a global tech career starting from scratch
          </div> */}
          {/* <div className="sectionThree">
            <div className="b-left">
              <img
                src={ilusA}
                alt="techsemester ilustration"
                className="ilus-img"
              />
              <p className="ilus-text">
                Learn the skills needed to access local and global opportunities
                you desire
              </p>
            </div>
            <div className="b-right">
              <img
                src={ilusB}
                alt="techsemester ilustration"
                className="ilus-img"
              />
              <p className="ilus-text">
                Give back to society by mentoring tech learners from your
                experience with ease
              </p>
            </div>
          </div> */}
          {/* <div className="sectionThree">
            <div className="b-left">
              <img
                src={ilusD}
                alt="techsemester ilustration"
                className="ilus-img"
              />
            </div>
            <div className="b-right-1">
              <h2 className="bold-1">Connect</h2>
              <h2 className="bold-1">Co-Learn and</h2>
              <h2 className="bold-1">Co-share</h2>
              <p className="ilus-text-1">with tech ecosystem</p>
            </div>
          </div> */}
          {/* TIMELINE DIV */}
          <div className="timeline-div">
            {/* <DesktopTimeline /> */}
            <h1 className="pathway-head">User Pathway</h1>
            <ul className="pathway-list">
              {pathway.map((path, index) => {
                return (
                  <li className="path-item" key={index}>
                    <div className={`${path.class}`}>{path.number}</div>
                    <div className="path-text">{path.step}</div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ******************get started section********************** */}
          <GetStartedSection />
          <NewsLetter />
          <Footer />
          {/* END OF TIMELINE DIV */}
          {/* <div className="sectionFour">
            <div className="d-left">
              <p className="d-left-text">
                Build the change you want to see in the world
              </p>
            </div>
            <div className="d-right">
              <img src={ilusC} className="ilus-img" />
            </div>
          </div> */}

          {/* <div className="sectionFive">
            <div className="e-left">
              <h1 className="e-left-text">You too can tech!</h1>
            </div>
            <div className="e-right">
              <Link to="/register" className="btn-style">
                Get Started
              </Link>
            </div>
          </div> */}
          {/* END OF SECTION 5 */}

          {/* <div className="sectionSix">
            <div className="sectionSix-a">
              <div className="f-left">
                <img
                  src={whitelogo}
                  className="footer-logo"
                  alt="techsemester transparent logo"
                  className="footer-icon"
                />
              </div>
              <div className="f-center">
                <ul className="footer-list">
                  <li className="footer-item">About Us</li>
                  <li className="footer-item">Services</li>
                  <li className="footer-item">Contact Us</li>
                </ul>
              </div>
              <div className="f-right">
                <ul className="footer-list">
                  <li className="footer-item2">
                    <img
                      src={phone}
                      alt="phone-icon"
                      className="footer-icons"
                    />
                    <a href="+2347081441122" className="footer-phone">
                      +2347081441122
                    </a>
                  </li>
                  <li className="footer-item2">
                    <img src={mail} alt="phone-icon" className="footer-icons" />
                    <a href="admin@techsemester.com" className="footer-phone">
                      admin@techsemester.com
                    </a>
                  </li>
                  <li className="footer-item3">
                    <img src={media} alt="phone-icon" />
                  </li>
                </ul>
              </div>
            </div>
            <hr className="division" />
            <p className="copywrite">
              Copyright Tech Semester. All right Reserved
            </p>
          </div> */}
        </Grid>
      </div>
    </>
  );
};

export default LandingPage;
