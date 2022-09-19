import React, { useRef, useState } from 'react'
import { exportComponentAsPNG } from "react-component-export-image";

function CradDesing() {
  const [name, setName] = useState('')
  const [rank, setRank] = useState('')
  const [idnum, setIdnum] = useState('')
  const [image, setImage] = useState(null)
  const [qr, setQr] = useState(null)
  const [issubmit, setIssubmit] = useState(false)
  const panelRef= useRef()

  const submit = (e) => {
    e.preventDefault();
    setIssubmit(true)
  }
  const handleChange = (e) => {
  setImage(e.target.files[0])
  }
  const handleChangeQr = (e) => {
  setQr(e.target.files[0]);
  }

  return (
    <div className=''>
      <div className='py-10'>
        <form onSubmit={submit}>
          <div className='flex flex-wrap max-w-[440px] pb-4'>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Rank
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Enter Your Rank"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Id No
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="ID NO"
                value={idnum}
                onChange={(e) => setIdnum(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="">
                Profile Image
              </label>
            <div>
            <input
                className=""
                id="grid-first-name"
                type="file"
                accept='image/*'
                onChange={handleChange}
              />
            </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                QR Image 
              </label>
             <div>
             <input
                className="e"
                id="grid-first-name"
                type="file"
                accept='image/*'
                onChange={handleChangeQr}
              />
             </div>
            </div>
          </div>
          <h1 className='flex items-center justify-center text-xl'>Must Click Upload Image Then Click Submit</h1>
          <button className='ml-[170px] mt-5 py-2 bg-green-500 hover:bg-black duration-100 text-white hover rounded px-5 border' type='submit'>Submit</button>
        </form>
      </div>
      <div className=''>
      <div className='relative' ref={panelRef}>
          <img className='w-[440px] h-[743px]' src="/bg.jpg" alt="" download />
          <h1 className='absolute top-2 left-3 font-bold text-white md:text-[20px] sm:text-[19px] text-[17px]'>TARAFDAR STUDENTS <br />DEVELOPMENT ASSOCIATION</h1>
          <div className='flex flex-col justify-center items-center'>
         {image && <img className='w-[150px] h-[150px] object-cover rounded-[50%] absolute top-[170px] border-4 border-blue-800' src={URL.createObjectURL(image)} alt="" />}
            <h1 className='absolute top-[330px] font-bold text-2xl'>{issubmit && name}</h1>
            <h3 className='absolute top-[360px] text-md font-semibold text-gray-700'>{issubmit && rank}</h3>
          </div>
          <span className='absolute top-[420px] left-[28%] flex text-sm gap-x-[109px] text-black'>Id No<p>: {issubmit && idnum}</p></span>
          <span className='absolute top-[440px] left-[28%] flex text-sm gap-x-[107px] text-black'>Name<p>: {issubmit && name}</p></span>
          <span className='absolute top-[460px] left-[28%] flex text-sm gap-x-[114px] text-black'>Rank<p>: {issubmit && rank}</p></span>
          <span className='absolute top-[480px] left-[28%] flex text-sm gap-x-10 text-black'>Date Of Creation<p>: 06 08 2020</p></span>
          {qr && <img className="w-[110px] h-[105px] absolute bottom-[12px] object-cover bg-white z-10 sm:left-4 left-4" w src={URL.createObjectURL(qr)} alt="" />}
     
        </div>
      <button className='md:ml-[170px] ml-[120px] mb-5 mt-2 py-2 bg-green-500 hover:bg-black duration-100 text-white hover rounded px-5 border' onClick={() => exportComponentAsPNG(panelRef) }>
            Download
        </button>
      </div>
    </div>
  )
}

export default CradDesing