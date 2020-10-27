import React from 'react';

const Header = ({ title }) => {
    return (
        <main className="head d-flex justify-content-center align-items-center">
            <h1 className="text-center text-uppercase advance-gym">
                {!title ? 'Our Classes' : title}
            </h1>
        </main>
    );
};

export default Header;