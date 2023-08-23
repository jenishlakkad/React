// let  

let array = []
let id = 0;

let obj = {}
const saveUser = () =>{

    // ####   TextField
    let textfield = document.querySelectorAll('.text')
    textfield.forEach((x) => {
        obj[x.name] = x.value
    })

    // ####     ID
    obj['id'] = ++id

    // ####  Gender
    obj['gender'] = document.querySelector("[name=gender]:checked").value;

    // ####    Hobby
    let hobbies = []
    let hobby = document.querySelectorAll('.hobby:checked');
    hobby.forEach((x) => {
        hobbies.push(x.value)
    })
    obj['Hobbies'] = hobbies.join()
    array.push(obj)
    prints();
    console.log(hobbies);
    console.log(obj);
    document.querySelector('#form').reset();
}

const editUser = (y) =>{
    obj = array.find((x) => x.id === y);
    Object.keys(obj).map((key) =>{
        // if(key ==='gender'){
        //     document.querySelector(`[name=gender] [value=${obj[key]}]`).checked = true;
        // }
        console.log(key);
    })

}

const del = (y) =>{
    array = array.filter((x) => x.id !==y)
    prints();
    console.log(array);
    
}

let prints = () => {
    let str = ""
    array.map((x) => {
        return str += ` 
    <tr >
        <td>${x.id}</td>
        <td>${x.name}</td>
        <td>${x.lastName}</td>
        <td>${x.contactNo}</td>
        <td>${x.email}</td>
        <td>${x.Hobbies}</td>
        <td>${x.gender}</td>
        <td class="td8 delete" onclick="del(${x.id})" > <input  type="button" value="Delete" name="delete" style="background-color: red; " class="rounded" ></td>
        <td class="td9 edit" onclick="editUser(${x.id})" > <input  type="button" value="Edit" name="edit" style="background-color: rgb(58, 161, 240); " class="rounded" ></td>
    </tr>
        `
    })
    document.querySelector('#tBody').innerHTML = str;
}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   //  let arr = [];
    //     $(document).ready(function(){
    //         $("#submit").click(function(e){
    //             // let id = $('#exampleInputId').val();
    //             // let id = document.querySelector('#exampleInputId').value;
    //             // let ulClone = $('#firstTr');
    //             // let ulClone = document.querySelector('#firstTr');
    //             // let ulCloned = ulClone.cloneNode(true);

    //             // document.querySelector('.td1').value = 
    //             // e.preventDefault();
    //             // console.log(ulCloned);
    //             let obj={
    //                 id: document.querySelector("#exampleInputId").value,
    //                 name: document.querySelector("#exampleInputName").value,
    //                 lastName: document.querySelector("#exampleInputLastName").value,
    //                 phone: document.querySelector("#exampleInputPhone").value,
    //                 email: document.querySelector("#exampleInputEmail1").value,
    //                 // hobbies: document.querySelector("input[type='checkbox']:checked").value,
    //                 gender: document.querySelector("input[type='radio']:checked").value,
    //             }
    //             arr.push(obj);
    //             console.log(arr);
                
    //             // let code = document.getElementById("tBody");
    //             let str = "";
    //             arr.map((x,i)=>{
    //                 return str+= `<tr>
    //                 <td class="td1">${x.id}</td>
    //                 <td class="td2">${x.name}</td>
    //                 <td class="td3">${x.lastName}</td>
    //                 <td class="td4">${x.phone}</td>
    //                 <td class="td5">${obj.email}</td>
    //                 <td class="td6">${x.hobbies}</td>
    //                 <td class td7">${x.gender}</td>
    //                 <td class="td8 delete" onclick="del(this)" > <input  type="button" value="Delete" name="delete" style="background-color: red; " class="rounded" ></td>
    //                 <td class="td9 edit" onclick="edit(this)" > <input  type="button" value="Edit" name="edit" style="background-color: rgb(58, 161, 240); " class="rounded" ></td>
    //             </tr>`
    //             })
    //             document.querySelector('#tBody').innerHTML = str;
    //         }); 

    //     });

    //     // let deleteBtn = document.querySelectorAll('.delete');
    //     // deleteBtn.addEventListener('click',del())
    //     // console.log(deleteBtn);

    //     function del(x){
    //         console.log(x.parentElement);
    //         let dele = x.parentElement.remove();
    //     }






    // // let code = document.getElementById("tBody");
    // //             code.innerHTML+= `<tr>
    // //                     <td class="td1">${obj.id}</td>
    // //                     <td class="td2">${obj.name}</td>
    // //                     <td class="td3">${obj.lastName}</td>
    // //                     <td class="td4">${obj.phone}</td>
    // //                     <td class="td5">${obj.email}</td>
    // //                     <td class="td6">${obj.hobbies}</td>
    // //                     <td class td7">${obj.gender}</td>
    // //                     <td class="td8 delete" onclick="del(this)" > <input  type="button" value="Delete" name="delete" style="background-color: red; " class="rounded" ></td>
    // //                     <td class="td9 edit" onclick="edit(this)" > <input  type="button" value="Edit" name="edit" style="background-color: rgb(58, 161, 240); " class="rounded" ></td>
    //                 // </tr>`