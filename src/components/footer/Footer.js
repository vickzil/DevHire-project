import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrencyPopUp } from "../../store/settings/settingsSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const [year] = useState(new Date().getFullYear());

  const selectedCurrency = useSelector(
    (state) => state.settings.selectedCurrency
  );

  const showCurrencyModal = () => {
    dispatch(setCurrencyPopUp(true));
  };

  return (
    <div className="footer">
      <span>© {year} DevHire</span>
      {selectedCurrency && (
        <div className="footer_select" onClick={() => showCurrencyModal()}>
          <div className="footer_select_left">
            <img
              src={selectedCurrency.flag_url}
              alt=""
              className="footer_select_img"
            />
            <span>{selectedCurrency.name}</span>
          </div>
          <i className="bx bxs-down-arrow"></i>
        </div>
      )}
    </div>
  );
};

export default Footer;
