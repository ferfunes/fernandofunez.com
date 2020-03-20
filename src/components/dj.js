import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer.js";

export const Dj = () => {
  return (
    <div className="">
      <div className=" dj-wrapper">
        <div className="dj-title text-center">
          <h1>THE DJ</h1>
        </div>

        <div className="back-button  text-center ">
          <Link style={{ textDecoration: "none" }} to="/">
            <span className="dj-back">
              <i class="fas fa-chevron-left"></i>
            </span>
          </Link>
        </div>
        <div className="contact-info container text-center mt-5 mb-5">
          <p className="dj-text">
            Vinyl lover, bass addict, from House to Techno. <br />
            Enjoy the Show!
          </p>
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/up-and-dance-01192019-san-techno-sula-honduras/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/fernando-funes-promo-mix-051218/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/the-future-sound-of-friday/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/deep-therapy-mixed-by-fernando-funes-june-2014/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/organic-deep-vol-2-november-2013-mixed-by-fernando-fumes/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/organic-deep-by-fernando-fumes-september-2013/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/deep-summer-session-by-fernando-fumes/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/fernando-fumes-promo-mix-june-2013/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/fernando_fumes_promo_mix_may_2013/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/fernando-fumes-soniclabel-radio-mix-03_08_13/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/fernando-fumes-super-cosmica-feb012013/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/fernando-fumes-panther-coffee-art-basel-2011/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/fernando-fumes-da-miami-experimento-vol-2/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/fernando-fumes-da-miami-experimento/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/fernando-fumes-miami-session-4/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player-wrapper ml-5 mr-5">
          <ReactPlayer
            className="react-player"
            url="https://www.mixcloud.com/fernandofumes/fernando-fumes-miami-session-3/"
            width="100%"
            height="100%"
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};
