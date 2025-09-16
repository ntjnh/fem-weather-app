import { useEffect, useState } from 'react'
import { getEndpoint } from './lib/api'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import Weather from './components/Weather'

function App() {
    const [weather, setWeatherData] = useState({})
    
    useEffect(() => {
        const getData = async () => {
            try {
                await fetch(getEndpoint())
                    .then(res => {
                        if (!res.ok) {
                            throw new Error(`Response status: ${res.status}`)
                        }

                        return res.json()
                    })
                    .then(data => setWeatherData(data))
            } catch (err) {
                console.error(err.message)
            }
        }

        getData()
    }, [])

    if (Object.entries(weather).length) console.log(weather)

    return (
        <>
            <Header />
            
            <main className="pb-16 pt-4">

                <div className="container mx-auto">

                    <Search />

                    {weather ? 
                        <Weather data={weather} /> : 
                        <Error reason="api" />
                    }

                </div>

            </main>

            <footer className="py-6">
                <div className="text-center text-sm">
                    Challenge by <a className="underline" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer noopener">Frontend Mentor</a>.
                    Built by <a className="underline" href="https://nate-dev.com" target="_blank" rel="noreferrer noopener">Nate</a>.
                </div>
            </footer>
        </>
    )
}

export default App
