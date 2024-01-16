import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default Main;
