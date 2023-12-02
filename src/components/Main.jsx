import React from 'react'
import { useState } from "react";
import Li from './Li'

function Main() {
  const [task, setTask] = useState("david");
  const [edit, setEdit] = useState("add");
  const [tasks, setTasks] = useState([]);
  function add() {
    if(task !== ""){
      setTasks([...tasks, task]);
      setTask("")
    }
  }
  function removelement(indexOfLi){
    const newList = tasks.filter(item => item !== tasks[indexOfLi])
    setTasks(newList)
  }
  function editelement(){

  }
  return (
    <>
      <div className="flex flex-col items-center mt-[150px] gap-3">
     <div>
     <input
        className="py-[5px] px-[10px] rounded-[7px] border-[1px] border-[black]- mr-[15px] outline-none"
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button className=" rounded-[7px] border-none bg-black p-[3px] w-[45px] text-white shadow-md" onClick={()=>{add()}}>OK</button>
     </div>
      <ul className="w-[266px] border-[1px] border-[#ddd] p-[10px] rounded-[7px]">
        {tasks.map((item, index) => <Li key={index} {...{index, item, removelement, editelement, edit}}/> )}
      </ul>
     </div>
    </>
  )
}

export default Main
