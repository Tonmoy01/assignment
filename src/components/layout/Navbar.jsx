import React from 'react';

function Navbar() {
  return (
    <nav className='navbar navbar-dark bg-dark mb-3 py-0'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          Assignment
        </a>
        <div>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <a href='/' className='nav-link'>
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
