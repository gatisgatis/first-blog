import React, { FC, useState } from "react";
import "./add-comment.css";

type Props = {
  onClick: (info: InputValue) => InputValue;
};

export type InputValue = {
  name: string;
  text: string;
};

const defaultInputValue: InputValue = {
  name: "",
  text: "",
};

const AddComment: FC<Props> = ({ onClick }) => {
  const [inputValue, setInputValue] = useState<InputValue>(defaultInputValue);

  return (
    <div className="comments d-flex flex-column">
      <input
        type="text"
        placeholder="Write your comment here..."
        value={inputValue.text}
        onChange={(e) => setInputValue({ ...inputValue, text: e.target.value })}
      />
      <input
        type="text"
        placeholder="Your Name here..."
        value={inputValue.name}
        onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
      />
      {/* Kā es uz clicka varu resetot inputiem values? es baigi hacky veidu izdomāju, bet gan jau jābūt labākam...*/}
      <button onClick={() => setInputValue(onClick(inputValue))}>
        Add Comment
      </button>
    </div>
  );
};

export default AddComment;
