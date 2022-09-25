import React from 'react'

const File = (props) => {
  return (
    <div className='m-5'>
      <a href={props.path}>{props.title}
      </a>
    </div>
  )
}

export default File