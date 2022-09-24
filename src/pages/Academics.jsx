import React from 'react'
import { DirButton } from '../components';

const Academics = () => {
  return (
    <div>
      <DirButton name="Lectures" page="/Academics/lectures" />
      <DirButton name="Exams" page="/Academics/exams" />
    </div>
  )
}

export default Academics