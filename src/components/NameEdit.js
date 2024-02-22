import React, { useContext, useState } from "react";
import { UserContext } from "../pages/home";
import { OneProfile } from "../class/Profile";

const NameEdit = ({ disabled }) => { // Accept disabled as a prop
  const [isEditing, setIsEditing] = useState(false);
  const { oneProfile, setOneProfile } = useContext(UserContext);
  const [value, setValue] = useState(oneProfile.name);

  const handleClick = () => {
    if (!disabled) { // Check if not disabled before enabling editing
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && value.trim() !== "") {
      setIsEditing(false);
      // Optionally, add the disabled check here too if needed
      // to prevent changing the value when disabled
    }
  };

  const handleChange = (e) => {
    if (!disabled) { // Prevent changes if disabled
      setValue(e.target.value);
      const tmpProfile = new OneProfile();
      tmpProfile.copy(oneProfile);
      tmpProfile.name = e.target.value;
      setOneProfile(tmpProfile);
    }
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
          disabled={disabled} // Apply the disabled prop to the input
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
            cursor: disabled ? "default" : "pointer", // Change cursor based on disabled state
          }}
        >
          {value}
        </span>
      )}
    </div>
  );
};

export default NameEdit;
