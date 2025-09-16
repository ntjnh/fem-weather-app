export default function Location({ city, date, temperature }) {
    return (
        <section className="col-span-2 flex flex-nowrap justify-between p-6">

            <div>
                <h2 className="mb-3 text-style-4">{city}</h2>
                <p className="text-style-6">{date}</p>
            </div>

            <p>
                <span>icon</span>
                <span className="text-style-1">{temperature}º</span>
            </p>
        </section>
    )
}