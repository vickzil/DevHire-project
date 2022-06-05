import React from "react";
import { useDispatch } from "react-redux";
import { setShowMobileMenu } from "../../store/settings/settingsSlice";

const Hambugar = () => {
  const dispatch = useDispatch();

  return (
    <div className="menu_burgar">
      <i
        className="bx bx-menu"
        onClick={() => dispatch(setShowMobileMenu(true))}
      ></i>
    </div>
  );
};

export default Hambugar;
