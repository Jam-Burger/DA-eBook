import React from 'react'
import { DirButton, Header } from '../components';
import { courses } from '../data/data';

const Lectures = () => {
  return (
    <div>
      <Header title='Lectures' />
      {courses.map((sem, i) => (
        <DirButton name={`Semester - ${i + 1}`} page={`/Academics/lectures/semester${i + 1}`} />
      ))}
    </div>
  )
}

export default Lectures