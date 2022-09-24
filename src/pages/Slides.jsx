import React from 'react'
import { File } from '../components'

// const fs = require('fs')
const Slides = (props) => {
    const path = `../Database/Acad/Sem${props.sem}/${props.course}`
    return (
        <File path={`${path}/`} />
    )
}

export default Slides