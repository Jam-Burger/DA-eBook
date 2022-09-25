import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function DirButton(props) {
  const [show, toggleShow] = useState(true)
  return (
    <div>
      {show && (<>
        <Link to={props.page} onClick={() => { }}>
          <div className='p-4 mt-2 center bg-gray-50 rounded-xl'>
            {props.name}
          </div>
        </Link>
      </>)
      }
    </div>
  )
}

export default DirButton