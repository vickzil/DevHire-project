import React from "react";

const NoItem = ({ title }) => {
  return (
    <div className="card no_card">
      <p>{title}</p>
    </div>
  );
};

export default NoItem;
