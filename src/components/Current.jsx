export default function Current({ feelsLike, humidity, wind, precipitation }) {
    return (
        <section className="col-span-2 grid grid-cols-4 gap-6">
            <div className="p-5">
                <h4 className="mb-6 text-style-6">Feels like</h4>
                <h5 className="text-style-3">{feelsLike ? feelsLike : '00' }º</h5>
            </div>

            <div className="p-5">
                <h4 className="mb-6 text-style-6">Humidity</h4>
                <h5 className="text-style-3">{humidity ? humidity : '00'}%</h5>
            </div>

            <div className="p-5">
                <h4 className="mb-6 text-style-6">Wind</h4>
                <h5 className="text-style-3">{wind ? wind : '00'} <span>{`km/h`}</span></h5>
            </div>

            <div className="p-5">
                <h4 className="mb-6 text-style-6">Precipitation</h4>
                <h5 className="text-style-3">{precipitation ? precipitation : '0'} <span>{`mm`}</span></h5>
            </div>
        </section>
    )
}
