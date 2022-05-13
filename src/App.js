import "./App.css";
import { Assets } from "./Components/Assets/Assets";
import Header from "./Components/Header/Header";
import { Map } from "./Components/Map/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

const defaultCenter = {
  lat: 27.878343549936588,
  lng: -81.60937733910708,
};
const libraries = ["places"];

const App = () => {
  const [data, setData] = useState([]);

  const getData = (newAsset) => {
    setData((prevState) => [...prevState, newAsset]);
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });
  return (
    <div className="appWrapper">
      <Header onGetData={getData} />
      {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading</h2>}
      <Assets data={data} />
    </div>
  );
};

export default App;
