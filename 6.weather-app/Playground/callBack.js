const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            lag: 0
        }
        callback(data)
    }, 2000)
}

const sumFun = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2)
    }, 1500)
}


geoCode('Ahmedabad', (data) => {
    console.log('data : ' + JSON.stringify(data));
})
sumFun(1, 2, (sum) => {
    console.log("sum : " + sum);
})