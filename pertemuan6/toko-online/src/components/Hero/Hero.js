import React from "react";
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="container">
        <section className="hero">
          <div className="hero-left">
            <h1 className="hero-title">Gaming Equipment</h1>
            <p className="hero-genre">Get Your Set Up Here</p>
            <p className="hero-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic
              iure porro cumque, assumenda nobis sequi quam modi quae corrupti
              provident optio, culpa consequatur nostrum repellat at, eum
              facere. Voluptas.
            </p>
            <p className="hero-button"></p>
          </div>
          <div class="hero-right">
            <img className="hero-image" src="https://picsum.photos/200" alt="hero-img" />
          </div>
        </section>
      </div>
    </div>
    // <div>
    //   <div className="hero">
    //     <div class="hero-left">
    //       Your Gaming Experience
    //     </div>
    //     <div class="hero-right">
    //       Your Gaming Partner
    //     </div>
    //       {/* <p class="hero-left">
    //         Your Gaming Experience
    //       </p>
    //       <p class="hero-right">
    //         Your Gaming Partner
    //       </p> */}
    //   </div>
    // </div>
  );
};

export default Hero;