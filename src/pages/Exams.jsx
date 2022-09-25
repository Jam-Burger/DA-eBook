import React from 'react'
import { DirButton, Header } from '../components';
import { exams } from '../data/data';
import bg from '../backgrounds/5.PNG'

const Exams = () => {
  return (
    <div className='h-full pb-20'>
      <Header title='Exams' />
      <div className='h-full' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '50%' }} >
        {exams.map((exam, i) => (
          <DirButton name={`Semester - ${i + 1}`} page={`/Academics/exams/semester${i + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default Exams