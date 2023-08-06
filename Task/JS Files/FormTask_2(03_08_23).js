// let counter = 0;
let userForm = document.querySelector('#userForm');
let tableGrid = document.querySelector("#tableGrid");
// let arr = []
let counter = JSON.parse(localStorage.getItem('id')) ? JSON.parse(localStorage.getItem('id')) : 0

let arr = JSON.parse(localStorage.getItem('arr')) ? JSON.parse(localStorage.getItem('arr')):[]


function saveUser(){
    let crrUser = {} //User Object



    // Hobbies
    let hobby = []
    const hobbies = document.querySelectorAll('.hobby:checked')
    hobbies.forEach((x) =>{
        hobby.push(x.value)
    })
    crrUser['hobbies'] = hobby.join()
    // console.log(hobbies);



    // Gender
    crrUser['gender'] = document.querySelector('.gender:checked').value
    // console.log(crrUser);



    // Text Field
    const textField =document.querySelectorAll('.text')
    textField.forEach((x) => {
        crrUser[x.name] = x.value
    })
    // console.log(crrUser);


    
    // Id
    counter = counter + 1
    crrUser['id'] = counter;
    arr.push(crrUser)
    // document.getElementById('userForm').reset()
    
    localStorage.setItem('arr', JSON.stringify(arr));
    localStorage.setItem('id', JSON.stringify(counter));
    
    renderGrid();
    console.log(crrUser);
    console.log(arr);
}

function editUser(y){
    const editObj = arr.find((x) => x.id === y)
}

function deleteUser(y){
    arr = arr.filter((x) => x.id !== y)
    localStorage.setItem('arr', JSON.stringify(arr))
    console.log(arr);
    renderGrid()
}

renderGrid()

function renderGrid(){
    let userArray = []
    userArray = JSON.parse(localStorage.getItem('arr'))
    console.log(userArray);
    let userGridString = ''
    console.log(arr);

    userArray.map((y) => {
        userGridString +=`
        <tr>
            <td>${y.id}</td>
            <td>${y.Name}</td>
            <td>${y.LastName}</td>
            <td>${y.Email}</td>
            <td>${y.PhoneNo}</td>
            <td>${y.hobbies}</td>
            <td>${y.gender}</td>
            <td class="td8 delete" onclick="deleteUser(${y.id})" > <input  type="button" value="Delete" name="delete" style="background-color: red; " class="rounded" ></td>
            <td class="td9 edit" onclick="edit(this)" > <input  type="button" value="Edit" name="edit" style="background-color: rgb(58, 161, 240); " class="rounded" ></td>
        </tr>
        `
    })
    document.querySelector('#tableGrid tbody').innerHTML = userGridString
}

function del(j){
    
    arr.map((z) => {
        
    })
}