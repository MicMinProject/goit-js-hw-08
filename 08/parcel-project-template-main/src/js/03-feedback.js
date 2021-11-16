import { throttle } from "lodash";

const form=document.querySelector('form');
const input=document.querySelector('input[type="email"]')
const textarea=document.querySelector('textarea[name="message"]')
const button=document.querySelector('button');
const LOCALSTORAGE_KEY="feedback-form-state";
let email; let message;
const data={
  email,
  message
}
const onEnter=e=>{
  e.preventDefault();
  
  data.email=input.value;
  data.message=textarea.value;
  localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(data))
}

if(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))!==null){
  input.value=JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email;
  textarea.value=JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message;
  }

form.addEventListener('input',throttle(onEnter, 600));
button.addEventListener('click',e=>{
 if(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))!==null){
   e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.clear();
  alert(`Message to: "${input.value}" sent, well done!`);
  form.reset();
}else{alert("Insert data, please")}})

