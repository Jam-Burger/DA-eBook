import React from 'react'
import { File, Header } from '../components'

const Slides = (props) => {
    // const mainpath= "..";
    const mainpath = "https://github.com/Jam-Burger/DA-eBook/raw/main/src";
    const path = `${mainpath}/DataBase/Acad/Sem${props.sem}/${props.course.id}`
    const files = []
    for (let i = 0; i < props.course.slides; i++) {
        files.push(<File title={`Lecture - ${i + 1}`} path={`${path}/${props.course.id} Lec (${i + 1}).pdf`} />)
    }
    return (
        <div>
            <Header title={props.course.id} />
            {files.length === 0 ? <div>No files</div> : <div>{files}</div>}
        </div>
    )
}

export default Slides