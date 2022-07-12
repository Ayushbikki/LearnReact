import {BrowserRouter,Switch,Link, Route,useRouteMatch,Redirect} from 'react-router-dom'
import React from 'react';
import Html from './Html';
import Css from './Css';
import Javascript from './Javascript';

export default function Technologies(){
    let urlInfo =useRouteMatch();


    return(
        <BrowserRouter>
        <div className="row">
            <div className="col-sm-4">
                <ul className="bg-dark flex-column">
                    <li className= "nav-item">
                        <Link to={`${urlInfo.path}/html`}className="nav-link" >HTML</Link>
                    </li>
                    <li className= "nav-item">
                        <Link to="{`${urlInfo.path}/css`}" className="nav-link">CSS</Link>
                    </li>
                    <li className= "nav-item">
                        <Link to="{`${urlInfo.path}/javascript`}" className="nav-link" >javascript</Link>
                    </li>

                </ul>
            </div>
            <div className="col-sm-8">
                {/* load component */}
                <Switch>
                    <Route path="{`${urlInfo.path}/html`}">
                        <Html />
                    </Route>
                    <Route path="{`${urlInfo.path}/css`}">
                        <Css />
                    </Route>
                    <Route path="{`${urlInfo.path}/javascript`}">
                        <Javascript />
                    </Route>

                </Switch>
                <Route path={`${urlInfo.path}`}>
                    <Redirect to={`${urlInfo.path}/html`}></Redirect>
                </Route>

            </div>
        </div>
        </BrowserRouter>
        
    )
}