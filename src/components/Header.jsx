export default function Header() {
    return (
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
    )
}
