import React from 'react'
import Right from './Right'

const RightCardContent = (props) => {
  return (
    <div>
        <div className = 'absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className =  'bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p classsName = 'text-xl leading-relaxed font-medium mb-14'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus voluptate sit aperiam rem labore a, incidunt repellat accusantium nemo molestias accusamus! Eveniet dicta illo reiciendis officia in, nulla quibusdam laborum.</p>
                <div className = 'flex justify-between'>
                    <button className='text-white bg-blue-600 font-semibold px-8 py-3 rounded-full text-'>{props.tag}</button>
                    <button className=' text-white bg-blue-600 font-semibold px-4 py-3 rounded-full text-lg justify-between'>
                        <Right />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
