import React from "react";
import { ActivityCards, CircledButton } from "../../../components";
import "./Activity-Page.css";
import { AiOutlineCalendar, AiOutlineSearch } from "react-icons/ai";

const ActivityPage: React.FC = () => {
  return (
    <div className="activity-page-wrapper">
      <div className="activity-page-action">
        <div className="activity-calendar-btn">
          <CircledButton>
            <AiOutlineCalendar className="circled-icon" />
          </CircledButton>
        </div>
        <div className="activity-sorting-btn"></div>
        <div className="activity-search-btn">
          <CircledButton>
            <AiOutlineSearch className="circled-icon" />
          </CircledButton>
        </div>
      </div>
      <div className="activity-content">
        <div className="activity-content-left">
          <ActivityCards />
          <ActivityCards />
          <ActivityCards />
          <ActivityCards />
        </div>
        <div className="activity-content-right">
          <ActivityCards />
          <ActivityCards />
          <ActivityCards />
          <ActivityCards />
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
