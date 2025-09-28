export default function Location({ data }) {
    const date = new Date(data.current.time)
    const dateFormatted = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

    const city = 'Manchester, England'

    return (
        <section className="col-span-2 flex flex-nowrap justify-between p-6">
            <div>
                <h2 className="mb-3 text-style-4">{city}</h2>
                <p className="text-style-6">{dateFormatted}</p>
            </div>

            <p>
                <span>icon</span>
                <span className="text-style-1">{Math.round(data.current.temperature_2m)}º</span>
            </p>
        </section>
    )
}
