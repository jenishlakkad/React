let userForm = document.querySelector('#userForm')

const arr = []
const obj = {}

let counter = 0
const saveUser = () =>{
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
    obj = {};
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
        </tr>

        `
    })
    document.querySelector('tbody').innerHTML = userGridString;
    

}
