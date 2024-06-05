import { useState } from 'react'
import Paragraphs from './data/Paragrapghs';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [displayParagraphs, setDisplayParagraphs] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    let numberOfParagraphs;
    if(count > Paragraphs.length) {
      alert(" Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀");
      numberOfParagraphs = 8;
    }
    else if(count <= 0) {
      alert("Ayyo ! You know that you wrote negative or 0 input 😵");
      numberOfParagraphs = 1;
    }
    else {
      numberOfParagraphs = count;
    }
    // const numberOfParagraphs = Math.min(count, Paragraphs.length); // To ensure we don't exceed available paragraphs
    const paragraphsToDisplay = Paragraphs.slice(0, numberOfParagraphs);
    setDisplayParagraphs(paragraphsToDisplay);
  }

  return (
    <div className='flex flex-col items-center mt-10 gap-10'>
      <p className='text-3xl font-bold text-[#94360B]'>TIRED OF BORING LOREM IPSUM</p>
      <form onSubmit={handleSubmit} className='flex items-center gap-5 text-lg'>
        <p>Paragraphs: </p>
        <input 
          onChange={(e) => { setCount(Number(e.target.value)) }} 
          className='border-2 border-black-500 p-2 rounded-lg' 
          type="number" 
          required 
        />
        <button className='bg-orange-400 text-white px-5 py-2 rounded-lg hover:bg-orange-300'>Generate</button>
      </form>
      <div className='flex flex-col gap-2 w-5/6'>
        {displayParagraphs.map((paragraph, index) => (
          <p key={index}>{index + 1}) {paragraph}</p>
        ))}
      </div>
    </div>
  )
}

export default App
