export default function WeatherDetails({ data }) {
    const feelsLike = Math.round(data.current.apparent_temperature)
    const humidity = data.current.relative_humidity_2m
    const wind = Math.round(data.current.wind_speed_10m)
    const precipitation = data.current.precipitation

    return (
        <section className="weather-details">
            <div className="detail">
                <h4 className="detail-label">Feels like</h4>
                <h5 className="detail-value">{feelsLike ? feelsLike : '00' }º</h5>
            </div>

            <div className="detail">
                <h4 className="detail-label">Humidity</h4>
                <h5 className="detail-value">{humidity ? humidity : '00'}%</h5>
            </div>

            <div className="detail">
                <h4 className="detail-label">Wind</h4>
                <h5 className="detail-value">{wind ? wind : '00'} <span>{`km/h`}</span></h5>
            </div>

            <div className="detail">
                <h4 className="detail-label">Precipitation</h4>
                <h5 className="detail-value">{precipitation ? precipitation : '0'} <span>{`mm`}</span></h5>
            </div>
        </section>
    )
}
