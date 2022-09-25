import React from 'react'
import { DirButton, Header } from '../components';
import { courses } from '../data/data';
import bg from '../backgrounds/3.PNG'

const Courses = (props) => {
  return (
    <div className='h-full pb-20'>
      <Header title='Cources' />
      <div className='h-full' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '50%' }} >
        {courses[props.sem - 1].map((course) => (
          <DirButton name={`${course.id} - ${course.name}`} page={`/Academics/lectures/semester${props.sem}/${course.id}`} />
        ))}
      </div>
    </div>
  )
}

export default Courses