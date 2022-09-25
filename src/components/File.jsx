import React from 'react'

const File = (props) => {
  return (
    <div className='mt-2 py-2 px-5 bg-gray-50 rounded-xl hover:bg-gray-100 border hover:border-gray-500'>
      <a href={props.path}>
        {props.title}
      </a>
    </div>
  )
}

export default File