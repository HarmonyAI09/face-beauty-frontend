import { useEffect, useState } from "react";
import Segment from "../Segment";
import Item from "./Item";

const Requirements = () => {
  const [references, setReferences] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/static/requirements")
      .then((response) => response.json())
      .then((data) => {setReferences(data)});
  }, []);

  return (
    <Segment title="Photo Requirements">
      Follow the photo instructions carefully.
      {references.map((text, index) => (
        <Item key={index} text={text} />
      ))}
    </Segment>
  );
};

export default Requirements;