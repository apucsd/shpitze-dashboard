import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";

const About = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [isLoading, seLoading] = useState(false);

  const config = {
    readonly: false,
    placeholder: "Start typings...",
    style: {
      height: 400,
      background: "white",
    },
  };
  return (
    <div className=" bg-white px-4 py-2 rounded-lg pb-10 ">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "16px 0",
        }}
      >
        <div>
          <h3
            className="font-semibold"
            style={{
              color: "black",
              fontSize: 22,
              fontWeight: "500",
            }}
          >
            Privacy Policy
          </h3>
        </div>
      </div>
      <div>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {}}
        />
      </div>
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            height: 44,
            width: 150,
            backgroundColor: "#BB6D42",
            color: "white",
            borderRadius: "8px",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default About;
