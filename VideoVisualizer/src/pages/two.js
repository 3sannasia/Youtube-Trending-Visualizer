import React, { useState } from "react";

import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

// const requestOptions = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ title: "SELECT " })
// };
function Two() {
  const [video_name, setName] = useState(""); // add name state variable with useState hook

  const handleSearch = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    const userInput = event.target.elements.search.value; // retrieve user input from form
    setName(userInput); // update name state variable with user input
  };

  const data = [
    {
      VideoTitle: "Minecraft",
      NumComments: 2,
      Likes: 2,
      Dislikes: 2,
      Views: 2,
    },
    { VideoTitle: "Roblox", NumComments: 1, Likes: 1, Dislikes: 1, Views: 1 },
  ];

  return (
    <div>
      Bar Chart to Comparing two or more specific videos and shown using a table
      <div> Search for video 1 </div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Submit</button>
      </form>
      <div> Search for video 2 </div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Submit</button>
      </form>
      <div>{{ video_name }}</div>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="VideoTitle" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Likes" fill="#ff0000" />
        <Bar dataKey="Dislikes" fill="#00FF00" />
        <Bar dataKey="NumComments" fill="#0000FF" />
        <Bar dataKey="Views" fill="#FFC0CB" />
      </BarChart>
    </div>
  );
}

export default Two;
