// let counter = 0;
let userForm = document.querySelector("#userForm");
let tableGrid = document.querySelector("#tableGrid");
// let arr = []
let counter = JSON.parse(localStorage.getItem("id"))? JSON.parse(localStorage.getItem("id")): 0;

let arr = JSON.parse(localStorage.getItem("arr"))? JSON.parse(localStorage.getItem("arr")): [];

let crrUser = {}; //User Object
async function saveUser() {
  // Hobbies
  let hobby = [];
  const hobbies = document.querySelectorAll(".hobby:checked");
  hobbies.forEach((x) => {
    hobby.push(x.value);
  });
  crrUser["hobbies"] = hobby.join();
  // console.log(hobbies);

  // Gender
  crrUser["gender"] = document.querySelector(".gender:checked").value;
  // console.log(crrUser);

  // Text Field
  const textField = document.querySelectorAll(".text");
  textField.forEach((x) => {
    crrUser[x.name] = x.value;
  });
  // console.log(crrUser);

  let file = document.querySelector("#inputFileToLoad").files[0];
  crrUser["file"] = await toBase64(file);

  // Id
  if (crrUser.id) {
    const userIndex = arr.findIndex((x) => x.id == crrUser.id);
    arr.splice(userIndex, 1, crrUser);
  } else {
    counter = counter + 1;
    crrUser["id"] = counter;
    arr.push(crrUser);
  }
  console.log(arr);
  console.log(crrUser);
  
  crrUser = {};
  localStorage.setItem("arr", JSON.stringify(arr));
  localStorage.setItem("id", JSON.stringify(counter));

  renderGrid();
  document.getElementById("userForm").reset();
}

// #################   EDIT FUNCTION
function editUser(y) {
  crrUser = arr.find((x) => x.id === y);
  // console.log(crrUser , 'srgrxdv');
  // let editArr = JSON.parse(localStorage.getItem('arr'))
  const textField = document.querySelectorAll(".text");
  Object.keys(crrUser).map((key) => {
    // console.log(key);
    if (key === "gender") {
      document.querySelector(
        `[name=gender][value=${crrUser[key]}]`
      ).checked = true;
    } else if (key === "hobbies") {
      crrUser[key] = crrUser[key].split(",");
      crrUser[key].map((x) => {
        document.querySelector(`.hobby[value=${x}]`).checked = true;
      });
    } else {
      textField.forEach((x) => {
        if (x.name === key) {
          document.getElementsByName(key)[0].value = crrUser[key];
          // document.querySelector(`[name=${key}]`).value = crrUser[key]
        }
      });
    }
  });
}

// #################   DELETE FUNCTION
function deleteUser(y) {
  arr = arr.filter((x) => x.id !== y);
  localStorage.setItem("arr", JSON.stringify(arr));
  console.log(arr);
  renderGrid();
}

renderGrid();

function renderGrid() {
  // let userArray = [];
  // userArray = JSON.parse(localStorage.getItem("arr"));
  // console.log(userArray);
  let userGridString = "";
  console.log(arr);

  arr.map((y) => {
    userGridString += `
        <tr>
            <td>${y.id}</td>
            <td>${y.Name}</td>
            <td>${y.LastName}</td>
            <td>${y.Email}</td>
            <td>${y.PhoneNo}</td>
            <td>${y.hobbies}</td>
            <td>${y.gender}</td>
            <td>
              <div id="imgTest">
                <img src="${y.file}" style = "height : 60px; width : 60px" id="img" alt="">
              </div>
            </td>
            <td class="td8 delete" onclick="deleteUser(${y.id})" > <input  type="button" value="Delete" name="delete" style="background-color: red; " class="rounded" ></td>
            <td class="td9 edit" onclick="editUser(${y.id})" > <input  type="button" value="Edit" name="edit" style="background-color: rgb(58, 161, 240); " class="rounded" ></td>
        </tr>
        `;
  });
  document.querySelector("#tableGrid tbody").innerHTML = userGridString;
}

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
