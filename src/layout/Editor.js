import React, { useState } from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";
import Loader from "react-js-loader";

const Editor = () => {
  const [editorContent, setEditorContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [applyDate, setApplyDate] = useState(""); 
  const [leaveContent, setLeaveContent] = useState("");
  const baseUrl = process.env.REACT_APP_API_URL;

  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
  };

  const formats = [
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "size",
  ];

  const handleProcedureContentChange = (content) => {
    setEditorContent(content);
  };

  // const handleApplyClick = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.post(`${baseUrl}/sendContent`, {
  //       applyDate,
  //       leaveContent,
  //     });
  //     // const response = await axios.post(
  //     //   `${baseUrl}/sendContent`,
  //     //   editorContent
  //     // );
  //     console.log("vcxvcx",response)
  //     if(response.data.statusCode==200)
  //     {
  //       setIsLoading(false);
  //     }
  //     console.log("response", response);
  //     setEditorContent(response);
  //   } catch (err) {
      
  //     console.log(err);
  //   }

  //   console.log("Send content:", editorContent);
  // };






  // const handleApplyClick = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.post(`${baseUrl}/sendContent`, {
  //       htmlContent: editorContent, 
  //       applyDate,
  //       leaveContent,
  //     });
  //     console.log("vcxvcx", response);
  //     if (response.status === 200) {
  //       setIsLoading(false);
  //     }
  //     console.log("response", response);
  //     setEditorContent(""); 
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

















  const handleApplyClick = async () => {
    try {
      setIsLoading(true);
  
      // Trim the editor content and check if it's empty or contains only whitespace
      const trimmedContent = editorContent.trim();
      if (!trimmedContent) {
        alert("Please write some content in the editor.");
        setIsLoading(false); // Set loading state to false
        return; // Prevent further execution
      }
  
      const response = await axios.post(`${baseUrl}/sendContent`, {
        htmlContent: editorContent,
        applyDate,
        leaveContent,
      });
  
      if (response.status === 200) {
        setIsLoading(false);
      }
  
      // Clear the editor content
      setEditorContent("");
    } catch (err) {
      console.log(err);
    }
  };
  



  const handleCancelClick = () => {
    setEditorContent("");
  };
  console.log("content", editorContent);

  return (
    <div>
      <h1 style={{ textAlign: "center", width: "" }}></h1>
      {isLoading && (
        <Loader
          type="spinner-cub"
          bgColor="#7BADE2"
          title="spinner-cub"
          color="#FFFFFF"
          size={50}
        />
      )}

    
          <div style={{ display: "grid", justifyContent: "center" }}>
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              value={editorContent}
              placeholder="Write your content ...."
              onChange={setEditorContent}
              style={{ height: "300px", width: "900px" }}
            />
          </div>
          <br />
          <br />
          <button
            className="btn btn-primary"
            onClick={handleApplyClick}
            style={{
              width: "90px",
              backgroundColor: "#000080",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
          >
            Send
          </button>
          &nbsp; &nbsp;
          <button
            className="btn btn-primary"
            onClick={handleCancelClick}
            style={{
              width: "90px",
              backgroundColor: "#000080",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
          >
            Clear
          </button>

    </div>
  );
};

export default Editor;
