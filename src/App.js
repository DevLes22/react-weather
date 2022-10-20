import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="card text-white">
        <img
          src="../clouds.jpg"
          class="card-image"
          alt="clouds-background"
          id="card-image"
        />
        <div class="card-img-overlay">
          <Weather defaultCity="Kyiv" />
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/DevLes22/react-weather"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-source code{" "}
        </a>{" "}
        by Lesia Veretnik
      </footer>
    </div>
  );
}
