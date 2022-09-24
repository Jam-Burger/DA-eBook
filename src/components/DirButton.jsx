import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function DirButton(props) {
  const [show, toggleShow] = useState(true)
  return (
    <div>
      {show && (<>
        <Link to={props.page} onClick={() => { }}>
          <div className='m-4 center bg-gray-50'>
            {props.name}
          </div>
        </Link>
      </>)
      }
    </div>
  )
}

export default DirButton