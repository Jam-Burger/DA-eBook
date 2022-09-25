import React from 'react'
import { DirButton, Header } from '../components';
import { exams } from '../data/data';

const Exams = () => {
  return (
    <div>
      <Header title='Exams' />
      {exams.map((exam, i) => (
        <DirButton name={`Semester - ${i + 1}`} page={`/Academics/exams/semester${i + 1}`} />
      ))}
    </div>
  )
}

export default Exams