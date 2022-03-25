
import './App.css';
<<<<<<< HEAD
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Header} />
      </Switch>
    </BrowserRouter>
=======
<<<<<<< HEAD
import Formulaire from './components/Formulaire';

function App() {
    return (
        <div className="App">
            <Formulaire/>
        </div>
    );
=======
import Formulaire from "./components/Formulaire";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
                    <Formulaire/>
      </header>
    </div>
>>>>>>> develop
  );
>>>>>>> aicha/affichageIdee
}

export default App;