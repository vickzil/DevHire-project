import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CardLoading from "../components/loading/contentLoading/CardLoading";
import NoItem from "../components/noItem/NoItem";
import UserCard from "../components/usercard/UserCard";
import {
  setPageTitle,
  setShowMobileMenu,
} from "../store/settings/settingsSlice";

const Home = () => {
  const allDevelopers = useSelector((state) => state.developers.developers);
  const isLoading = useSelector((state) => state.developers.loading);
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    dispatch(setPageTitle("Hire Top Developers"));
    dispatch(setShowMobileMenu(false));
    document.title = "DevHire - Home";
  }, [dispatch, location.pathname]);

  return (
    <div className="page-contents">
      {isLoading ? (
        <div className="users">
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </div>
      ) : allDevelopers?.length ? (
        <div className="users fadeInRight">
          {allDevelopers?.map((developer, index) => (
            <UserCard key={index} developer={developer} />
          ))}
        </div>
      ) : (
        <NoItem title={"No developers"} />
      )}
    </div>
  );
};

export default Home;
