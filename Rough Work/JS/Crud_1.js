let userForm = document.querySelector('#userForm')

const arr = []

let counter = 0
const saveUser = () =>{
    const obj = {}
    // Hobbies:-
    let hobbies = []
    let hobby = document.querySelectorAll('.hobbies:checked');
    hobby.forEach((x) =>{
        hobbies.push(x.value)
    })
    obj['Hobbies'] = hobbies.join();

    // Gender:-
    obj['Gender'] = document.querySelector('.gender:checked').value

    // Text:-
    let text = document.querySelectorAll('.text')
    text.forEach((x) =>{
        obj[x.name] = x.value
    })

    // ID
    counter += 1;
    obj['ID'] = counter

    arr.push(obj)
    
    userData()
    userForm.reset()
    
    console.log(obj);
    // obj = {};
}

// const del = (y) =>{

// }

function editUser(y){
    obj = arr.find((x) => x.ID === y)

    Object.keys(obj).map((key) =>{
        if (key === "Gender"){
            document.querySelector(`[name=gender] [value=${obj[key]}]`).checked = true;
        }
        else if (key === "Hobbies"){
            obj[key] = obj[key].split(',');
            obj[key].map((x) => {
                document.querySelector(`.hobby[value=${x}]`).checked = true
            })
        }
        else{
            const textField = document.querySelectorAll('.text')
            textField.forEach((x) => {
                if(x.name === key){
                    document.querySelector(`[name=${key}]`).value = obj[key];
                }
            })
        }
    })
}

function del(y){
    arr = arr.filter((x) => x.ID !== y);
    userData()
    console.log(y);
}


// userData()
const userData = () => {
    let userGridString = ''
    console.log(arr);
    arr.map((x) =>{
        userGridString += `
        <tr>
            <td>${x.ID}</td>
            <td>${x.name}</td>
            <td>${x.email}</td>
            <td>${x.password}</td>
            <td>${x.Gender}</td>
            <td>${x.Hobbies}</td>
            <td><input type="button" onclick="editUser(${x.ID})" name="edit" value="Edit" id="edit"></td>
            <td><input type="button" onclick="del(${x.ID})" name="delete" value="Delete" id="delete"></td>
        </tr>

        `
    })
    document.querySelector('tbody').innerHTML = userGridString;
    

}


