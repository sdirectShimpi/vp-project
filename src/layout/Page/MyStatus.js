// import React, { useState } from 'react';
// import ImplementDSR from './ImplementDSR';
// import ImplementFreeDsr from './ImplementFreeDsr';

// const MyStatus = () => {
 
//   const [status, setStatus] = useState('billable');
//   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//   const activeProject   = userInfo[0].activeProject;
 

  

//   return (
//     <>
//       <div className="input-group mb-3">
//         <span className="input-group-text" id="basic-addon1">
//           My Current Status
//         </span>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="checked status"
//           aria-label="Username"
//           aria-describedby="basic-addon1"
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//         />
//       </div>

     
//       {status === 'billable' ? <ImplementDSR /> :  <ImplementFreeDsr />}

     
//     </>
//   );
// };

// export default MyStatus;





import React, { useState, useEffect } from 'react';
import ImplementDSR from './ImplementDSR';
import ImplementFreeDsr from './ImplementFreeDsr';

const MyStatus = () => {
  const [status, setStatus] = useState('billable');
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const activeProject = userInfo[0].activeProject;

  
  useEffect(() => {
    if (activeProject !== 1) {
      setStatus('free');
    }
  }, [activeProject]);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          My Current Status
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="checked status"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={status}
          onChange={(e) => handleStatusChange(e.target.value)}
        />
      </div>

      {status === 'billable' ? <ImplementDSR /> : <ImplementFreeDsr />}
    </>
  );
};

export default MyStatus;


