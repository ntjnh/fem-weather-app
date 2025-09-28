import convertDay from '../lib/day'

export default function Day({ day, conditions, max, min }) {

    const dayFormatted = new Date(day)
    const dayShort = convertDay(dayFormatted.getDay())

    return (
        <div className="px-2.5 py-4 text-center">
            <h4 className="text-style-6">{dayShort ? dayShort : 'Day'}</h4>
            <span className="inline-block py-4">{conditions ? conditions : 'icon'}</span>
            <div className="flex flex-nowrap justify-between">
                <h5 className="text-style-7">{max ? Math.round(max) : '00'}º</h5>
                <h5 className="text-style-7">{min ? Math.round(min) : '00'}º</h5>
            </div>
        </div>
    )
}
