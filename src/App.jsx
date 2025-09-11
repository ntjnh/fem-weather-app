import './App.css'

function App() {

    return (
        <>
            <header className="py-12">
                <div className="container mx-auto">

                    <div className="flex flex-nowrap justify-between">
                        <div>
                            Weather Now
                        </div>

                        <section>
                            <button>Units</button>

                            <div className="hidden">
                                Switch to Imperial/Metric

                                <fieldset>
                                    <legend>Temperature</legend>

                                    <div>
                                        <label>
                                            <input type="radio" name="" id="" />
                                            Celsius (°C)
                                        </label>
                                        <label>
                                            <input type="radio" name="" id="" />
                                            Fahrenheit (°F)
                                        </label>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <legend>Wind Speed</legend>

                                    <div>
                                        <label>
                                            <input type="radio" name="" id="" />
                                            km/h
                                        </label>
                                        <label>
                                            <input type="radio" name="" id="" />
                                            mph
                                        </label>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <legend>Precipitation</legend>

                                    <div>
                                        <label>
                                            <input type="radio" name="" id="" />
                                            Millimeters (mm)
                                        </label>
                                        <label>
                                            <input type="radio" name="" id="" />
                                            Inches (in)
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                        </section>

                    </div>

                </div>
            </header>
            
            <main className="pb-16 pt-4">

                <div className="container mx-auto">

                    <section className="text-center">
                        <h1 className="mb-16 text-style-2">How's the sky looking today?</h1>

                        <input type="text" name="location" placeholder="Search for a place..." />
                        <button>Search</button>

                        <ul className="hidden">
                            <li>City Name</li>
                            <li>City Name</li>
                            <li>City Name</li>
                            <li>City Name</li>
                        </ul>
                    </section>

                    <div className="hidden">
                        <h2>No search results found!</h2>
                    </div>

                    <div className="hidden">
                        <span>icon</span>
                        <h1 className="text-style-2">Something went wrong</h1>
                        <p>We couldn't connect to the server (API error). Please try again in a few moments.</p>
                        <button>
                            <span>icon</span> Retry
                        </button>
                    </div>

                    <div className="gap-8 grid grid-flow-row grid-cols-3 auto-rows-3">

                        <section className="col-span-2 flex flex-nowrap justify-between p-6">

                            <div>
                                <h2 className="mb-3 text-style-4">City, Country</h2>
                                <p className="text-style-6">Tuesday, Aug 5, 2025</p>
                            </div>

                            <p>
                                <span>icon</span> 
                                <span className="text-style-1">20º</span>
                            </p>
                        </section>

                        <section className="col-span-1 row-span-3 p-6">
                            <div className="flex flex-nowrap justify-between">
                                <h3 className="text-style-5">Hourly forecast</h3>

                                <select name="day">
                                    <option value="monday">Monday</option>
                                    <option value="tuesday">Tuesday</option>
                                    <option value="wednesday">Wednesday</option>
                                    <option value="thursday">Thursday</option>
                                    <option value="friday">Friday</option>
                                    <option value="saturday">Saturday</option>
                                    <option value="sunday">Sunday</option>
                                </select>
                            </div>

                            <div>
                                <div className="flex flex-nowrap justify-between px-4 py-2.5">
                                    <div>icon 0 PM</div><div>00º</div>
                                </div>
                                <div className="flex flex-nowrap justify-between px-4 py-2.5">
                                    <div>icon 0 PM</div><div>00º</div>
                                </div>
                                <div className="flex flex-nowrap justify-between px-4 py-2.5">
                                    <div>icon 0 PM</div><div>00º</div>
                                </div>
                                <div className="flex flex-nowrap justify-between px-4 py-2.5">
                                    <div>icon 0 PM</div><div>00º</div>
                                </div>
                                <div className="flex flex-nowrap justify-between px-4 py-2.5">
                                    <div>icon 0 PM</div><div>00º</div>
                                </div>
                                <div className="flex flex-nowrap justify-between px-4 py-2.5">
                                    <div>icon 0 PM</div><div>00º</div>
                                </div>
                                <div className="flex flex-nowrap justify-between px-4 py-2.5">
                                    <div>icon 0 PM</div><div>00º</div>
                                </div>
                                <div className="flex flex-nowrap justify-between px-4 py-2.5">
                                    <div>icon 0 PM</div><div>00º</div>
                                </div>
                            </div>
                        </section>

                        <section className="col-span-2 grid grid-cols-4 gap-6">
                            <div className="p-5">
                                <h4 className="mb-6 text-style-6">Feels like</h4>
                                <h5 className="text-style-3">00º</h5>
                            </div>

                            <div className="p-5">
                                <h4 className="mb-6 text-style-6">Humidity</h4>
                                <h5 className="text-style-3">00%</h5>
                            </div>

                            <div className="p-5">
                                <h4 className="mb-6 text-style-6">Wind</h4>
                                <h5 className="text-style-3">00 <span>{`km/h`}</span></h5>
                            </div>

                            <div className="p-5">
                                <h4 className="mb-6 text-style-6">Precipitation</h4>
                                <h5 className="text-style-3">0 <span>{`mm`}</span></h5>
                            </div>
                        </section>

                        <section className="col-span-2">
                            <h3 className="text-style-5">Daily forecast</h3>

                            <div className="gap-x-4 grid grid-cols-7">
                                <div className="px-2.5 py-4 text-center">
                                    <h4 className="text-style-6">Day</h4>
                                    <span className="inline-block py-4">icon</span>
                                    <div className="flex flex-nowrap justify-between">
                                        <h5 className="text-style-7">00º</h5>
                                        <h5 className="text-style-7">00º</h5>
                                    </div>
                                </div>
                                <div className="px-2.5 py-4 text-center">
                                    <h4 className="text-style-6">Day</h4>
                                    <span className="inline-block py-4">icon</span>
                                    <div className="flex flex-nowrap justify-between">
                                        <h5 className="text-style-7">00º</h5>
                                        <h5 className="text-style-7">00º</h5>
                                    </div>
                                </div>
                                <div className="px-2.5 py-4 text-center">
                                    <h4 className="text-style-6">Day</h4>
                                    <span className="inline-block py-4">icon</span>
                                    <div className="flex flex-nowrap justify-between">
                                        <h5 className="text-style-7">00º</h5>
                                        <h5 className="text-style-7">00º</h5>
                                    </div>
                                </div>
                                <div className="px-2.5 py-4 text-center">
                                    <h4 className="text-style-6">Day</h4>
                                    <span className="inline-block py-4">icon</span>
                                    <div className="flex flex-nowrap justify-between">
                                        <h5 className="text-style-7">00º</h5>
                                        <h5 className="text-style-7">00º</h5>
                                    </div>
                                </div>
                                <div className="px-2.5 py-4 text-center">
                                    <h4 className="text-style-6">Day</h4>
                                    <span className="inline-block py-4">icon</span>
                                    <div className="flex flex-nowrap justify-between">
                                        <h5 className="text-style-7">00º</h5>
                                        <h5 className="text-style-7">00º</h5>
                                    </div>
                                </div>
                                <div className="px-2.5 py-4 text-center">
                                    <h4 className="text-style-6">Day</h4>
                                    <span className="inline-block py-4">icon</span>
                                    <div className="flex flex-nowrap justify-between">
                                        <h5 className="text-style-7">00º</h5>
                                        <h5 className="text-style-7">00º</h5>
                                    </div>
                                </div>
                                <div className="px-2.5 py-4 text-center">
                                    <h4 className="text-style-6">Day</h4>
                                    <span className="inline-block py-4">icon</span>
                                    <div className="flex flex-nowrap justify-between">
                                        <h5 className="text-style-7">00º</h5>
                                        <h5 className="text-style-7">00º</h5>
                                    </div>
                                </div>
                            </div>
                            
                        </section>

                    </div>

                </div>

            </main>

            <footer className="py-6">
                <div class="text-center text-sm">
                    Challenge by <a className="underline" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer noopener">Frontend Mentor</a>.
                    Built by <a className="underline" href="https://nate-dev.com" target="_blank" rel="noreferrer noopener">Nate</a>.
                </div>
            </footer>
        </>
    )
}

export default App
