import Day from './Day'

export default function Daily({ data }) {
    console.log(data)

    const days = data.daily.time
    const maxes = data.daily.temperature_2m_max
    const mins = data.daily.temperature_2m_min

    return (
        <section className="col-span-2">
            <h3 className="text-style-5">Daily forecast</h3>

            <div className="gap-x-4 grid grid-cols-7">

                {days.map((day, i) => 
                    (<Day
                        key={i}
                        day={day}
                        conditions={``}
                        max={maxes[i]}
                        min={mins[i]}
                        
                    />)
                )}

            </div>

        </section>
    )
}
