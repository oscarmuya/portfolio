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
    <div className="about flex flex-col gap-4 lg:flex-row relative" id="About">
      <div className="about__banner md:border-r">
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
      <div id="Contact" className="about__content gap-10 p-5">
        <div className="about__description">
          <p className="about__infos-text flex flex-col gap-7">
            {/* <span>My name is Oscar Muya I am a Web developer</span>
            <span> based in Kenya. I have a keen interest </span>
            <span>in Front end development. I've also specialised</span>
            <span>in Backend development. You can also refer to</span>
            <span>me as a Fullstack developer 😅</span>
            <span className="last__text">Feel free to drop me a line!</span>
            <span>Cheers 🎈</span> */}
            <span>
              I am Oscar Muya, a dynamic and visionary entrepreneur based in
              Kenya. With a passion for innovation and a deep understanding of
              technology, I have successfully founded multiple startups that
              have made significant impacts in their respective industries.
            </span>
            {/* <span>
              One of my notable achievements is the creation of the
              groundbreaking MyDate app, a revolutionary platform tailored for
              university students. MyDate has transformed the way students
              connect, fostering meaningful relationships and enhancing the
              social experiences of countless users.
            </span>
            <span>
              In addition to MyDate, I am the mastermind behind Neo AI, a
              cutting-edge artificial intelligence startup. Neo AI is at the
              forefront of technological advancement, offering innovative AI
              solutions that are reshaping industries and driving digital
              transformation.
            </span> */}
            <span>
              My expertise extends beyond entrepreneurship. I am an
              exceptionally skilled coder and designer, with a keen eye for
              detail and a relentless drive for excellence. My technical
              proficiency and creative acumen have been instrumental in the
              success of my ventures, allowing me to build robust, user-centric
              applications and systems.
            </span>
            <span>
              As a forward-thinker with an unwavering commitment to pushing
              boundaries, I continue to inspire and lead in the tech space. My
              journey is a testament to the power of ingenuity and perseverance,
              making me a true trailblazer in the world of startups.
            </span>
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
