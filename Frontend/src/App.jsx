
// App.jsx

import { useState } from "react";
import axios from "axios"

function App() {
  const [notes, setNotes] = useState([
    {
      title: "text title",
      description: "text description",
    },
    {
      title: "text title",
      description: "text description",
    },
    {
      title: "text title",
      description: "text description",
    },
    {
      title: "text title",
      description: "text description",
    },
    {
      title: "text title",
      description: "text description",
    },
    {
      title: "text title",
      description: "text description",
    },
    {
      title: "text title",
      description: "text description",
    },
  ]);

  axios.get('http://localhost:3000/api/notes').then((res)=>{
    setNotes(res.data.notes)
  })
  return (
    <>
      <div className="w-full p-10 flex items-center justify-center gap-10 flex-wrap">
        {notes.map((note, idx) => {
          return (
            <div key={idx} className="p-5 bg-gray-800 rounded-md max-w-md flex flex-col justify-center items-center text-center gap-5">
              <h1 className="text-3xl uppercase font-medium">{note.title}</h1>
              <p className="text-lg">{note.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
