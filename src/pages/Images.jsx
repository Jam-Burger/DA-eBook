import React from 'react'
import { Image, Header } from '../components'

const Images = (props) => {
    const files = []
    for (let i = 0; i < props.event.size; i++) {
        files.push(<Image name={i + 1} event={props.event} />)
    }
    return (
        <div>
            <Header title={props.event.name} />
            <div>{files}</div>
        </div>
    )
}

export default Images