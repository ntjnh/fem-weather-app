import convertDay from '../lib/day'
import iconSunny from '../assets/images/icon-sunny.webp'

export default function Day({ day, conditions, max, min }) {

    const dayFormatted = new Date(day)
    const dayShort = convertDay(dayFormatted.getDay())

    return (
        <div className="day">
            <h4 className="text-style-6">{dayShort ? dayShort : 'Day'}</h4>
            
            {conditions ? conditions : (<img className="icon" src={iconSunny} alt="Sunny" />)}

            <div className="flex flex-nowrap justify-between">
                <h5 className="text-style-7">{max ? Math.round(max) : '00'}º</h5>
                <h5 className="text-neutral-200 text-style-7">{min ? Math.round(min) : '00'}º</h5>
            </div>
        </div>
    )
}
