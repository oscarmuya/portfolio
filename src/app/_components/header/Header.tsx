import "./header.css";

type Props = {
  color: string;
};

function Header({ color }: Props) {
  return (
    <div className={`header ${color}`}>
      <div className="background">
        <div className="circle__1"></div>
        <div className="circle__2"></div>
        <div className="circle__3"></div>
        <div className="falling__1 bounce"></div>
        <div className="falling__2 bounce"></div>
        <div className="falling__3 bounce"></div>
        <div className="falling__1 bounce"></div>
        <div className="falling__3 bounce"></div>
        <div className="falling__1 bounce"></div>
        <div className="falling__3 bounce"></div>
        <div className="falling__2 bounce"></div>
        <div className="falling__3 bounce"></div>
        <div className="falling__1 bounce"></div>
        <div className="falling__2 bounce"></div>
      </div>
      <div className="content">
        <div className="content__top">
          <span>Oscar</span>
        </div>
        <div className="content__middle">
          <span>Muya</span>
          <div className="content__middle-desc">
            <span>WEB DEVELOPER</span>
            <span>CURRENTLY BASED</span>
            <span>IN KENYA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
