import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../App';
import Dashboard from './Dashboard';

const Home = () => {
    const [user] = useContext(UserContext);
    if(!user.token) {
        return <Redirect to="/login" noThrow />
    } 
    return (
        <Dashboard />
    );
};

export default Home;