const areDateEqual = (date1: string, date2: string) : boolean => {
    const firstDate = date1.split("-");
    const secondDate = date2.split("-");
    return (
        firstDate[0] === secondDate[0] &&
        firstDate[1] === secondDate[1] &&
        firstDate[2] === secondDate[2]
    )
}

export default areDateEqual;

