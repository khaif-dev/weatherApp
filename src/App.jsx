import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Spinner } from './components/ui/spinner';

function App() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const [location, setLocation] = useState("Nairobi");  
  const [today, setToday] = useState(null);
  const [next5Days, setNext5Days] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch weather data from across visuals
  const fetchWeather = async (loc) => {
  try {
    setLoading(true);
    setError(null);

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=metric&key=${apiKey}&contentType=json`;

    const response = await fetch(url);

    // If API returns text instead of JSON, handle it
    const contentType = response.headers.get("content-type");

    if (!response.ok || !contentType.includes("application/json")) {
      throw new Error("Location not found");
    }

    const data = await response.json();

    // Further validation
    if (!data.days || !Array.isArray(data.days)) {
      throw new Error("Location not found");
    }

    setToday(data.days[0]);
    setNext5Days(data.days.slice(1, 6));
  } catch (err) {
    console.error("Weather fetch error:", err);

    setError("Location not found. Please enter a valid city.");

    setToday(null);
    setNext5Days([]);
  } finally {
    setLoading(false);
  }
};

  // get weather for nairobi on page load
  useEffect(() => {
    fetchWeather(location); 
  }, []);

  // get weather for user location when user submits
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target[0].value;
    setLocation(newLocation);
    fetchWeather(newLocation);
  };

  return (
    <>
      <div className='flex flex-col w-full min-h-screen px-4 py-6 gap-10 
      md:justify-center md:items-center md:w-max-3xl md:mx-auto'>
        
        {/* Search Bar */}
        <form className='flex gap-4 md:w-4xl' onSubmit={handleSubmit}>
          <Input 
            type='text'
            placeholder='Enter location'
          />
          <Button className='border-2 rounded-lg'><Search /></Button>
        </form>

        {/* Weather Card */}
        <div className='md:w-4xl'>
          <Card >
            <CardHeader>
              <CardTitle>Weather in {location}</CardTitle>
              <CardDescription>
                {loading && <Spinner />}

                {error && (
                  <span className="text-red-500 font-medium">
                    {error}
                  </span>
                )}

                {!loading && !error && today && (
                  `${today.conditions} , ${today.temp}°C`
                )}
            </CardDescription>
            </CardHeader>

            <CardContent>
              {!loading && next5Days.length > 0 && (
                <div className='grid grid-row-5 gap-4 md:grid-cols-5'>
                  {next5Days.map((day) => (
                    <div key={day.datetime} className='p-4 border rounded-lg'>
                      <p className='font-semibold'>{day.datetime}</p>
                      <p>{day.tempmax}° / {day.tempmin}°</p>
                      <p className='text-sm'>{day.conditions}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

      </div>
    </>
  )
}

export default App;
