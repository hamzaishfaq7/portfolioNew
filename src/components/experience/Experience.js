// Import what is needed:
import React from "react";
// This is for custom icons:
import { BiCheckDouble } from "react-icons/bi";
import "./experience.css";

// This is the main:

const Experience = () => {
    // Return Someting:
    return (
        <section id="experience">
      <h5 className="change_size">Here are my:</h5>
      <h2 className="change_size">Skills/Experiences</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BiCheckDouble className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BiCheckDouble className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BiCheckDouble className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BiCheckDouble className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BiCheckDouble className="experience__details-icon" />
              <h4>Git</h4>
            </article>
            <article className="experience__details">
              <BiCheckDouble className="experience__details-icon" />
              <h4>GitHub</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Professional Experience</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BiCheckDouble className="experience__details-icon" />
              <h4>TD Canada Trust (Teller)</h4>
            </article>
            <article className="experience__details">
              <BiCheckDouble className="experience__details-icon" />
              <h4>BestBuy (Computer Tech Representative) </h4>
            </article>
            <article className="experience__details">
              <BiCheckDouble className="experience__details-icon" />
              <h4>Freedom Mobile (Key Holder)</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
    )
}

// Export for use:
export default Experience;