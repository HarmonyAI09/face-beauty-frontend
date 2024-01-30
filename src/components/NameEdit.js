import React, { useState } from "react";

const NameEdit = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("Unnamed");

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && value.trim() !== "") {
      setIsEditing(false);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          style={{
            borderBottom: "1px dotted",
            fontStyle: "italic",
            border: "none",
            height: "20px",
            borderRadius: "15px",
            backgroundColor: "#e3f2fd",
            color:"#1565c0",
            paddingLeft:"15px",
          }}
        />
      ) : (
        <span
          onClick={handleClick}
          style={{
            borderBottom: "1px dotted",
            fontStyle: "italic",
            cursor: "pointer",
          }}
        >
          {value}
        </span>
      )}
    </div>
  );
};

export default NameEdit;