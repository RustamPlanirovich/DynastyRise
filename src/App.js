import './App.css';
import store from './store/store';
import {Provider} from "react-redux";
import {Route, BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import Login from "./components/Login";
import {useEffect, useState} from "react";
import Dashboard from "./components/Dashboard";
import PasswordReset from "./components/PasswordReset";

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        console.log("No or yes", isAuthenticated)
        // Проверьте localStorage на наличие состояния авторизации
        const authenticated = localStorage.getItem('authenticated');
        if (authenticated === 'true') {
            console.log("yes")
            setIsAuthenticated(true);
        }
        console.log(isAuthenticated)
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/login">
                        {isAuthenticated ? <Redirect to={currentPage || '/dashboard'} /> : <Login setIsAuthenticated={setIsAuthenticated} setCurrentPage={setCurrentPage}/>}
                    </Route>
                    <Route path='/dashboard'>
                        {isAuthenticated ? <Dashboard /> : <Redirect to="/login" />}
                    </Route>pa
                    <Route path="/password-reset">
                        <PasswordReset />
                    </Route>
                    {/* Другие маршруты */}
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
