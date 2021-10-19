import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
             <img src="https://i.ibb.co/GtWnKxk/404.jpg" alt="" />
             <br/>
             <br/>
             <Link><button style={{margin:'30px'}} className="btn btn-warning">Go Homepage</button></Link>
        </div>
    );
};

export default NotFound;