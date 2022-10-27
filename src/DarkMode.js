import React, { useState } from 'react';
import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <div className='container'>
                <span style={{ color: darkMode ? 'grey' : 'yellow' }}><FaSun /></span>
                <div className='switch-checkbox'>
                    <label className='switch'>
                        <input type='checkbox' onChange={() => setDarkMode(!darkMode)} />
                        <span className='slider round'> </span>
                    </label>

                </div>
                <span style={{ color: darkMode ? '#c96dfd' : 'grey' }}><FaMoon /></span>
            </div>

        </div>
    );
};

export default DarkMode;