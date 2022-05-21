const getColor = (score : number) : string => {
    if (score < 0 || score > 5) return "gray";

    if (score === 0) return "#FF0D0D";
    else if (score < 1) return "#FF4E11";
    else if (score < 2) return "#FF8E15";
    else if (score < 3) return "#FAB733";
    else if (score < 4) return "#ACB334";
    else return "#69B34C";
}

export default getColor;