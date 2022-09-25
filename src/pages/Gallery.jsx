import React from 'react'
import { Header, Image, DirButton } from '../components';
import { gallery } from '../data/data';
import bg from '../backgrounds/9.PNG'

const Gallery = () => {
    return (
        <div className='h-full pb-20'>
            <Header title='Gallery' />
            <div className='h-full' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '50%' }} >
                {gallery.map((event, i) => (
                    <DirButton name={event.name} page={`/Events/gallery/event${i + 1}`} />
                ))}
            </div>
        </div>
    )
}

export default Gallery