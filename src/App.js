import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { Sidebar } from './components';
import { Home, Academics, Calender, Exams, Events, Lectures, Courses, Slides, ExamMaterials, Gallery, Images } from './pages';
import { courses, gallery } from './data/data';
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
                        <div className='bg-gray-200 h-full p-10'>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/Home' element={<Home />} />
                                <Route path='/Academics' element={<Academics />} />
                                <Route path='/Academics/lectures' element={<Lectures />} />
                                <Route path='/Academics/exams' element={<Exams />} />
                                <Route path='/Calender' element={<Calender />} />
                                <Route path='/Events' element={<Events />} />
                                <Route path='/Events/gallery' element={<Gallery />} />

                                {courses.map((sem, i) => {
                                    return <>
                                        <Route path={`/Academics/lectures/semester${i + 1}`} element={<Courses sem={i + 1} />} />
                                        {sem.map((course) => {
                                            return (
                                                <Route path={`/Academics/lectures/semester${i + 1}/${course.id}`} element={<Slides sem={i + 1} course={course} />} />
                                            )
                                        })}
                                    </>
                                })}

                                {courses.map((sem, i) => (
                                    <Route path={`/Academics/exams/semester${i + 1}`} element={<ExamMaterials sem={i + 1} />} />
                                ))}

                                {gallery.map((event, i) => (
                                    <Route path={`/Events/gallery/event${i + 1}`} element={<Images event={event} />} />
                                ))}
                            </Routes>
                        </div>
                    </div>
                </div>
            </HashRouter >
        </div>
    );
}

export default App;