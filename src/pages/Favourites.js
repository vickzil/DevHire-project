import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import NoItem from "../components/noItem/NoItem";
import UserCard from "../components/usercard/UserCard";
import {
  setPageTitle,
  setShowMobileMenu,
} from "../store/settings/settingsSlice";

const Favourites = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  const allFavourites = useSelector((state) => state.developers.favourites);

  useEffect(() => {
    dispatch(setPageTitle("Favourites"));
    dispatch(setShowMobileMenu(false));
    document.title = "DevHire - Favourites";
  }, [dispatch, location.pathname]);

  return (
    <div className="page-contents">
      {allFavourites?.length ? (
        <div className="users fadeInRight">
          {allFavourites?.map((developer, index) => (
            <UserCard key={index} developer={developer} />
          ))}
        </div>
      ) : (
        <NoItem title={"No favorite developer yet"} />
      )}
    </div>
  );
};

export default Favourites;
