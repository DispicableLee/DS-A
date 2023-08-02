class Device {
    constructor(id, serial, owner, relationship, isParent){
        this.id = id;
        this.serial = serial;
        this.owner = owner;
        this.relationship = relationship;
        this.isParent = isParent
    }
}
//the parent device
const car = new Device('3', '24601', 'Jon Snow', '', true)

const camera1 = new Device('01', '2245', 'Jon Snow', '3', false)
const camera2 = new Device('02', '2244', 'Jon Snow', '3', false)

const iPhone = new Device('1', '223', 'Bob', '', false)

const lock = new Device('32', '3322', 'billy', '', true)

const deviceArray = [car, camera1, camera2, iPhone, lock]

function constructDeviceRelations(a, n){
    let map = {}
    let l = null
    let helper = []
    let nArray = []
    for(const j of a){
        helper.push(j.id)
    }
    if(helper.includes(n)){
        for(let i = 0; i<a.length; i++){
            if(a[i].id === n){
                l = a[i].id
            }
            if(a[i].relationship == n){
                nArray.push(a[i].id)
            }
        }
    }else{
        return []
    }
    map[l] = nArray
    console.log(nArray)
    console.log(l)
    console.log(map)

    return map
}


console.log(constructDeviceRelations(deviceArray, "3"))