import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import About from '../about/About';
import ListaBeneficio from '../components/beneficios/ListaRelatorio';
import Button from '@mui/material/Button';
import Login from '../login/login';
import Date from '../components/date';
import Cadastro from '../cadastro/cadastroUser';
import Paginate from '../components/PaginateBeneficio';
function Menu() {
    return (
        <div>

        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/app">Home</Link>
                    </li>
                    <li>
                    <Link to="/lista">Bneficios</Link>
                    </li>
                    <li>
                    <Link to="/login">login</Link>
                    </li>
                    <li>
                    <Link to="/date">date</Link>
                    </li>
                    <li>
                    <Link to="/cadastro">New User</Link>
                    </li>
                    <li>
                    <Link to="/paginate">Paginate Bneficios</Link>
                    </li>
                </ul>
            </nav>

            <Switch>

                <Route path="/about" exact={true} component={About} />
                <Route path="/lista/:id" exact={true} component={ListaBeneficio} />
                <Route path="/login" exact={true} component={Login}/>
                <Route path="/date" exact={true} component={Date} />
                <Route path="/cadastro" exact={true} component={Cadastro} />
                <Route path="/paginate" exact={true} component={Paginate} />
                


            </Switch>
        </Router>

     
        
        </div>
    )

}
export default Menu