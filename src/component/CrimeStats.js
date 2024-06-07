import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { PolarArea, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./CrimeStats.css";

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
  ChartDataLabels
);

const CrimeStats = () => {
  const [crimes, setCrimes] = useState([]);
  const [monthlyCrimes, setMonthlyCrimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latestMonth, setLatestMonth] = useState("");

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(
        `Failed to fetch data from ${url}:`,
        error.response || error.message
      );
      return [];
    }
  };

  useEffect(() => {
    const latitude = 51.4816;
    const longitude = -3.1791;

    const fetchDataForCharts = async () => {
      try {
        // Fetch data for the latest month
        const latestResponse = await fetchData(
          `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}`
        );
        setCrimes(latestResponse);

        // Get the date of the latest data
        let latestDate;
        if (latestResponse.length > 0) {
          latestDate = new Date(latestResponse[0].month);
          const month = latestDate.toLocaleString("default", { month: "long" });
          const year = latestDate.getFullYear();
          setLatestMonth(`${month} ${year}`);
        } else {
          latestDate = new Date();
        }

        // Fetch data for the past 12 months from the latest available data
        const fetchMonthlyData = Array.from({ length: 6 }, (_, i) => {
          const date = new Date(latestDate);
          date.setMonth(date.getMonth() - i);
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const formattedDate = `${year}-${month}`;
          return fetchData(
            `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${formattedDate}`
          ).then((data) => ({ date: formattedDate, data }));
        });

        const monthlyResponses = await Promise.all(fetchMonthlyData);

        const monthlyCrimeCounts = monthlyResponses.map((response, index) => {
          const date = new Date(latestDate);
          date.setMonth(date.getMonth() - index);
          const month = date.toLocaleString("default", { month: "short" });
          const year = date.getFullYear();
          return {
            month: `${month} ${year}`,
            count: response.data.length,
          };
        });

        setMonthlyCrimes(monthlyCrimeCounts.reverse());
      } catch (error) {
        console.error("Error fetching data:", error.response || error.message);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDataForCharts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Processing data for the PolarArea chart
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
            size: 10,
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
            size: 15,
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
          size: 10,
        },
      },
      title: {
        display: true,
        text: `Number of Crimes as of the Latest Available Month (${latestMonth}) `,
        font: {
          size: 25,
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
        formatter: (value) => {
          return value > 80 ? value : null;
        },
        font: {
          size: 12,
        },
      },
    },
  };

  const monthlyData = {
    labels: monthlyCrimes.map((item) => item.month),
    datasets: [
      {
        label: "Number of Crimes per Month",
        data: monthlyCrimes.map((item) => item.count),
        backgroundColor: "rgba(54, 162, 235, 0.5)", // Blue
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const monthlyOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "#e9e9e9",
        },
        ticks: {
          font: {
            size: 14,
          },
          color: "white",
        },
      },
      y: {
        grid: {
          color: "#e9e9e9",
        },
        ticks: {
          font: {
            size: 14,
          },
          color: "white",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 15,
            color: "white",
          },
          color: "white",
        },
      },
      title: {
        display: true,
        text: "Total Number of Crimes per Month for the Past 6 Months",
        font: {
          size: 25,
        },
        color: "white",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      datalabels: {
        color: "white",
        anchor: "top",
      },
    },
  };

  return (
    <div className="p-4">
      <h1 className="title">Crime Statistics for Cardiff</h1>

      <div className="chart-container">
        <PolarArea data={data} options={options} />
      </div>
      <div className="chart-container">
        <Bar data={monthlyData} options={monthlyOptions} />
      </div>
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
    </div>
  );
};

export default CrimeStats;
