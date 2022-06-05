import MyRoutes from "./router/MyRoutes";
import "./assets/css/style.css";
import { useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { getResources } from "./store/settings/actions";
import { getAllDevelopers } from "./store/developers/actions";
import { setFavourities } from "./store/developers/developersSlice";
import CurrencyModal from "./components/modals/CurrencyModal";

const App = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (sessionStorage.favourites) {
      dispatch(setFavourities(JSON.parse(sessionStorage.favourites)));
    }

    dispatch(getAllDevelopers());
    dispatch(getResources());
  }, [dispatch]);

  return (
    <>
      <MyRoutes />
      <CurrencyModal />
    </>
  );
};

export default App;
