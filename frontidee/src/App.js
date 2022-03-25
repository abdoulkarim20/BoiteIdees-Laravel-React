import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Header} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
