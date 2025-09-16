import Current from './Current'
import Daily from './Daily'
import Hourly from './Hourly'
import Location from './Location'

export default function Weather({ current, daily, hourly }) {
    return (
        <div className="gap-8 grid grid-flow-row grid-cols-3 auto-rows-3">
        
            <Location data={current} />

            <Hourly data={hourly} />

            <Current data={current} />

            <Daily data={daily} />

        </div>
    )
}
