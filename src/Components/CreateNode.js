import React, { useState } from 'react'

const CreateNode = (props) => {
  const [name, setName] = useState(null);
  const [Amount, setAmount] = useState(null);

  const onChangleHandler = (e) => {
    if(e.target.name == 'name'){
      setName(e.target.value)
      // console.log(e.target.value)
    }
    if(e.target.name == 'amount'){
      setAmount(e.target.value)
    }
  }


  const onsubmitHandler = () => {
    props.submit(name, Amount)
  }

  return (
    <div className=' flex flex-col justify-between gap-10 text-blue-600 font-poppins rounded-lg absolute items-center z-50 bg-white px-4 py-3'>
        <div className='flex flex-col gap-5 bg-white px-5 py-5 rounded-lg w-full'>
        <div className='flex flex-col w-full gap-1'>
            Node Name: <input type='text' className='border' name = 'name' onChange={(e) => onChangleHandler(e)} />
        </div>
        <div className='flex flex-col gap-1'>
            Amount of Node in VLD:<input type='text' className='border' name = 'amount'onChange={(e) => onChangleHandler(e)}/>
        </div>
        <div className='items-center'>
            <button className='btn px-5 text-white font-poppins mx-auto' onClick={() => onsubmitHandler()}>Add Node</button>
        </div>
        </div>

        <div className='text-red-500 underline w-full rounded-lg text-center text-[0.7rem]'>Amount Put into node cannot be taken out</div>
    </div>
  )
}

export default CreateNode