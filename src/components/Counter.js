import React, {useState} from 'react'

const Counter = () => {

    const [initialVal, setinitialVal] = useState(0);

    const incrementFunc = () => {
        setinitialVal(initialVal + 1);
    }

    const decrementFunc = () => {
        setinitialVal(initialVal - 1);
        if(initialVal <= 0 ){
            setinitialVal(0);
        }
    }

  return (
    <div className='bg-black w-fit mx-auto rounded p-8 my-[5rem] flex items-center justify-center flex-col shadow-md border-b'>
        <div className='bg-gray-300'>
            <div className='bg-gray-300 w-fit p-5 flex items-center justify-center'> 
                Counter: {initialVal}
            </div>            
        </div>
        <div className='space-x-4 mt-5'>
            <button onClick={incrementFunc} className='p-2 bg-green-700 shadow-md rounded text-white'> Increment </button>
            <button onClick={decrementFunc} className='p-2 bg-red-700 shadow-md rounded text-white'> Decrement </button>
        </div>
    </div>
  )
}

export default Counter;