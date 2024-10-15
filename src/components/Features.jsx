import React from 'react';
// import { useNavigate } from 'react-router-dom';


function Features() {
    // const navigate = useNavigate();

    // const handleButtonClick = () => {
    //   navigate('/chat'); // Programmatic navigation to the about page
    // };
  return (
    <section className="features">
      <h2>Welcome To Taugle</h2>
      <div className="feature-boxes">
        <div className="feature">
          <h3>(1) Audio First</h3>
          <hr className='divider'/>
          <p>
            Taugle Conversations<br/> start with a 10-second<br/> audio portion, followed<br/> by video activation.
          </p>
          <br/>
          <p>Why?</p>
          <br/>
          <p>We want to create<br/> authenticity through<br/> conversation.</p>
        </div>
        <div className="feature">
          <h3>(2) How Was It</h3>
          <hr className='divider'/>
          <p>
            To skip to the next chat,<br/> you have to rate your<br/> experience with our<br/> smiley rating.
          </p>
          <br/>
          <p>Why?</p>
          <br/>
          <p>Your experience<br/> determines your<br/> vector rating.</p>
        </div>
        <div className="feature">
          <h3>(3) Your Vector</h3>
          <hr className='divider'/>
          <p>
            The higher your vector <br/> rating, the better<br/> people you interact<br/> with.
          </p>
          <br/>
          <p>Why?</p>
          <br/>
          <p>The friendlier you are,<br/> the more friends you<br /> meet.</p>
        </div>
      </div>
      <div className='hook'>Conversations Matter. Authenticity Matters.</div>
      <button className="begin-button">Begin</button>
    </section>
  );
}

export default Features;
