import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function DirButton(props) {
  const [show, toggleShow] = useState(true)
  return (
    <div className='w-full'>
      {show && (
        <Link to={props.page} onClick={() => { }}>
          <div className='p-4 mt-2 w-full bg-gray-50 rounded-xl hover:bg-gray-100 border hover:border-gray-500'>
            {props.name}
          </div>
        </Link>
      )
      }
    </div>
  )
}

export default DirButton