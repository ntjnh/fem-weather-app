import './App.css'

function App() {

    return (
        <>
            <header>
                <h1 className="text-style-1">Weather Now</h1>
            </header>
            
            <main>
                Units

                Switch to Imperial/Metric

                Temperature

                Celsius (°C)
                Fahrenheit (°F)

                Wind Speed

                km/h
                mph

                Precipitation

                Millimeters (mm)
                Inches (in)

                How's the sky looking today?

                Search for a city, e.g., New York
                Search

                Feels like
                {/* Insert temperature here */}

                Humidity
                {/* Insert humidity here */}

                Wind
                {/* Insert wind here */}

                Precipitation
                {/* Insert precipitation here */}

                Daily forecast
                {/* Insert daily forecast for the next 7 days here */}

                Hourly forecast
                {/* Insert hourly forecast for the selected day here */}

            </main>

            <footer>
                <div class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer noopener">Frontend Mentor</a>.
                    Built by <a href="https://nate-dev.com" target="_blank" rel="noreferrer noopener">Nate</a>.
                </div>
            </footer>
        </>
    )
}

export default App
