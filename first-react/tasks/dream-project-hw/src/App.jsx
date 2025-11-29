import "./App.css";

function App() {
  return (
    <>
      <h1 class="title">
        Campus Book Rental
        <div class="aurora">
          <div class="aurora__item"></div>
          <div class="aurora__item"></div>
          <div class="aurora__item"></div>
          <div class="aurora__item"></div>
        </div>
      </h1>
      <h2 className="subtitle">
        <q>
          A good reader, a major reader, an active and creative reader is a
          re-reader.
        </q>
        {" Vladimir Nabokov "}
      </h2>
      <p className="read-the-docs">learn more</p>
    </>
  );
}

export default App;
