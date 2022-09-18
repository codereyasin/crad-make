import CradDesing from "./components/cradDesing";

function App() {
  return (
    <div className="flex justify-center items-center">
     <CradDesing/>
    </div>
  );
}

export default App;
// import React, { useState } from 'react'

// function CradDesing() {
//   const [name, setName] = useState('')
//   const [issubmit, setIssubmit] = useState(false)
//   const submit = (e) => {
//    e.preventDefault();
//    setIssubmit(true)
//   }

//   return (
//     <div>
//       <div className='py-24'>
//         <form onSubmit={submit}>
//         <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//           <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
//             First Name
//           </label>
//           <input
//             class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//             id="grid-first-name"
//             type="text"
//             placeholder="Jane"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button type='submit'>Submit</button>
//         </form>
//       </div>
//       <div>
//         <div className='relative'>
//           <img className='w-[400px] ' src="/bg.jpg" alt="" download />
//         </div>
//         <h1 className='absolute bottom-[30%] left-[50%]'>{issubmit && name}</h1>
//       </div>
//     </div>
//   )
// }
