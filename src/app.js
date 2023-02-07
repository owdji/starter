import { User } from "./User";

console.log(User)

const ageOrName = 'name';
// const age = document.querySelector('#age').addEventListener('click', () =>{})
// const name = document.querySelector('#name')

async function getusers() {
    const res = await fetch('https://randomuser.me/api/?results=20')
    const userArray = await res.json()

    const cleanArray = [];
    userArray.results.forEach(e => {
        cleanArray.push({
            name:{
                title: e.name.title,
                first: e.name.first,
                last: e.name.last
            },
            location:{
                city: e.location.city
            },
            dob:{
                age: e.dob.age
            },
            email : e.email,
            picture:{
                large: e.picture.large
            }
        })
    })
    
    ordreAge(cleanArray)

    cleanArray.forEach(e => {
        const user = new User(e)
        user.createHtml()
        user.render()
        // user.setOnline()
    })

    console.log(cleanArray)
}
getusers()

function ordreAlphabetique(array) {
    array.sort((a,b) => {
        if(a.name.last > b.name.last) return -1; 
        else return 1;
    })

    return array
}

function ordreAge(array){
    array.sort((a,b) => {
        if(a.dob.age > b.dob.age) return -1;
        else return 1;
    })

    return array
}

