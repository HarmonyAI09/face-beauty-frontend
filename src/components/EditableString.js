import React, { useState, useEffect } from "react";

const EditableString = ({ value: initialValue, onValueChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onValueChange(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && value.trim() !== "") {
      setIsEditing(false);
      onValueChange(value);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

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

export default EditableString;