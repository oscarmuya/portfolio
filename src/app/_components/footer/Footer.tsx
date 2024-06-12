import "./footer.css";
type Props = {
  theme: string;
};

function Footer({ theme }: Props) {
  return (
    <div className="footer">
      <div className={`footer__content ${theme}`}>
        <ul>
          <li>
            <a href={"mailto:oscarmuyaofficial@gmail.com"}>Mail</a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://www.instagram.com/oscarmuya/"}
            >
              instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://twitter.com/oscar_muya"}
            >
              twitter
            </a>
          </li>
        </ul>
        <div className="footer__content-link">
          <a href={"tel:+254743636977"}>Call</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
