import React from 'react';
import { Link } from 'react-router-dom';


const Navigationbar = () => {
  return (
    <nav className='navull'>
    <ul className='navul'>
      <li>
        <Link to="/suv">SUV</Link>
      </li>
      <li>
        <Link to="/muv">MUV</Link>
      </li>
      <li>
        <Link to="/hatchback">Hatchback</Link>
      </li>
      <li>
        <Link to="/sedan">Sedan</Link>
      </li>
    </ul>
  </nav>
      
  );
};

export default Navigationbar;
