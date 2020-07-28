let heading = document.getElementById('head');
let a = 'api';
let b = 'tester';
let c = a+'/'+b;
heading.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST',`http://localhost:5000/${c}`,true);
    xhr.onload = function(){
        let users = JSON.parse(this.responseText)
        console.log(users);
        memberCreator(users);
    };
    xhr.send();
});
function memberCreator(usersObj){
    usersObj.forEach((val) => {
        let textNode = document.createTextNode(val.name+' '+val.email);
        let listElement = document.createElement('li');
        listElement.appendChild(textNode);
        let list = document.getElementById('userList');
        list.appendChild(listElement);
    }
    )};
