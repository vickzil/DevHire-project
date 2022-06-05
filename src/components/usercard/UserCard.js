import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavourities } from "../../store/developers/developersSlice";

const UserCard = ({ developer }) => {
  let ErrorAvatar = require("../../assets/img/banner.png");

  const dispatch = useDispatch();
  const resources = useSelector((state) => state.settings.resources);

  const selectedCurrency = useSelector(
    (state) => state.settings.selectedCurrency
  );
  const allFavourites = useSelector((state) => state.developers.favourites);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let currency = developer._source.currency_name;
    if (selectedCurrency && resources) {
      let initialAmount = Number(developer._source.starting_from);
      let initialCurrencyId = developer._source.currency_id;
      currency = selectedCurrency.short;

      let conversionRate = resources.net_conversions.find(
        (currency) =>
          currency.currency_id === initialCurrencyId &&
          currency.buying_currency_id === selectedCurrency.id
      );

      if (conversionRate) {
        let newRateAmount = Number(conversionRate.net_rate);
        let newAmount = initialAmount * newRateAmount;

        let calculatedTotalAmount = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: currency,
        }).format(Number(newAmount));

        setTotalAmount(calculatedTotalAmount);
      }
    }
  }, [
    developer._source.currency_id,
    developer._source.currency_name,
    developer._source.starting_from,
    resources,
    selectedCurrency,
    totalAmount,
  ]);

  const handleFavourite = (data) => {
    if (allFavourites && allFavourites.length) {
      // Now check if already added
      let alreadyAdded = allFavourites.find(
        (favourite) => favourite._id === data._id
      );

      if (alreadyAdded) {
        // We remove it from favourite
        let newFavourites = allFavourites.filter(
          (favourite) => favourite._id !== alreadyAdded._id
        );
        dispatch(setFavourities(newFavourites));

        sessionStorage.setItem("favourites", JSON.stringify(newFavourites));
      } else {
        // Else we add it to favourite
        let newFavourites = [...allFavourites, data];
        dispatch(setFavourities(newFavourites));
        sessionStorage.setItem("favourites", JSON.stringify(newFavourites));
      }
    } else {
      dispatch(setFavourities([developer]));
      sessionStorage.setItem("favourites", JSON.stringify([developer]));
    }
  };

  return (
    <div
      className={`userCard  ${
        allFavourites?.includes(developer) ? "added" : ""
      }`}
    >
      <div className="userCard_top">
        <img
          src={developer?._source?.service_photo}
          onError={(e) => {
            e.currentTarget.src = ErrorAvatar;
          }}
          alt=""
        />
        <i
          className="bx bxs-heart "
          onClick={() => handleFavourite(developer)}
        ></i>

        <div className="userCard_top_image">
          <img src={developer?._source?.avatar} alt="" />
        </div>
      </div>
      <div className="userCard_content">
        <div className="userCard_content_item">
          <h4>{developer?._source?.display_name}</h4>

          <p>{totalAmount}</p>
        </div>
        <div className="userCard_content_item">
          <span>Hire</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
