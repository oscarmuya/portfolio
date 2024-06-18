"use client";

import { useState, useEffect } from "react";

import About from "../_components/about/About";
import Footer from "../_components/footer/Footer";
import Header from "../_components/header/Header";
import Projects from "../_components/projects/Projects";
import ProjectView from "../_components/projectview/ProjectView";

import arrow from "../../assets/arrow.png";
import view from "../../assets/eye.gif";
import { projectProps } from "@/types";

type Props = {
  usedColor: string;
};

const MainContent = ({ usedColor }: Props) => {
  const [projects, setProjects] = useState<projectProps[]>([]);
  const [previews, setPreviews] = useState({});
  const [openProject, setOpenProject] = useState<projectProps>();
  const [projectViewIsOpen, setProjectViewIsOpen] = useState(false);
  const [mouseBallImage, setMouseBallImage] = useState(arrow);
  const [mouseXloc, setMouseXloc] = useState("");
  const [mouseOnProjects, setMouseOnProjects] = useState(false);
  const [mouseOnAbout, setMouseOnAbout] = useState(false);
  const [mouseballOnCloseProjectView, setMouseballOnCloseProjectView] =
    useState(false);
  const [mouseBallOnOpenProject, setMouseBallOnOpenProject] = useState(false);
  const [disableMouseBall, setDisableMouseBall] = useState(false);
  const [showTransition, setShowTransition] = useState(true);
  const [transitionType, setTransitionType] = useState("loading");
  const [mouseOnPreview, setMouseOnPreview] = useState(false);
  const [mouseOnPreviewXloc, setMouseOnPreviewXloc] = useState("");
  const [disableScrolling, setDisableScrolling] = useState(false);
  const [footerColor, setFooterColor] = useState("light");
  const [details, setDetails] = useState({});

  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  appHeight();

  useEffect(
    () =>
      projectViewIsOpen ? setMouseBallImage(view) : setMouseBallImage(arrow),
    [projectViewIsOpen]
  );

  var count = 0;
  const handleMoveBallEvents = () => {
    if (mouseOnProjects) {
      var projects = document.querySelector(".projects__content") as Element;
      let maxScrollLeft = projects.scrollWidth - window.innerWidth;
      if (projects.scrollLeft >= window.innerWidth) {
        let totalProjectsChildren = projects.childElementCount;
        count =
          totalProjectsChildren -
          Math.ceil(maxScrollLeft / projects.scrollLeft);
      } else {
        count = 0;
      }
      if (mouseXloc === "left") {
        if (projects.scrollLeft !== 0 && count > 0) {
          count -= 1;
          let scrollWidth = window.innerWidth * count;
          projects.scrollLeft = scrollWidth;
        }
      } else if (mouseXloc === "right") {
        if (projects.scrollLeft !== maxScrollLeft) {
          count += 1;
          let scrollWidth = window.innerWidth * count;
          projects.scrollLeft = scrollWidth;
        }
      }
    } else if (mouseOnAbout) {
      var about = document.querySelector(".about") as HTMLElement;
      if (mouseXloc === "left") {
        about.scrollLeft = 0;
      } else if (mouseXloc === "right") {
        about.scrollLeft = window.innerWidth;
      }
    }
  };
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var scrollToY = 0;

  useEffect(() => {
    //reset scroll
    var myCanvas = document.getElementById("scrollContent") as HTMLElement;
    var rect = myCanvas.getBoundingClientRect();
    var mouseX = 0;
    var ballX = 0;
    var mouseY = 0;
    var ballY = 0;
    var spd = 10;
    var easeAmt = 0.11;

    document.onmousemove = mouseMove;

    let cancel: null | number = null;
    function loop() {
      moveBall();
      cancel = requestAnimationFrame(loop);
    }
    loop();

    function mouseMove(evt: MouseEvent) {
      mouseX = evt.pageX;
      mouseY = evt.pageY;
      var about = document.querySelector(".about") as HTMLElement;

      //GET MOUSE POSITION ON PROJECTS DIV
      if (
        window.innerHeight - scrollToY / -1 <= mouseY &&
        window.innerHeight * 2 - scrollToY / -1 >= mouseY
      ) {
        setMouseOnProjects(true);
        //GET LEFT OR RIGHT POSITION OF MOUSE
        if (mouseX < rect.width / 2) {
          setMouseXloc("left");
        } else {
          setMouseXloc("right");
        }
      } else {
        setMouseOnProjects(false);
      }
      //GET MOUSE POSITION ON ABOUT DIV
      if (window.innerHeight * 2 - scrollToY / -1 <= mouseY) {
        setMouseOnAbout(true);

        //GET LEFT OR RIGHT POSITION OF MOUSE
        if (mouseX < rect.width / 2) {
          setMouseXloc("left");
          setDisableMouseBall(false);
        } else {
          setMouseXloc("right");
          //MOUSE BALL ON CONTACTS
          if (about.scrollLeft > 0) {
            setDisableMouseBall(true);
          } else {
            setDisableMouseBall(false);
          }
        }
      } else {
        setMouseOnAbout(false);
      }
      //GET MOUSE POSITION ON PREVIEW VIDEO
      let top = 0.15185064935;
      let bottom = 0.15185064935;
      let left = 0.01388888889;
      let right = 0.402777777778;
      let middle = 0.291666666;
      if (
        mouseX < (1 - right) * window.innerWidth &&
        mouseX > left * window.innerWidth &&
        mouseY > top * window.innerHeight &&
        mouseY < (1 - bottom) * window.innerHeight
      ) {
        setMouseOnPreview(true);
        if (
          mouseX > left * window.innerWidth &&
          mouseX < (left + middle) * window.innerWidth
        ) {
          setMouseOnPreviewXloc("left");
        } else if (
          mouseX > (left + middle) * window.innerWidth &&
          mouseX < (left + 2 * middle) * window.innerWidth
        ) {
          setMouseOnPreviewXloc("right");
        } else {
          setMouseOnPreviewXloc("middle");
        }
      } else {
        setMouseOnPreview(false);
        setMouseOnPreviewXloc("middle");
      }
      //GET MOUSEBALL ON FOOTER
      console.log(mouseY, window.innerHeight, window.scrollY);

      // if (mouseY > window.innerHeight - 100) {
      //   console.log("on footer");

      //   setDisableMouseBall(true);
      // } else if (about.scrollLeft < 1) {
      //   setDisableMouseBall(false);
      // } else if (!(window.innerHeight * 2 - scrollToY / -1 <= mouseY)) {
      //   setDisableMouseBall(false);
      // }
      //GET MOUSEBALL ON CLOSE PROJECTVIEW BUTTON
      let buttonLeft = 0.853611111;
      let buttonBottom = 0.208888888;
      if (
        mouseX > buttonLeft * window.innerWidth &&
        mouseY < buttonBottom * window.innerHeight
      ) {
        setMouseballOnCloseProjectView(true);
      } else {
        setMouseballOnCloseProjectView(false);
      }
    }

    function moveBall() {
      //get the distance between the mouse and the ball on both axes
      //walk only the an eight of the distance to create a smooth fadeout
      var dx = (mouseX - ballX) * easeAmt;
      var dy = (mouseY - ballY) * easeAmt;
      //calculate the distance this would move ...
      var distance = Math.sqrt(dx * dx + dy * dy);
      //... and cap it at spd
      if (distance > spd) {
        dx *= spd / distance;
        dy *= spd / distance;
      }
      //now move
      ballX += dx;
      ballY += dy;
      var ourball = document.querySelector(".mouseball") as HTMLElement;
      ourball.style.left = ballX - 20 + "px";
      ourball.style.top = ballY - 20 + "px";
    }

    return () => {
      document.onmousemove = null;
      if (cancel) cancelAnimationFrame(cancel);
    };
  }, []);

  const handleOpenProject = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    let position = Number(target.getAttribute("aria-label"));

    setOpenProject(projects[position]);
    if (projectViewIsOpen) {
      setProjectViewIsOpen(false);
      setDisableScrolling(false);
      document.body.classList.toggle("static");
    } else {
      setTransitionType("project__transition");
      setShowTransition(true);
      setProjectViewIsOpen(true);
      setDisableScrolling(true);
      document.body.classList.toggle("static");
      myTimer(function () {
        setShowTransition(false);
      }, 1200);
    }
  };

  const handleMouseOverProjectOpen = () => {
    setMouseBallOnOpenProject(true);
  };
  const handleMouseOutProjectOpen = () => {
    setMouseBallOnOpenProject(false);
  };

  function myTimer(cb: () => void, ms: number) {
    const begin = performance.now();
    const channel = (myTimer.channel ??= new MessageChannel());
    const controller = new AbortController();
    channel.port1.addEventListener(
      "message",
      (evt: { data: number }) => {
        if (performance.now() - begin >= ms) {
          controller.abort();
          cb();
        } else if (evt.data === begin) channel.port2.postMessage(begin);
      },
      { signal: controller.signal }
    );
    channel.port1.start();
    channel.port2.postMessage(begin);
  }

  return (
    <div className="body">
      <div
        aria-current={disableMouseBall}
        className={`pointer-events-none mouseball ${
          (disableMouseBall && "disabled") ||
          (projectViewIsOpen && mouseballOnCloseProjectView && "disabled") ||
          (!projectViewIsOpen &&
            mouseOnProjects &&
            mouseBallOnOpenProject &&
            "disabled")
        }`}
      >
        {projectViewIsOpen ? (
          <a
            href={openProject?.link}
            rel="noreferrer"
            target="_blank"
            className={`${mouseOnPreview ? "on__preview" : "off__preview"}`}
            id="mouseButton"
          >
            <img
              className={`${mouseXloc === "left" ? "left" : "right"}`}
              src={mouseBallImage.src}
              alt=""
            />
          </a>
        ) : (
          <button
            onClick={handleMoveBallEvents}
            className={`${
              (!projectViewIsOpen && mouseOnProjects && "on__projects") ||
              (!projectViewIsOpen && mouseOnAbout && "on__about")
            }`}
            id="mouseButton"
          >
            <img
              className={`${mouseXloc === "left" ? "left" : "right"}`}
              src={mouseBallImage.src}
              alt=""
            />
          </button>
        )}
      </div>
      <div id="scrollContent">
        <Header color={usedColor} />
        <Projects
          handleOpenProject={handleOpenProject}
          passProjects={setProjects}
          handleMouseOverProjectOpen={handleMouseOverProjectOpen}
          handleMouseOutProjectOpen={handleMouseOutProjectOpen}
          passPreviews={setPreviews}
        />
        <About />
      </div>

      <div
        onMouseOver={handleMouseOverProjectOpen}
        onMouseOut={handleMouseOutProjectOpen}
        className="z-30 pointer-events-auto"
      >
        <Footer theme={footerColor} />
      </div>

      {/* {projectViewIsOpen && (
        <ProjectView
          handleCloseProject={closeOpenProject}
          open={projectViewIsOpen}
          project={openProject}
          previewXloc={mouseOnPreviewXloc}
          previews={previews}
        />
      )} */}
    </div>
  );
};

export default MainContent;
