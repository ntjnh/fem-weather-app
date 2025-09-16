export default function decode(code) {
    let conditions = ``

    switch(code) {
        case 0:
            conditions = `Clear sky`
            break
        case 1:
        case 2:
        case 3:
            conditions = `Mainly clear, partly cloudy, and overcast`
            break
        case 45:
        case 48:
            conditions = `Fog and depositing rime fog`
            break
        case 51:
        case 53:
        case 55:
            conditions = `Drizzle: Light, moderate, and dense intensity`
            break
        case 56:
        case 57:
            conditions = `Freezing Drizzle: Light and dense intensity`
            break
        case 61:
        case 63:
        case 65:
            conditions = `Rain: Slight, moderate and heavy intensity`
            break
        case 66:
        case 67:
            conditions = `Freezing Rain: Light and heavy intensity`
            break
        case 71:
        case 73:
        case 75:
            conditions = `Snow fall: Slight, moderate, and heavy intensity`
            break
        case 77:
            conditions = `Snow grains`
            break
        case 80:
        case 81:
        case 82:
            conditions = `Rain showers: Slight, moderate, and violent`
            break
        case 85:
        case 86:
            conditions = `Snow showers slight and heavy`
            break
        case 95:
            conditions = `Thunderstorm: Slight or moderate`
            break
        case 96:
        case 99:
            conditions = `Thunderstorm with slight and heavy hail`
            break
    }

    return conditions
}
