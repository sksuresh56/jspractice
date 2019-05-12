//types of variables

//case sensitive , _ 0-9 a-z camelcase streetName
//string
// var name='ram';

let name ={
    first_name:"ram",last_name:"chander"
}
//number var/let
let age=25
//boolean true//false
let married=false
//object
let address={
    no:4,street:"ram nagar",currentAddress:true,city:{
        state:"tn",pincode:6010
    }
}
//array types
// indexed array
// associative array
// multi dimentonal arrays

let color=['red','green','black','white']


name.first_name="hari"
age=26
color.push('green')
color[1]="blue"
color.pop()

color.unshift('yeelow')
color.shift()

color.splice(2,2)

console.log(color)