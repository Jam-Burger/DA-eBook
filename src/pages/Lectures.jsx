import React from 'react'
import { DirButton, Header } from '../components';
import { courses } from '../data/data';
import bg from '../backgrounds/6.PNG'

const Lectures = () => {
  return (
    <div className='h-full pb-20'>
      <Header title='Lectures' />
      <div className='h-full' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '50%' }} >
      {courses.map((sem, i) => (
        <DirButton name={`Semester - ${i + 1}`} page={`/Academics/lectures/semester${i + 1}`} />
      ))}
      </div>
    </div>
  )
}

export default Lectures