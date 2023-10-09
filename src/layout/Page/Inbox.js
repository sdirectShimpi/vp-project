







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