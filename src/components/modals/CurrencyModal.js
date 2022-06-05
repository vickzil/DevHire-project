import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./currencymodal.css";
import {
  setCurrencyPopUp,
  setSelectedCurrency,
} from "../../store/settings/settingsSlice";
const CurrencyModal = () => {
  const currencyModal = useSelector((state) => state.settings.currencyPopUp);
  const selectedCurrency = useSelector(
    (state) => state.settings.selectedCurrency
  );
  const currencies = useSelector((state) => state.settings.currencies);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setCurrencyPopUp(false));
  };

  const selectCurrency = (value) => {
    dispatch(setSelectedCurrency(value));

    closeModal();
  };

  return (
    currencyModal && (
      <div className="select-modal">
        <div className="select-modal-card popInBottom">
          <div className="close-select-button" onClick={() => closeModal()}>
            <i className="bx bx-x" id="closeToken"></i>
          </div>

          <div className="select-modal-search">
            <label htmlFor="">Please Select Currency</label>
          </div>

          <div className="select-modal-body">
            <div className="select-modal-content">
              <div style={{ width: "100%" }}>
                {currencies?.map((currency) => (
                  <div
                    key={currency.name}
                    onClick={() => selectCurrency(currency)}
                    className={`select-modal-item ${
                      selectedCurrency?.name.toUpperCase() ===
                      currency.name.toUpperCase()
                        ? "selectedItem"
                        : ""
                    }`}
                  >
                    <p>
                      <img src={currency.flag_url} alt=" 4" />
                      <span>{currency.name}</span>
                      <small> {currency.short}</small>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CurrencyModal;
