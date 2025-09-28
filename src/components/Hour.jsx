import { convertTime } from '../lib/day'
import iconSunny from '../assets/images/icon-sunny.webp'

export default function Hour({ hour, conditions, temp }) {
    const timeFormatted = new Date(hour)
    const time = convertTime(timeFormatted.getHours())

    return (
        <div className="hour">
            {conditions ? conditions : (<img className="icon" src={iconSunny} alt="Sunny" />)}
            <span className="text-style-5m">{time}</span>
            <span className="text-style-7">{Math.round(temp)}º</span>
        </div>
    )
}
