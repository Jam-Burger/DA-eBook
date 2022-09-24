import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  const active = true;
  return (
    <div className='ml-3 pb-10 h-screen'>
      {active && (<>
        <div className='flex justify-between items-center'>
          <Link to="/" onClick={() => { }} className='itms-center'>Home</Link>
          <Link to="/Academics" onClick={() => { }} className='itms-center'>Academics</Link>
          <Link to="/Events" onClick={() => { }} className='itms-center'>Events</Link>
          <Link to="/Calender" onClick={() => { }} className='itms-center'>Calender</Link>
        </div>
      </>)}
    </div>
  )
}

export default Sidebar