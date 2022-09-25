import React from 'react'

const Header = (props) => {
    return (
        <div className='p-2 md:p-4 bg-white rounded-2xl'>
            <header className='m-4 mt-2'>
                <p className="text-3xl justify-center font-extrabold tracking-tight text-slate-900">
                    {props.title}
                </p>
            </header>
        </div>
    )
}

export default Header