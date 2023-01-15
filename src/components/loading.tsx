import React from 'react'

const Loading = () => {
  return <div className='loading-box'>
    <svg xmlns='http://www.w3.org/2000/svg'
      width='54' height='14' viewBox='0 0 54 14'>
      <g fill='none' fillRule='evenodd' transform='translate(1 1)'>
        <circle className='loading-circle-one' cx='6' cy='6' r='6' fill='#FF5F56' stroke='#E0443E' strokeWidth='.5'></circle>
        <circle className='loading-circle-two' cx='26' cy='6' r='6' fill='#FFBD2E' stroke='#DEA123' strokeWidth='.5'></circle>
        <circle className='loading-circle-three' cx='46' cy='6' r='6' fill='#27C93F' stroke='#1AAB29' strokeWidth='.5'></circle>
      </g>
    </svg>
  </div>
}

export default Loading