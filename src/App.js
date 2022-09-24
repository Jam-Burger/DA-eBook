import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Button, Sidebar} from './components';
import { Home, Academics, Calender, Semesters, Exams, Events, Lectures } from './pages';

import './App.css';

const App = () => {
    const activeManu = true;
    return (
        <div>
            <HashRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    {activeManu ? (
                        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                            <Sidebar />
                        </div>
                    ) : (
                        <div className='w-0 dark:bg-secondary-dark-bg'>
                            <Sidebar />
                        </div>
                    )}
                    <div className={
                        `dark:bg-secondary-dark-bg bg-main-bg min-h-screen w-full
                    ${activeManu ? 'md:ml-72 ' : 'flex-2'}`
                    }>
                        <div>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/Home' element={<Home />} />
                                <Route path='/Academics' element={<Academics />} />
                                <Route path='/Academics/lectures' element={<Lectures />} />
                                <Route path='/Academics/exams' element={<Exams />} />
                                <Route path='/Calender' element={<Calender />} />
                                <Route path='/Events' element={<Events />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </HashRouter >
        </div>
    );
}

export default App;