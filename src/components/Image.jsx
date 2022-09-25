import React from 'react'

const Image = (props) => {
    const path = `https://github.com/Jam-Burger/DA-eBook/blob/main/src/DataBase/Events/Gallery/${props.event.name}/${props.name}.jpg`
    //            https://github.com/Jam-Burger/DA-eBook/blob/main/src/DataBase/Events/Gallery/Ganesh%20Chaturthi%202022/%20(1).jpg

    return (
        <div>
            <img src={path} width={100} alt={props.name} />
        </div>
    )
}

export default Image