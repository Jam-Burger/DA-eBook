import React from 'react'
import { File, Header } from '../components'
import bg from '../backgrounds/3.PNG'

const Slides = (props) => {
    // const mainpath= "..";
    const mainpath = "https://github.com/Jam-Burger/DA-eBook/raw/main/src";
    const path = `${mainpath}/DataBase/Acad/Sem${props.sem}/${props.course.id}`
    const files = []
    for (let i = 0; i < props.course.slides; i++) {
        files.push(<File title={`Lecture - ${i + 1}`} path={`${path}/${props.course.id} Lec (${i + 1}).pdf`} />)
    }
    return (
        <div className='h-full pb-20'>
            <Header title={props.course.id} />
            <div className='h-full' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '50%' }} >
                {files.length === 0 ? "No files" : files}
            </div>
        </div>
    )
}

export default Slides