import iconSunny from '../assets/images/icon-sunny.webp'

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
        <section className="location">
            <div>
                <h2 className="mb-3 text-style-4">{city}</h2>
                <p className="opacity-80 text-style-6">{dateFormatted}</p>
            </div>

            <p className="flex flex-nowrap items-center">
                <img className="icon h-[120px] inline-block mr-5 w-[120px]" src={iconSunny} alt="Sunny" />
                <span className="pr-[5px] text-style-1">{Math.round(data.current.temperature_2m)}º</span>
            </p>
        </section>
    )
}
