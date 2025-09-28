import Hour from './Hour'

export default function Hourly({ data }) {
    const timeArr = data.hourly.time
    const codeArr = data.hourly.weather_code
    const tempArr = data.hourly.temperature_2m

    const dateNow = new Date().getHours()

    const hours = timeArr.slice(dateNow, dateNow + 8)
    const conditions = codeArr.slice(dateNow, dateNow + 8)
    const temps = tempArr.slice(dateNow, dateNow + 8)

    return (
        <section className="bg-neutral-800 col-span-1 row-span-3 p-6 rounded-[calc(var(--radius-2xl)+4px)]">
            <div className="flex flex-nowrap justify-between">
                <h3 className="text-style-5">Hourly forecast</h3>

                <select className="bg-neutral-600 px-4 py-2 rounded-lg" name="day">
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                </select>
            </div>

            <div className="hourly">
                {hours.map((hour, i) =>
                    (<Hour
                        key={i}
                        hour={hour}
                        conditions={``}
                        temp={temps[i]}
                    />)
                )}
            </div>
        </section>
    )
}
