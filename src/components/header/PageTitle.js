import React from "react";
import { useSelector } from "react-redux";

const PageTitle = () => {
  const pageTitle = useSelector((state) => state.settings.pageTitle);
  return <div className="page_title ">{pageTitle}</div>;
};

export default PageTitle;
