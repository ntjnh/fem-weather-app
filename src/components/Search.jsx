export default function Search() {
    return (
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
    )
}
