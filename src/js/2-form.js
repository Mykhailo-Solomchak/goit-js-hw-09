const form = document.querySelector(".feedback-form");

form.addEventListener("input", onInput);
form.addEventListener("submit", onSubmit);


const formData = JSON.parse(localStorage.getItem("feedback-form-state"))|| {email:"", message:""};
form.elements.email.value = formData.email
form.elements.message.value = formData.message

function onInput(ev){
    formData[ev.target.name]=ev.target.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function onSubmit(ev){
    ev.preventDefault();
    const{email,message} = ev.target.elements;
    if (email.value.trim()===""||message.value.trim()===""){
        return alert("Fill please all fields");
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    ev.target.reset();
}