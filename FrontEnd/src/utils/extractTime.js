export function extractTime(dateString){
    const date = new Date(dateString);
    let hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    let ampm = "A.M.";
    if (hours >= 12){
        hours = hours - 12;
        ampm = "P.M.";
    }
    if(hours === 0)
        {
            hours = 12;
        }
        
    return `${hours}:${minutes}:${ampm}`;
}
function padZero(number){
    return number.toString().padStart(2,"0");
}