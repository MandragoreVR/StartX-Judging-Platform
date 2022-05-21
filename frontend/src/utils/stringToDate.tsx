const stringToDate = (date : string) : Date => {
    const items = date.split("-");
    const hours = items[3].split(":");
    return new Date(parseInt(items[0]),
        parseInt(items[1]),
        parseInt(items[2]),
        parseInt(hours[0]),
        parseInt(hours[1])
    )
}

export default stringToDate;