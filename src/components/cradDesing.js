import React, { useState } from 'react'

function CradDesing() {
  const [name, setName] = useState('')
  const [rank, setRank] = useState('')
  const [idnum, setIdnum] = useState('')
  const [image, setImage] = useState('')
  const [qr, setQr] = useState('')
  const [issubmit, setIssubmit] = useState(false)

  const submit = (e) => {
    e.preventDefault();
    setIssubmit(true)
  }

  return (
    <div className=''>
      <div className='py-10'>
        <form onSubmit={submit}>
          <div className='flex flex-wrap max-w-[440px]'>
            <h1 className='py-3 font-bold text-[12px]'>How To Get Image Link: Fast go <a className='underline text-[15px]' href="https://postimg.cc">https://postimg.cc</a> now click Do Not resize my image + no expiration . choose your image then upload now show a dashboard copy <span className='font-bold text-sm'>Direact Link</span> use this link image or Qr image field.</h1>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Rank
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Enter Your Rank"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
              />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Id No
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="ID NO"
                value={idnum}
                onChange={(e) => setIdnum(e.target.value)}
              />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Profile Image Link
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="IMAGE LINK"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                QR Image Link
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="QR LINK"
                value={qr}
                onChange={(e) => setQr(e.target.value)}
              />
            </div>
          </div>
          <button className='ml-[170px] mt-5 py-2 bg-green-500 hover:bg-black duration-100 text-white hover rounded px-5 border' type='submit'>Submit</button>
        </form>
      </div>
      <div>
      <div className='relative pb-20'>
          <img className='w-[433px] h-[743px]' src="/bg.jpg" alt="" download />
          <h1 className='absolute top-2 left-3 font-bold text-white text-[20px]'>TARAFDAR STUDENTS <br />DEVELOPMENT ASSOCIATION</h1>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-[150px] h-[150px] object-cover  rounded-[50%]  absolute top-[170px] border-4 border-blue-800' src={issubmit && image} alt="" />
            <h1 className='absolute top-[330px] font-bold text-2xl'>{issubmit && name}</h1>
            <h3 className='absolute top-[360px] text-md font-semibold text-gray-700'>{issubmit && rank}</h3>
          </div>
          <span className='absolute top-[420px] left-[28%] flex text-sm gap-x-[109px] text-black'>Id No<p>: {issubmit && idnum}</p></span>
          <span className='absolute top-[440px] left-[28%] flex text-sm gap-x-[107px] text-black'>Name<p>: {issubmit && name}</p></span>
          <span className='absolute top-[460px] left-[28%] flex text-sm gap-x-[114px] text-black'>Rank<p>: {issubmit && rank}</p></span>
          <span className='absolute top-[480px] left-[28%] flex text-sm gap-x-10 text-black'>Date Of Creation<p>: 06 08 2020</p></span>
          <img className="w-[110px] h-[105px] absolute bottom-[92px] bg-white z-10 left-4" w src={issubmit && qr} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CradDesing