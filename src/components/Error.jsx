export default function Error({ reason }) {
    if (reason == 'no results') {
        return (
            <div className="hidden">
                <h2>No search results found!</h2>
            </div>
        )
    } else if (reason == 'api') {
        return (
            <div className="hidden">
                <span>icon</span>
                <h1 className="text-style-2">Something went wrong</h1>
                <p>We couldn't connect to the server (API error). Please try again in a few moments.</p>
                <button>
                    <span>icon</span> Retry
                </button>
            </div>
        )
    }
}
