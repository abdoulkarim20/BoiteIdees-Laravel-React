import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Test from './components/Test';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Test} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
