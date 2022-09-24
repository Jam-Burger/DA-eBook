import React from 'react'
import { DirButton } from '../components';
import { courses } from '../data/data';
const Lectures = () => {
  return (
    courses.map((sem, i) => (
      <DirButton name = {`Semester - ${i+1}`} page={`/Academics/lectures/semester${i+1}`} />
    ))
  )
}

export default Lectures