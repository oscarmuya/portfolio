import "./header.css";

type Props = {
  color: string;
};

function Header({ color }: Props) {
  return (
    <div className={`header flex relative items-center justify-start p-[30px]`}>
      <div className="background overflow-hidden">
        <div className="circle__1"></div>
        <div className="circle__2"></div>
        <div className="circle__3"></div>
        {/* <div className="falling__1 bounce"></div>
        <div className="falling__2 bounce"></div>
        <div className="falling__3 bounce"></div>
        <div className="falling__1 bounce"></div>
        <div className="falling__3 bounce"></div>
        <div className="falling__1 bounce"></div>
        <div className="falling__3 bounce"></div>
        <div className="falling__2 bounce"></div>
        <div className="falling__3 bounce"></div>
        <div className="falling__1 bounce"></div>
        <div className="falling__2 bounce"></div> */}
      </div>
      <div className="content text-secondaryColor">
        <div className="content__top">
          <span>Oscar</span>
        </div>
        <div className="content__middle text-secondaryColor">
          <span>Muya</span>
          <div className="content__middle-desc">
            <span>PROBLEM</span>
            <span>SOLVER</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
