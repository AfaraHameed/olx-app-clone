import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {FirebaseContext} from './store/Context'
import {firebaseApp} from './Firebase/config'
import { BrowserRouter as Router } from 'react-router-dom';
import Context from './store/Context'
ReactDOM.render(
<FirebaseContext.Provider value={firebaseApp}>
<Router>
    <Context>
        < App />
    </Context>
</Router>
</FirebaseContext.Provider>
, document.getElementById("root"));
