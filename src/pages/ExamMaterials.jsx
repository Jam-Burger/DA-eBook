import React from 'react'
import { File, Header } from '../components'
import { exams } from '../data/data'
const ExamMaterials = (props) => {
    const mainpath = "https://github.com/Jam-Burger/DA-eBook/raw/main/src";
    return (
        <div>
            <Header title={`Semester - ${props.sem}`} />
            {exams[props.sem - 1].map((filename) => (
                <File title={filename} path={`${mainpath}/DataBase/Exam/Sem${props.sem}/${filename}.pdf`} />
            ))}
        </div>
    )
}

export default ExamMaterials