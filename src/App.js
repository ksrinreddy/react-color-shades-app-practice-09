import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setColor(color);
      const colors = new Values(color).all(10);
      setList(colors);
      // setColor("");
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="color"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
            placeholder="#f15025"
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <article key={index}>
              <SingleColor
                {...color}
                index={index}
                hexColor={color.hex}
                list={list}
              />
            </article>
          );
        })}
      </section>
    </>
  );
};

export default App;
