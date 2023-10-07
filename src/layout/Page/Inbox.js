




// import React, { useState } from 'react';

// const Inbox = () => {
//   const [selected, setSelected] = useState(false);
//   const [page, setPage] = useState('inbox');

//   const handleClick = () => {
//     setSelected(selected === 'Inbox' ? '' : 'Inbox');
//   };

//   return (
//     <li>
//       <a
//         className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
//           selected === 'Inbox' && page === 'inbox' ? 'bg-graydark dark:bg-meta-4' : ''
//         }`}
//         href="inbox.html"
//         onClick={handleClick}
//       >
//         <svg
//           className="fill-current"
//           width="18"
//           height="19"
//           viewBox="0 0 18 19"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {/* Your SVG path elements */}
//         </svg>

//         Inbox
//         <span className="absolute right-4 block rounded bg-primary py-1 px-2 text-xs font-medium text-white">
//           Pro
//         </span>
//       </a>
//     </li>
//   );
// };

// export default Inbox;







import React from 'react'
import Editor from '../Editor'

const Inbox = () => {
  return (
  <>
  
  
  
  <div class="mx-auto h-[calc(100vh-80px)] max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 class="text-title-md2 font-bold text-black dark:text-white">
                Inbox
              </h2>

              <nav>
                <ol class="flex items-center gap-2">
                  <li>




                    <a class="font-medium" href="index.html">Dashboard /</a>
                  </li>
                  <li class="font-medium text-primary">Inbox</li>
                </ol>
              </nav>
            </div>

            <div class="h-[calc(100vh-186px)] overflow-hidden sm:h-[calc(100vh-174px)]">
              <div x-data="{inboxSidebarToggle: false}" class="h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark lg:flex">
             


              <div style={{marginTop: "2%", marginBottom:"5%"  ,marginLeft: "2%" , marginRight: "5%"  }}>

                   <Editor/>
                   </div>
           

           




                <div >
              </div>
            </div>
         </div>
         </div>


 
  
  
  
  </>
  )
}

export default Inbox