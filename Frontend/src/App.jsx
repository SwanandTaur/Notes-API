// App.jsx

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  function fetchNotes(){
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  useEffect(() => {
    fetchNotes()
  }, []);

  function handleSubmit(e){
    e.preventDefault()
    const {title, description} = e.target.elements;

    axios.post("http://localhost:3000/api/notes",{
      title : title.value,
      description : description.value
    })
    .then(()=>{
      fetchNotes()
      title.value = ""
      description.value = ""
    })
  }

  function handleDelete(noteId){
    axios.delete(`http://localhost:3000/api/notes/${noteId}`)
    .then(()=>{
      fetchNotes()
    })
  }

  function handleUpdate(noteId){
    const newTitle = prompt("Enter new title");
    const newDescription = prompt("Enter new description");
    if(!newDescription) return;
    axios.put(`http://localhost:3000/api/notes/${noteId}`,{
      title : newTitle,
      description : newDescription
    })
    .then(()=>{
      fetchNotes();
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full p-5 bg-black flex justify-center gap-15 sticky top-0">
        <input name="title" className="rounded-sm px-3 py-1 text-2xl border border-gray-400 outline-none" type="text" placeholder="Enter Title" />
        <input name="description" className="rounded-sm px-3 py-1 text-2xl border border-gray-400 outline-none" type="text" placeholder="Enter Description" />
        <button className="rounded bg-blue-700 px-3 py-1 cursor-pointer active:scale-95 text-2xl">Submit</button>
      </form>
      <div className="w-full p-10 flex items-center justify-center gap-10 flex-wrap">
        {notes.map((note, idx) => {
          return (
            <div
              key={idx}
              className="p-5 bg-gray-800 rounded-md max-w-md flex flex-col justify-center items-center text-center gap-5"
            >
              <h1 className="text-3xl uppercase font-medium">{note.title}</h1>
              <p className="text-lg">{note.description}</p>
              <div className="w-full flex gap-10 justify-center">
                <button onClick={()=>{handleUpdate(note._id)}} className="rounded bg-green-700 px-2 cursor-pointer active:scale-95 text-lg">Update</button>
                <button onClick={()=>{handleDelete(note._id)}} className="rounded bg-red-700 px-2 cursor-pointer active:scale-95 text-lg">Delete</button>

              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
