import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data/data';
import logo from '../logo.png';

const Sidebar = () => {
  const active = true;
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-black';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-5 pb-10 h-screen'>
      {active && (<>
        <div className='justify-between items-center relative'>
          <div className="mt-5 justify-between items-center">
            <Link to='/' onClick={() => { }} className="items-center gap-3 ml-3 mt-4 flex text-3xl tracking-tight dark:text-white text-slate-900" style={{fontFamily:"Dubai Medium"}}>
              <img src={logo} width={70} alt="logo" />
              <span>DA eBook</span>
            </Link>
            <hr className='mt-5 w-full' />
          </div>
          <div className='mt-5 w-full'>
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