/* DEFAULT ADMIN AUTO CREATE */
function ensureAdmin(){
let users = JSON.parse(localStorage.getItem("users") || "[]");

if(users.length === 0){
users.push({
email:"admin@karousos.com",
pass:"1234",
role:"admin"
});
localStorage.setItem("users", JSON.stringify(users));
}
}

/* NAVIGATION */
function openModule(id){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

function back(){openModule('dashboard');}
function logout(){location.reload();}

/* LOGIN */
function login(){
let users=JSON.parse(localStorage.getItem("users")||"[]");
let found=users.find(u=>u.email==loginEmail.value && u.pass==loginPass.value);

if(found){
document.getElementById("loginPage").classList.remove("active");
openModule('dashboard');
loadAlerts();
}else{
alert("Λάθος στοιχεία");
}
}

/* PRODUCTS */
function addProduct(){
let data=JSON.parse(localStorage.getItem("products")||"[]");
data.push({name:pName.value,stock:+pStock.value,min:+pMin.value});
localStorage.setItem("products",JSON.stringify(data));
loadProducts();
}

function loadProducts(){
let data=JSON.parse(localStorage.getItem("products")||"[]");
let body=document.querySelector("#productsTable tbody");
let select=document.getElementById("orderProduct");
let select2=document.getElementById("priceProduct");

body.innerHTML="";
select.innerHTML="";
select2.innerHTML="";

data.forEach(p=>{
body.innerHTML+=`<tr><td>${p.name}</td><td>${p.stock}</td><td>${p.min}</td></tr>`;
select.innerHTML+=`<option>${p.name}</option>`;
select2.innerHTML+=`<option>${p.name}</option>`;
});
}

/* SUPPLIERS */
function addSupplier(){
let data=JSON.parse(localStorage.getItem("suppliers")||"[]");
data.push({name:sName.value,email:sEmail.value});
localStorage.setItem("suppliers",JSON.stringify(data));
loadSuppliers();
}

function loadSuppliers(){
let data=JSON.parse(localStorage.getItem("suppliers")||"[]");
let select=document.getElementById("orderSupplier");
let select2=document.getElementById("priceSupplier");

select.innerHTML="";
select2.innerHTML="";

data.forEach(s=>{
select.innerHTML+=`<option>${s.name}</option>`;
select2.innerHTML+=`<option>${s.name}</option>`;
});
}

/* USERS */
function addUser(){
let data=JSON.parse(localStorage.getItem("users")||"[]");
data.push({email:uEmail.value,pass:uPass.value,role:uRole.value});
localStorage.setItem("users",JSON.stringify(data));
loadUsers();
}

function loadUsers(){
let data=JSON.parse(localStorage.getItem("users")||"[]");
let body=document.querySelector("#usersTable tbody");
body.innerHTML="";
data.forEach(u=>body.innerHTML+=`<tr><td>${u.email}</td><td>${u.role}</td></tr>`);
}

/* ALERTS */
function loadAlerts(){
let products=JSON.parse(localStorage.getItem("products")||"[]");
let div=document.getElementById("alerts");
div.innerHTML="";
products.forEach(p=>{
if(p.stock<=p.min){
div.innerHTML+=`⚠ Low stock: ${p.name}<br>`;
}
});
}

/* INIT */
window.onload=function(){
ensureAdmin();
loadProducts();
loadSuppliers();
loadUsers();
}
