import React from 'react'
import { Header } from '../components';
import bg from '../backgrounds/8.PNG'
const Home = () => {
  return (
    <div className='h-full pb-20'>
      <Header title='Home' />
      <p className='h-full' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '50%' }} />
    </div>
  )
}

export default Home