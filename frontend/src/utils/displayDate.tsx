const displayDate = (date : string, hourOnly: boolean) : string => {
    // date must be of format "YYYY-MM-DD-HH:MM"
    const items = date.split("-");
    if (hourOnly) return items[3]
    else return `${items[1]}/${items[2]}/${items[0]} at ${items[3]}`
}

export default displayDate;