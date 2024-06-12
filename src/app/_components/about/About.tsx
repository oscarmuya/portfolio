import "./about.css";

type Props = {};

function About({}: Props) {
  var today = new Date();
  var curHr = today.getHours();

  let time = "";
  if (curHr < 12) {
    time = "Morning!";
  } else if (curHr < 17) {
    time = "Afternoon!";
  } else {
    time = "Evening!";
  }

  return (
    <div className="about" id="About">
      <div className="about__banner">
        <div className="banner__background">
          <div className="ball__1"></div>
          <div className="ball__2"></div>
        </div>
        <div className="banner__content">
          <div className="banner__top">
            <span>Good</span>
          </div>
          <div className="banner__middle">
            <span>{time}</span>
          </div>
        </div>
      </div>
      <div id="Contact" className="about__content">
        <div className="about__description">
          <p className="about__infos-text">
            <span>My name is Oscar Muya I am a Web developer</span>
            <span> based in Kenya. I have a keen interest </span>
            <span>in Front end development. I've also specialised</span>
            <span>in Backend development. You can also refer to</span>
            <span>me as a Fullstack developer 😅</span>
            <span className="last__text">Feel free to drop me a line!</span>
            <span>Cheers 🎈</span>
          </p>
        </div>
        <div className="contacts">
          <h5>contact</h5>
          <ul>
            <li>
              <span>Mail</span>
              <a href={"mailto:oscarmuyaofficial@gmail.com"}>
                {"oscarmuyaofficial@gmail.com"}
              </a>
            </li>
            <li>
              <span>Call</span>
              <a href={"tel:+254743636977"}>{"+254743636977"}</a>
            </li>
            <li>
              <span>Instagram</span>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://www.instagram.com/oscarmuya/"}
              >
                @oscarmuya
              </a>
            </li>
            <li>
              <span>Twitter</span>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://twitter.com/oscar_muya"}
              >
                @oscar_muya
              </a>
            </li>
            <li>
              <span>Github</span>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://github.com/oscarmuya"}
              >
                @oscarmuya
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
