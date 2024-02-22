import { useEffect, useState } from "react";
import Segment from "../Segment";
import Item from "./Item";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/static/notes")
    .then((response) => response.json())
    .then((data) => {setNotes(data)});
  }, []);

  return (
    <Segment title={"Note"}>
      {notes.map((text, index) => (
        <Item key={index} text={text} />
      ))}
    </Segment>
  );
};

export default Notes;