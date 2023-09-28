"use client"
import React, {useState} from "react";

const page = () => {
  const [title, settitle] = useState("")
  const [des, setdes] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title, des}]);
    settitle("");
    setdes("");
  }

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t,i)=>{
      return <li key={i} className="flex items-center justify-between mb-5">
        <div className="flex items-center justify-between mb-5 w-2/3">
        <h5 className="text-xl font-semibold">{t.title}</h5>
        <h6 className="text-lg font-medium">{t.des}</h6>
      </div>
      <button
      onClick={()=>{
        deleteHandler(i)
      }}
      className="bg-red-400 text-white px-4 py-2 rounded font-bold ">Delete
      </button>
      <button
      onClick={()=>{
        deleteHandler(i)
      }}
      className="bg-green-400 text-white px-4 py-2 rounded font-bold ">Complete
      </button>
      </li>
    })
  }

  return (
    <>
    <h1 className="bg-gray-800 text-white p-5 text-5xl font-bold text-center">Today's To Do List</h1>
    <form onSubmit={submitHandler} className="flex justify-center">
     <input required type="text" className=" drop-shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-1/2 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md pl-5 ring-1 ring-slate-200 shadow-sm m-6" 
     placeholder="Enter you'r Task" 
     value= {title}
     onChange={(e)=>{
      settitle(e.target.value)
     }} />
     <input required type="text" className=" drop-shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-1/2 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md pl-5 ring-1 ring-slate-200 shadow-sm m-6" 
     placeholder="Enter Task description"
     value={des}
     onChange={(e)=>{
      setdes(e.target.value)
     }} />
     <button className="bg-black text-white px-4 text-xl font-sm rounded-lg m-5 min-w-max py-5 ">Add Task</button>
    </form>
    <hr />
    <div className="p-8 bg-slate-200 drop-shadow-md ">
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  ) 
}; 

export default page;

//<input class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter projects...">