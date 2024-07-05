// src/Charts/BarChart.js
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, LinearScale, CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { collection, getDocs } from 'firebase/firestore';
import { firestoreApp } from '../config/firebase';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
);

const BarChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchAuctionData = async () => {
      try {
        const auctionCollection = collection(firestoreApp, 'ganadas');
        const querySnapshot = await getDocs(auctionCollection);
        const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setChartData(data);
      } catch (error) {
        console.error('Error fetching auction data:', error);
      }
    };
    fetchAuctionData();
  }, []);

  const data = {
    labels: chartData.map(item => item.auctionName),
    datasets: [{
      label: `${chartData.length} Subastas Ganadas`,
      data: chartData.map(item => item.amountWon),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend: {
      labels: {
        fontSize: 26
      }
    }
  };

  return (
    <div>
      <Bar
        data={data}
        height={400}
        options={options}
      />
    </div>
  );
}

export default BarChart;
