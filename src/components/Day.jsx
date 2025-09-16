export default function Day({ day, conditions, max, min }) {
    return (
        <div className="px-2.5 py-4 text-center">
            <h4 className="text-style-6">{day ? day : 'Day'}</h4>
            <span className="inline-block py-4">{conditions ? conditions : 'icon'}</span>
            <div className="flex flex-nowrap justify-between">
                <h5 className="text-style-7">{max ? max : '00'}º</h5>
                <h5 className="text-style-7">{min ? min : '00'}º</h5>
            </div>
        </div>
    )
}
