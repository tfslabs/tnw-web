export function TimestampParse(date) {
    let dateObj = new Date(date * 1000);
    return dateObj.toString();
}