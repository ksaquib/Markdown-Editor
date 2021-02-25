import React, { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

export default function App() {
  const [markdown, setMarkdown] = useState("# supp");

  const handleChange = ({ target: { value } }) => {
    setMarkdown(value);
  };
  return (
    <div className="app">
      <textarea value={markdown} onChange={handleChange} />

      {/* <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      /> */}
      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}
