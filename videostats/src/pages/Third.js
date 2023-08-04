import React, { useState, useEffect, useRef } from 'react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const Regions = ["USA", "Germany", "Canada"];

const Third = () => {
  const [chartData, setChartData] = useState([{ name: "tag1", value: 1 }, { name: "tag2", value: 2 }]);
  const [currRegion, setCurrRegion] = useState(0);
  const chartRef = useRef(null);

  async function post() {
    const response = await fetch("https://10.192.38.59:5000/query", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: 'SELECT t.Name, COUNT(v.VideoID) FROM Describes d JOIN Videos v ON (d.VideoID = v.VideoID) JOIN Tags t ON (d.TagsID = t.TagsID) WHERE v.Region = '.concat(Regions[currRegion], ' GROUP BY d.TagsID, t.Name ORDER BY COUNT(v.VideoID) DESC LIMIT 15') })
    });
    const resultVals = await response.json();
    setChartData(resultVals.msg);
  }

  useEffect(() => {
    drawPieChart();
  }, [chartData]);

  const handleClick = () => {
    setCurrRegion(currRegion > 1 ? 0 : currRegion + 1);
    post();
  };

  const drawPieChart = () => {
    if (chartData.length > 0) {
      const canvas = chartRef.current;
      const ctx = canvas.getContext('2d');
      const canvasWidth = canvas.clientWidth;
      const canvasHeight = canvas.clientHeight;
      const radius = Math.min(canvasWidth, canvasHeight) / 2 - 10;
      const centerX = canvasWidth / 2;
      const centerY = canvasHeight / 2;
      const totalValue = chartData.reduce((acc, val) => acc + val.value, 0);
      let startAngle = 0;
      chartData.forEach((data, index) => {
        const sliceAngle = (2 * Math.PI * data.value) / totalValue;
        const endAngle = startAngle + sliceAngle;

        ctx.beginPath();
        ctx.fillStyle = COLORS[index % COLORS.length];
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.lineTo(centerX, centerY);
        ctx.fill();

        startAngle = endAngle;
      });
    }
  };

  return (
    <>
      <button onClick={handleClick}>Change Region</button>
      <h2>Currently set to {Regions[currRegion]}</h2>
      <canvas ref={chartRef} width={400} height={400} />
    </>
  );
};

export default Third;
