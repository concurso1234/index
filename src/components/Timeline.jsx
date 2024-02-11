import { FaCut } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { BiSolidGame } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";
import { GoCodescan } from "react-icons/go";
import { FaTrophy } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div className="mt-10">
      <VerticalTimeline lineColor="linear-gradient(180deg, #bb29ff 0%, #4299E1 100%)">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#242424",
            color: "#fff",
            boxShadow: "none",
            // borderRight: "5px solid #bb29ff",
          }}
          contentArrowStyle={{
            borderRight:
              "7px solid  linear-gradient(to right, rgb(139, 92, 246), rgb(66, 153, 225))",
          }}
          date="10:00PM - 11:30PM"
          iconStyle={{ background: "#6864ed ", boxShadow: "none" }}
          icon={<FaCut color="#fff" />}
        >
          <h3 className="text-xl vertical-timeline-element-title">
            INAUGRATION
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            minima?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#242424",
            color: "#fff",
            boxShadow: "none",
          }}
          date="11:30AM - 12:30AM"
          contentArrowStyle={{
            borderRight:
              "7px solid  linear-gradient(to left, rgb(139, 92, 246), rgb(66, 153, 225))",
          }}
          iconStyle={{ background: "#6864ed", boxShadow: "none" }}
          icon={<MdQuiz color="#fff" />}
        >
          <h3 className="text-xl vertical-timeline-element-title">ITRIX</h3>
          <h4 className="text-sm vertical-timeline-element-subtitle">
            IT Quiz
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            minima?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#242424",
            color: "#fff",
            boxShadow: "none",
          }}
          date="11:30AM - 1:00PM"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#6864ed", boxShadow: "none" }}
          icon={<BiSolidGame color="#fff" />}
        >
          <h3 className="text-xl vertical-timeline-element-title">GAMING</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            minima?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#242424",
            color: "#fff",
            boxShadow: "none",
          }}
          date="2:00PM - 3:00PM"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#6864ed", boxShadow: "none" }}
          icon={<FaCode color="#fff" />}
        >
          <h3 className="text-xl vertical-timeline-element-title">
            CODE RACER
          </h3>
          <h4 className="text-sm vertical-timeline-element-subtitle">Coding</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            minima?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#242424",
            color: "#fff",
            boxShadow: "none",
          }}
          date="3:00PM - 4:00PM"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#6864ed", boxShadow: "none" }}
          icon={<GoCodescan color="#fff" />}
        >
          <h3 className="text-xl vertical-timeline-element-title">BUG HUNT</h3>
          <h4 className="text-sm vertical-timeline-element-subtitle">
            Debugging
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            minima?
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#242424",
            color: "#fff",
            boxShadow: "none",
          }}
          date="4:00PM - 5:00PM"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#6864ed", boxShadow: "none" }}
          icon={<FaTrophy color="#fff" />}
        >
          <h3 className="text-xl vertical-timeline-element-title">
            CLOSING CEREMONY
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            minima?
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
