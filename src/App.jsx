import './App.css'
import { useState } from 'react';
import Card from './components/Card'

function App() {
  const [inputVal, setInputVal] = useState("");
  const [selectVal, setSelectVal] = useState("");
  const [list, setList] = useState([]);


  return (
    <div className='flex items-center w-full h-screen justify-center'>
      <div className='flex flex-col items-center gap-[10] shadow-xl w-[500px] rounded-lg bg-red-300 p-[20px]'>
        <h1 className='text-center text-[25px] font-semibold mb-[20px]'>
        To Do List App
        </h1>

        <div className='flex gap-3'>
          <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} className='rounded-lg px-3 py-2' type="text" placeholder='items title' />
          <select value={selectVal} onChange={(e) => setSelectVal(e.target.value)} className='rounded-lg px-3 py-2' name="" id="">
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
          </select>
          <button onClick={() => setList([...list, { title: inputVal, priority: selectVal }])} className='rounded-lg bg-indigo-500 px-3 py-2 text-white'>Add</button>
        </div>
        <div className='mt-5 w-full flex flex-col gap-[10px]'>
        {list.map((item) => (
          <Card jumanazar={item.title} pri={item.priority} selectVal={selectVal} />
        ))}
        </div>
        </div>
    </div>
  );
}

export default App
