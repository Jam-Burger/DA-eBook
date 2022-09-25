import React from 'react'
import { Header, DirButton } from '../components';

const Events = () => {
  return (
    <div>
      <Header title='Events' />
      <DirButton name="Gallery" page="/Events/gallery" />
    </div>
  )
}

export default Events