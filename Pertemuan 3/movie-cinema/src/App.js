import './App.css';
import { Component } from "react";

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hello World</h1>
    </div>
  );
}

const Header = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright &copy;2024 Developed by Muhammad Ilham</h3>
        <span>Make with Paprikah</span>
      </footer>
    );
  }
}

export default App;
