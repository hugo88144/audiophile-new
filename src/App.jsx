import "./sass/main.scss";

import NavBar from "./components/nav";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <div className="content__new">New product </div>
        <div className="content__title">XX99 Mark II Headphones </div>
        <p className="content__description">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="content__btn-see"> See product </button>
      </div>
    </div>
  );
}

export default App;
