import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./CrimeStats.css";

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ChartDataLabels
);

const CrimeStats = () => {
  const [crimes, setCrimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const latitude = 51.4816;
    const longitude = -3.1791;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}`
        );
        setCrimes(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const crimeCategories = crimes.reduce((acc, crime) => {
    acc[crime.category] = (acc[crime.category] || 0) + 1;
    return acc;
  }, {});

  const formatLabel = (label) => {
    return label
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formattedLabels = Object.keys(crimeCategories).map(formatLabel);

  const colorPalette = [
    "rgba(255, 99, 132, 0.5)", // Red
    "rgba(54, 162, 235, 0.5)", // Blue
    "rgba(255, 206, 86, 0.5)", // Yellow
    "rgba(75, 192, 192, 0.5)", // Green
    "rgba(153, 102, 255, 0.5)", // Purple
    "rgba(255, 159, 64, 0.5)", // Orange
    "rgba(100, 149, 237, 0.5)", // Cornflower Blue
    "rgba(144, 238, 144, 0.5)", // Light Green
    "rgba(211, 211, 211, 0.5)", // Light Gray
    "rgba(255, 222, 173, 0.5)", // Navajo White
    "rgba(176, 224, 230, 0.5)", // Powder Blue
    "rgba(240, 230, 140, 0.5)", // Khaki
    "rgba(221, 160, 221, 0.5)", // Plum
    "rgba(224, 255, 255, 0.5)", // Light Cyan
    "rgba(250, 235, 215, 0.5)", // Antique White
    "rgba(245, 245, 220, 0.5)", // Beige
  ];

  const getColorPalette = (numColors) => {
    if (numColors <= colorPalette.length) {
      return colorPalette.slice(0, numColors);
    } else {
      let extendedPalette = [];
      for (let i = 0; i < numColors; i++) {
        extendedPalette.push(colorPalette[i % colorPalette.length]);
      }
      return extendedPalette;
    }
  };

  const colors = getColorPalette(formattedLabels.length);

  const data = {
    labels: formattedLabels,
    datasets: [
      {
        label: "Number of Crimes",
        data: Object.values(crimeCategories),
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 14,
          },
        },
        ticks: {
          display: false,
        },
        grid: {
          color: "#e9e9e9",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 30,
            color: "white",
          },
          color: "white",
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
        bodyFont: {
          size: 14,
        },
        titleFont: {
          size: 16,
        },
      },
      title: {
        display: true,
        text: "Number of crimes within the last month",
        font: {
          size: 50,
        },
        color: "white",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      datalabels: {
        color: "white",
        anchor: "end",
        align: "start",
        formatter: (value, context) => {
          return value > 80 ? value : null;
        },
        font: {
          size: 35,
        },
      },
    },
  };

  return (
    <div className="p-4">
      <h1 className="title">Crime Statistics for Cardiff</h1>
      <div className="chart-description">
        Crime Statistics Data
        <a
          href="https://data.police.uk/docs/method/crime-street/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
      <div className="chart-container">
        <PolarArea data={data} options={options} />
      </div>
    </div>
  );
};

export default CrimeStats;
