module.exports.items = ['item1', 'item2']

const person = {
    name : "bob",
}
const obj = {
    objName : "table"
}

module.exports.singlePerson = person 
module.exports.objExport = obj

//module.exports = {obj, person} // here you cant do {obj, person, items} or {obj, person, {items}} since items is not an object