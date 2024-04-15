// pages/weather.js
"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useParams } from "next/navigation";
import { Card, CardContent, Typography } from "@mui/material";

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);
  const { cityname } = useParams(); // Accessing the 'city' parameter correctly
  console.log(process.env.NEXT_PUBLIC_API_KEY);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": "weather-api138.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${cityname}`;

      try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parsing response as JSON
        setWeather(result);
        console.log(result); // Logging the parsed result
      } catch (error) {
        setWeather(null);
        console.error(error);
      }
    };

    fetchWeather();
  }, [cityname]); // Dependency added to rerun effect when 'city' changes

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <Head>
          <title>Weather Details</title>
        </Head>
        <div>
          {weather ? (
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Weather Details
                </Typography>
                <Typography variant="body2" component="p">
                  Location: {cityname}
                </Typography>
                <Typography variant="body2" component="p">
                  Temperature: {weather.main.temp - 273.15}°C
                </Typography>
                <Typography variant="body2" component="p">
                  Max Temperature: {weather.main.temp_max - 273.15}°C
                </Typography>
                <Typography variant="body2" component="p">
                  Min Temperature: {weather.main.temp_min - 273.15}°C
                </Typography>
                <Typography variant="body2" component="p">
                  Humidity: {weather.main.humidity}%
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default WeatherPage;
