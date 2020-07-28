//function to change state of hamburger menu
let hamburgerMenu = document.getElementById('hamburgerMenu');
var menuClick = 0;
hamburgerMenu.addEventListener('click', function(){
    if (menuClick === 0) {
        hamburgerMenu.classList.add('open');
        menuClick = 1;
    }else{
        hamburgerMenu.classList.remove('open');
        menuClick = 0;
    }
});
//Function to change the show hide state of password input field
let showState = document.querySelector('.showState');
showState.addEventListener('click',function(){
let passwordInput = document.querySelector('#passwordInput');
    if(showState.innerHTML === 'Hide'){
        showState.innerHTML = 'Show';
        passwordInput.setAttribute('type','password');
    }else{
        showState.innerHTML = 'Hide';
        passwordInput.setAttribute('type','text');
    }
});
//function to preview the image selected by user to upload as profile picture
let userImage = document.querySelector('#userImage');
userImage.addEventListener('change',previewImage);
    function previewImage(event){
        var reader = new FileReader();
        let previewUserImage = document.querySelector('#previewUserImage');
        let mainPreview = document.querySelector('#mainPreview');
        let PPSCancelButton = document.querySelector('#PPSCancelButton');
        let PPSSubmitButton = document.querySelector('#PPSSubmitButton');
        let imageFormDiv = document.querySelector('#imageFormDiv');
        reader.onload = function(){
            if (reader.readyState == 2) {
                previewUserImage.src = reader.result;
                PPSCancelButton.addEventListener('click',function(){
                    previewUserImage.src = "./usericon.png";
                    mainPreview.src = './usericon.png';
                    imageFormDiv.style.display = 'none';
                });
                PPSSubmitButton.addEventListener('click',function(ev){
                    ev.preventDefault();
                    mainPreview.src = previewUserImage.src;
                    imageFormDiv.style.display = 'none';
                });
            }
        }
        reader.readAsDataURL(event.target.files[0]);

    }
    PPSCancelButton.addEventListener('click',function(){
        imageFormDiv.style.display = 'none';
    });
    let mainPreview = document.querySelector('#mainPreview');
    mainPreview.addEventListener('click',function(){
        imageFormDiv.style.display = 'block';
    });
    var signUpForm = document.querySelector('#signUpForm');
    signUpForm.addEventListener('submit',function(ev){
        ev.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('passwordInput').value;
    let genderRadios = document.getElementsByName('genderRadio');
    for(let i=0;i<genderRadios.length;i++){
        if(genderRadios[i].checked){
            var gender = genderRadios[i].value;
        }
    }
    let DOBDay = document.getElementById('DOBDay').value;
    let DOBMonth = document.getElementById('DOBMonth').value;
    let DOBYear = document.getElementById('DOBYear').value;
    let profilePic = document.getElementById('userImage');
    const xhr = new XMLHttpRequest();
    const formdata = new FormData();
    formdata.append('firstName',firstName);
    formdata.append('lastName',lastName);
    formdata.append('email',email);
    formdata.append('password',password);
    formdata.append('gender',gender);
    formdata.append('DOBDay',DOBDay);
    formdata.append('DOBMonth',DOBMonth);
    formdata.append('DOBYear',DOBYear);
    if(profilePic.files[0]){
        formdata.append('profilePic',profilePic.files[0]);
    }
    xhr.open('POST','signup.php',true);
    xhr.onload = function(){
    console.log(this.responseText);
}
xhr.send(formdata);
signUpForm.reset();
});















