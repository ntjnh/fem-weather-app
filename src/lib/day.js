export default function convertDay(dayCode) {
    let day = ''

    switch (dayCode) {
        case 0:
            day = 'Sun'
            break
        case 1:
            day = 'Mon'
            break
        case 2:
            day = 'Tue'
            break
        case 3:
            day = 'Wed'
            break
        case 4:
            day = 'Thu'
            break
        case 5:
            day = 'Fri'
            break
        case 6:
            day = 'Sat'
            break
    }

    return day
}

export function convertTime(hourCode) {
    let time = ''

    if (hourCode == 0) {
        time = `${hourCode + 12} AM`
    } else if (hourCode >= 1 && hourCode < 12) {
        time = `${hourCode} AM`
    } else if (hourCode >= 12 && hourCode < 24) {
        time = `${hourCode - 12} PM`
    }

    return time
}
