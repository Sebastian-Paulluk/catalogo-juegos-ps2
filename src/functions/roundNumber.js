export const customRound =(number)=> {
    if (Number.isInteger(number)) {
        return number; 
    } else {
        return Math.round(number * 10) / 10; 
    }
}