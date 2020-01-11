
let rooms = {
    sizeS: {person: 2, price: 500},
    sizeM: {person: 3, price: 750},
    sizeL: {person: 4, price: 1000},
    other: 'Error, Make sure your size is correct'
}
let getPrice = (sizeRoom,numNight) => {
    if(sizeRoom === "S"){
        return rooms.sizeS.price * numNight
    }
    else if(sizeRoom === "M"){
        return rooms.sizeM.price * numNight
    }
    else if(sizeRoom === "L"){
        return rooms.sizeL.price * numNight
    }
    else{
        return rooms.other
    }
}

console.log(getPrice('S',3))
console.log(getPrice('M',3))
console.log(getPrice('L',3))
console.log(getPrice('A',3))