import React from 'react';
import {createStactNavigator,createAppContainer} from 'react-navigation';

import {Products} from "../pages/Products";
import {Checkout} from "../pages/Checkout";
import {Receipt} from "../pages/Receipt";
 
const Route = createStactNavigator(
    {
        Products:{
            screen:Products
        },
        // Checkout:{
        //     screen:Checkout
        // },
        // Receipt:{
        //     screen:Receipt
        // }

    }
);

const App = createAppContainer(Route);
export default App;

