const intervals = [[7,10],[2,4]]
const second = [[0,30], [5,15], [7,20]]
const third = [[8,11],[17,20],[17,20]]

function canAttendMeetings(i){
    i.sort((a, b) => a[0] - b[0])
    for(let j = 0, k = j+1; j<i.length, k<i.length; j++, k++){
        if(i[k][0]> i[j][0] && i[k][0]<i[j][1] || i[j][0] === i[k][0]) return false
    }
    return true
}

console.log(canAttendMeetings(third))