import React from 'react';

const Navigation = ({ LogoutCallback }) => {
    return (    
            <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">SpaceX</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="mx-2 my-auto">
                        <a href="/">Home</a> 
                        </li>
                        <li className="mx-2 my-auto">
                        <a href="register">Register</a>
                        </li>
                        <li className="mx-2">
                            <button className="btn btn-secondary" onClick={LogoutCallback}>Log out</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;