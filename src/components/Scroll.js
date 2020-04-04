import React from 'react';

const Scroll = ({ children }) => {
    return <div style={{height: '100vh', overflowY:'scroll'}}>{children}</div>;
};

export default Scroll;
