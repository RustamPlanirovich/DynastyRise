import './App.css';
import store from './store/store';
import {Provider} from "react-redux";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className="App">
                  <Routes>
                      <Route path="/" element={<Login />} />
                  </Routes>
              </div>
          </Router>
      </Provider>
  );
}

export default App;
