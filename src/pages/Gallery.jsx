import React from 'react'
import { Header, Image, DirButton } from '../components';
import { gallery } from '../data/data';

const Gallery = () => {
    return (
        <div>
            <Header title='Gallery' />
            {gallery.map((event, i) => (
                <DirButton name={event.name} page={`/Events/gallery/event${i + 1}`} />
            ))}
        </div>
    )
}

export default Gallery