import React from 'react'
import { DirButton, Header } from '../components';
import bg from '../backgrounds/2.PNG'

const Academics = () => {
  return (
    <div className='h-full pb-20'>
      <Header title='Academics' />
      <div className='h-full' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '50%' }} >
        <DirButton name="Lectures" page="/Academics/lectures" />
        <DirButton name="Exams" page="/Academics/exams" />
      </div>
    </div>
  )
}

export default Academics