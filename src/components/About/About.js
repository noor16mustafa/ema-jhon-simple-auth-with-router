import { React, useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const About = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>{user?.displayName}</h1>
        </div>
    );
};

export default About;