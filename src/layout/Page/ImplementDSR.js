import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ImplementDSR = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const [createDSR, setcreateDSR] = useState({
    currentStatus: "",
    projectStatus: "",
    fillDate: "",
    programming: "",
    Testing: "",
    bugFixing: "",
    meeting: "",
    projectManagement: "",
    systemAnalysis: "",
    reviews: "",
    totalHour: "",
  });
  const navigate = useNavigate();

  const handlecrateDSR = (e) => {
    setcreateDSR({ ...createDSR, [e.target.name]: e.target.value });
  };

  const inputStyle = {
    border: "2px solid #ccc",
    borderRadius: "5px",
    padding: "5px",
  };

  const addDSRList = async (e) => {
    try {
      e.preventDefault();
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const userId = userInfo[0]._id;

      const response = await axios.post(`${baseUrl}/addDSR`, createDSR);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            select status
          </span>
          <span class="input-group-text" id="basic-addon1">
            <input
              type="radio"
              checked
              id="html"
              name="fav_language"
              value="HTML"
            />
             <label for="html">Bilable</label>
          </span>
          <br /> 
          {/* <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/> */}
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            select Data for which you are filling report
          </span>
          <input
            type="date"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div style={inputStyle}>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Programming
            </span>

            <input
              type="time"
              class="form-control"
            
              aria-label="Username"
              name="programming"
              value={createDSR.programming}
              onChange={handlecrateDSR}
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Testing
            </span>

            <input
              type="time"
              class="form-control"
                 aria-label="Username"
              aria-describedby="basic-addon1"
              value={createDSR.Testing}
              onChange={handlecrateDSR}
              name="Testing"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Bug Fixing
            </span>

            <input
              type="time"
              class="form-control"
             
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={createDSR.bugFixing}
              name="bugFixing"
              onChange={handlecrateDSR}
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Meetings
            </span>

            <input
              type="time"
              class="form-control"
             
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={createDSR.meeting}
              name="meeting"
              onChange={handlecrateDSR}
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Project Management
            </span>

            <input
              type="time"
              class="form-control"
             
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="projectManagement"
              value={createDSR.projectManagement}
              onChange={handlecrateDSR}
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              System Analysis
            </span>

            <input
              type="time"
              class="form-control"
             
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={createDSR.systemAnalysis}
              name="systemAnalysis"
              onChange={handlecrateDSR}
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Reviews
            </span>

            <input
              type="time"
              class="form-control"
             
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={createDSR.reviews}
              name="reviews"
              onChange={handlecrateDSR}
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Total Hour
            </span>

            <input
              type="time"
              class="form-control"
              
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={createDSR.totalHour}
              name="totalHour"
              onChange={handlecrateDSR}
            />
          </div>

          <button
            class="flex w-full items-center justify-center gap-2 rounded bg-primary py-2.5 px-4.5 font-medium text-white"
            onClick={addDSRList}
          >
            Add DSR
          </button>
        </div>

        <div class="input-group">
          <span class="input-group-text">List of major modules/Comment:</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>
    </>
  );
};

export default ImplementDSR;
