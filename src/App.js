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
    </div>
  );
}
