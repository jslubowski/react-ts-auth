import MainNavigation from './MainNavigation';
import React from "react";

const Layout: React.FC = (props) => {
    return (
        <>
            <MainNavigation />
            <main>{props.children}</main>
        </>
    );
};

export default Layout;
