import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CreateFullName from "./Component/Profile/FullName";
import CreateProfilePhoto from "./Component/Profile/ProfilePhoto";
import CreateAddress from "./Component/Profile/Address";

function App() {
  return (
    <div className="App">
      <div className="header" style={{ padding: "40px" }}>
        <CreateProfilePhoto />
      </div>
      <div className="body">
        <h2>
          <CreateFullName />
        </h2>
        <p>
          <CreateAddress />
        </p>
        <a
          class="btn btn-info"
          href="#"
          role="button"
          style={{ border: "3px solid #000" }}
        >
          More Informations
        </a>
      </div>
    </div>
  );
}

export default App;
