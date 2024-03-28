import Navbar from "./components/Navbar.js";
// import User from "./components/User/User";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
// import Car from "./components/Car/Car";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Footer nama="Muhammad Ilham" />
    </div>
  );
}

export default App;
