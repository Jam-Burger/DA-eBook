import React from 'react'
import { DirButton, Header } from '../components';

const Academics = () => {
  return (
    <div>
      <Header title='Academics' />
      <DirButton name="Lectures" page="/Academics/lectures" />
      <DirButton name="Exams" page="/Academics/exams" />
    </div>
  )
}

export default Academics