import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data/data';
import logo from '../logo.png';

const Sidebar = () => {
  const active = true;
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-black';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-3 pb-10 h-screen'>
      {active && (<>
        <div className='flex justify-between items-center'>
          <div className='mt-10 w-full'>
          <Link to='/' onClick={() => { }} className='items-center'>
            <img src={logo} width={70} alt="logo" />
            <span>DA eBook</span>
          </Link>
          </div>
          <div className='mt-10 w-full'>
            {links.map((item) => (
              <NavLink to={item.path} key={item.name} onClick={() => { }} className={({ isActive }) => isActive ? activeLink : normalLink}>
                <span className='capitalize e-roboto'>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </>)
      }
    </div>
  )
}

export default Sidebar