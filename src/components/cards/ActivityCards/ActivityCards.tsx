import React from "react";
import "./ActivityCards.css";

export interface ActivityCardsProps {}

const ActivityCards: React.FC<ActivityCardsProps> = (props) => {
  return (
    <div>
      <div className="activity-card"></div>
    </div>
  );
};

export default ActivityCards;
