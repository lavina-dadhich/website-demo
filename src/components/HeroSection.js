import React from "react";
import { Button } from "./Button";
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h2>ADVENTURE AWAITS</h2>
      <p>what are you writing for?</p>
      <div className="hero-btn">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRALIER <i className='far
          fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
