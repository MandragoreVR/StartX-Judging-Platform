const dateToString = (date : Date) : string => (
    date.getFullYear().toString() + "-" +
    (date.getMonth() + 1).toString() + "-" +
    date.getDate().toString() + "-" +
    date.getHours().toString() + ":" +
    date.getMinutes().toString()
)

export default dateToString;