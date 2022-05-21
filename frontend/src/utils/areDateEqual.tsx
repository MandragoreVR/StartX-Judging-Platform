const areDateEqual = (date1: string, date2: string) : boolean => {
    console.log("Testing " + date1 + " and " + date2);
    const firstDate = date1.split("-");
    const secondDate = date2.split("-");
    console.log(firstDate, secondDate);
    return (
        firstDate[0] === secondDate[0] &&
        firstDate[1] === secondDate[1] &&
        firstDate[2] === secondDate[2]
    )
}

export default areDateEqual;

