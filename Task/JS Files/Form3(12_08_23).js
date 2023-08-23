const userForm = document.querySelector('#userForm');
const userGrid = document.querySelector('#userGrid');
let counter = 0;
let arr = []

let obj ={}

function saveUser(){
    // Gender
    // obj['gender'] = document.querySelector('.gender:checked').value;
    
    // Hobbies
    let hobby = []
    const selectedHobby = document.querySelectorAll('.hobby:checked');
    selectedHobby.forEach((x) =>{
        hobby.push(x.value)
    });
    obj['hobby'] = hobby.join();

    // Text Fields
    const selectedText = document.querySelectorAll('.text');
    selectedText.forEach((x) =>{
        obj[x.name] = x.value
    })

    // ID
    counter = counter +1;
    obj['id'] = counter;

    arr.push(obj)
    obj ={};
    printUser()
    console.log(arr);
    userForm.reset()
}

// Edit
// function editUser(y){
//     obj = arr.find((x) =>x.id ==)
// }


// printUser()

function delUser1(on){
    console.log("Delete");
    // arr = arr.filter((x) => x.id !== on);
    let ind = arr.findIndex((x)=>{ return x.id === on})
    arr.splice(ind,1);
    console.log(arr);
    printUser();
}
function printUser (){
    console.log("Jenish");
    let saveUserString = ''
    arr.map((x)=>{
        saveUserString+=`
        <tr>
            <td>${x.id}</td>
            <td>${x.name}</td>
            <td>${x.email}</td>
            <td>${x.password}</td>
            <td>${x.hobby}</td>
            <td>${x.gender}</td>
            <td><input type="button" value='Delete' name="save" onclick="delUser1(${x.id})" id=""></td>
            <td><input type="button" value='Edit' name="del" onclick="saveUser(${x.id})" id=""></td>
        </tr>
        `
    })
    document.querySelector('#tBody').innerHTML = saveUserString;
}
