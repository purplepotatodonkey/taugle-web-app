import React from 'react';
import missionImage from '../assets/missionImage.png';
import { useNavigate } from 'react-router-dom';


function Mission() {
    // const navigate = useNavigate();

    // const handleButtonClick = () => {
    //   navigate('/chat'); // Programmatic navigation to the about page
    // };

  return (
    <section className="mission">
      <div className="mission-text">
        <h2 className="mission-header">Our Mission</h2>
        <h1 className="mission-statement">
          Creating <br /> Friendships <br />
          <span>Through Digital <br />
                Convenience <br />
          </span>
        </h1>
        <p className="quote">
          “Connecting the world, one conversation at a time—sparking curiosity,
          building bridges, and empowering authentic connections.”
        </p>
        <button className="mission-button">Start A Chat</button>
      </div>
      <div className="mission-img">
        <img src={missionImage} alt="Group of friends" />
      </div>
    </section>
  );
}

export default Mission;