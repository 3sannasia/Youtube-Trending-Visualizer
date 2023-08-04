import React, {useState} from "react";
import {
  BarChart,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

// const requestOptions = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ title: "PUT SELECT STATEMENT HERE: SELECT Likes, Dislikes, Views FROM Videos WHERE VideoTitle = data.VideoTitle1" })
// };
function Five() {
  const [video_name, setName] = useState(""); // add name state variable with useState hook

  const handleSearch = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    const userInput = event.target.elements.search.value; // retrieve user input from form
    setName(userInput); // update name state variable with user input
  };
  const data = [{ likes: 50, dislikes: 50, views: 50 }];

  const modifiedData = data.map((d) => ({
    ...d,
    LikesViewsRatio: d.likes / d.views,
    DislikesViewsRatio: d.dislikes / d.views,
  }));
  return (
    <div>
      Bar Chart to Analyze Likes/Dislikes with Comments
      <input></input>
      <div> Search for video </div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Submit</button>
      </form>
      {/* getting likes dislikes and the  */}
      <BarChart width={600} height={300} data={modifiedData}>
        {/* <XAxis dataKey="name" USE THIS FOR X ACXIS IF GROUPING OR SOMETHING/>  */}
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="LikesViewsRatio" fill="#0000cd" />
        <Bar dataKey="DislikesViewsRatio" fill="#ff0000" />
      </BarChart>
    </div>
  );
}

export default Five;

// Problem 5:
//
