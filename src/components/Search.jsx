export default function Search() {
    return (
        <section className="mb-12 text-center">
            <h1 className="mb-16 text-style-2">How's the sky looking today?</h1>

            <div className="search-form">
                <span className="icon-search"></span>
                <input
                    className="input-text"
                    type="text"
                    name="location"
                    placeholder="Search for a place..." />
                <button
                    className="button-primary"
                >
                    Search
                </button>
            </div>

            <ul className="hidden">
                <li>City Name</li>
                <li>City Name</li>
                <li>City Name</li>
                <li>City Name</li>
            </ul>
        </section>
    )
}
