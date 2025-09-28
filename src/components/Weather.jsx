import WeatherDetails from './WeatherDetails'
import Daily from './Daily'
import Hourly from './Hourly'
import Location from './Location'

export default function Weather({ data }) {
    return (
        <div className="gap-8 grid grid-flow-row grid-cols-3 auto-rows-3">
        
            <Location data={data} />

            <Hourly data={data} />

            <WeatherDetails data={data} />

            <Daily data={data} />

        </div>
    )
}
