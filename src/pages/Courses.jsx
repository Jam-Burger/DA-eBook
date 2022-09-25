import React from 'react'

import { DirButton, Header } from '../components';
import { courses } from '../data/data';
const Courses = (props) => {
  return (
    <div>
      <Header title='Cources' />
      {courses[props.sem - 1].map((course) => (
        <DirButton name={`${course.id} - ${course.name}`} page={`/Academics/lectures/semester${props.sem}/${course.id}`} />
      ))}
    </div>
  )
}

export default Courses