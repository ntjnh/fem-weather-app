import Day from './Day'

export default function Daily() {
    return (
        <section className="col-span-2">
            <h3 className="text-style-5">Daily forecast</h3>

            <div className="gap-x-4 grid grid-cols-7">
                <Day
                    day={`Fri`}
                    conditions={``}
                    max={20}
                    min={14}
                    
                />

                <div className="px-2.5 py-4 text-center">
                    <h4 className="text-style-6">Day</h4>
                    <span className="inline-block py-4">icon</span>
                    <div className="flex flex-nowrap justify-between">
                        <h5 className="text-style-7">00º</h5>
                        <h5 className="text-style-7">00º</h5>
                    </div>
                </div>
                <div className="px-2.5 py-4 text-center">
                    <h4 className="text-style-6">Day</h4>
                    <span className="inline-block py-4">icon</span>
                    <div className="flex flex-nowrap justify-between">
                        <h5 className="text-style-7">00º</h5>
                        <h5 className="text-style-7">00º</h5>
                    </div>
                </div>
                <div className="px-2.5 py-4 text-center">
                    <h4 className="text-style-6">Day</h4>
                    <span className="inline-block py-4">icon</span>
                    <div className="flex flex-nowrap justify-between">
                        <h5 className="text-style-7">00º</h5>
                        <h5 className="text-style-7">00º</h5>
                    </div>
                </div>
                <div className="px-2.5 py-4 text-center">
                    <h4 className="text-style-6">Day</h4>
                    <span className="inline-block py-4">icon</span>
                    <div className="flex flex-nowrap justify-between">
                        <h5 className="text-style-7">00º</h5>
                        <h5 className="text-style-7">00º</h5>
                    </div>
                </div>
                <div className="px-2.5 py-4 text-center">
                    <h4 className="text-style-6">Day</h4>
                    <span className="inline-block py-4">icon</span>
                    <div className="flex flex-nowrap justify-between">
                        <h5 className="text-style-7">00º</h5>
                        <h5 className="text-style-7">00º</h5>
                    </div>
                </div>
                <div className="px-2.5 py-4 text-center">
                    <h4 className="text-style-6">Day</h4>
                    <span className="inline-block py-4">icon</span>
                    <div className="flex flex-nowrap justify-between">
                        <h5 className="text-style-7">00º</h5>
                        <h5 className="text-style-7">00º</h5>
                    </div>
                </div>
            </div>

        </section>
    )
}
