import { React, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

export default function InputArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({ title: "", content: "" });

  function HandleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    e.preventDefault();
  }

  function handleExpand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="input-note">
        {isExpanded && (
          <input
            name="title"
            value={note.title}
            onChange={HandleChange}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={handleExpand}
          value={note.content}
          onChange={HandleChange}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
