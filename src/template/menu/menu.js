import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import About from '../about/About';
import ListaBeneficio from '../components/beneficios/ListaRelatorio';
function Menu() {
    return (

        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/app">Home</Link>
                    </li>
                    <li>
                    <Link to="/lista/1">Bneficios</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/about" exact={true} component={About} />
                <Route path="/lista/:id" exact={true} component={ListaBeneficio} />
            </Switch>
        </Router>
    )

}
export default Menu