import React from 'react'

import { DirButton } from '../components';
import { courses } from '../data/data';
const Courses = (props) => {
  return (
      courses[props.sem - 1].map((cource) => (
        <DirButton name={`${cource.id} - ${cource.name}`} page={`/Academics/lectures/semester${props.sem}/slides`} />
      ))
  )
}

export default Courses