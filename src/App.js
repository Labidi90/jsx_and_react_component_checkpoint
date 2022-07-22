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
      <div className="header">
        <CreateProfilePhoto />
      </div>
      <div className="blog_post">
        <h2>
          <CreateFullName />
        </h2>
        <p>
          <CreateAddress />
        </p>
        <a class="btn_primary" href="#" role="button">
          More Informations
        </a>
      </div>
    </div>
  );
}

export default App;
