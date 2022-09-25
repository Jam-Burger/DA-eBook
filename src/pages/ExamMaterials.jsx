import React from 'react'
import { File, Header } from '../components'
import { exams } from '../data/data'
import bg from '../backgrounds/4.PNG'

const ExamMaterials = (props) => {
    const mainpath = "https://github.com/Jam-Burger/DA-eBook/raw/main/src";
    return (
        <div className='h-full pb-20'>
            <Header title={`Semester - ${props.sem}`} />
            <div className='h-full' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '50%' }} >
                {exams[props.sem - 1].map((filename) => (
                    <File title={filename} path={`${mainpath}/DataBase/Exam/Sem${props.sem}/${filename}.pdf`} />
                ))}
            </div>
        </div>
    )
}

export default ExamMaterials