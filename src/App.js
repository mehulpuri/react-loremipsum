import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    
    var amount = parseInt(count);
    if(count <= 0){
      amount = 1;
    }
    setText(data.slice(0, amount));
    event.preventDefault();
  }
  const handleChange = (event) => {
    setCount(event.target.value);
  }
  return (
    <section className="section-center">
      <h3>Generate Fun Lorem Ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs: </label>
        <input type="number" name="amount" id="amount" value={count} onChange={handleChange} />
        <button type="submit" className="btn">Generate</button>
      </form>
      <article className="lorem-text">

        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}

      </article>

    </section>
  )
}

export default App;