let obj = {
    date: new Date(),
    val: 'hello'
}

console.log(obj.date)


for(const [key, value] of Object.entries(obj)) {
    console.log(key, value)
}