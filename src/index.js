import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "../src/store/redux-store";


import ProductListContainer from "./containers/ProductListContainer";

ReactDOM.render(
    <Provider store={store}>
        <ProductListContainer />
    </Provider>
    , document.getElementById('root'));