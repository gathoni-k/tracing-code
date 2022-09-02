const getToday = () => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const date: Date = new Date();
    const day = date.getDay()
    const month = months[date.getMonth()];
    const year = date.getFullYear()
    let today = `${month} ${day}, ${year}`
    return today
}
export default getToday
