
function openModule(id){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

function back(){openModule('dashboard');}
function logout(){location.reload();}

function login(){
let users=dbGet('users');
let found=users.find(u=>u.email==loginEmail.value && u.pass==loginPass.value);
if(found){openModule('dashboard');loadAlerts();}
else alert("Wrong login");
}

/* PRODUCTS */
function addProduct(){
let data=dbGet('products');
data.push({name:pName.value,stock:+pStock.value,min:+pMin.value});
dbSet('products',data);loadProducts();
}

function loadProducts(){
let data=dbGet('products');
let body=document.querySelector("#productsTable tbody");
body.innerHTML="";
data.forEach(p=>{
body.innerHTML+=`<tr><td>${p.name}</td><td>${p.stock}</td><td>${p.min}</td><td></td></tr>`;
});
}

/* SUPPLIERS */
function addSupplier(){
let data=dbGet('suppliers');
data.push({name:sName.value,email:sEmail.value});
dbSet('suppliers',data);loadSuppliers();
}

function loadSuppliers(){
let data=dbGet('suppliers');
let select=document.getElementById("orderSupplier");
let select2=document.getElementById("priceSupplier");
select.innerHTML="";select2.innerHTML="";
data.forEach(s=>{
select.innerHTML+=`<option>${s.name}</option>`;
select2.innerHTML+=`<option>${s.name}</option>`;
});
}

/* PRICES */
function addPrice(){
let data=dbGet('prices');
data.push({supplier:priceSupplier.value,product:priceProduct.value,price:priceValue.value});
dbSet('prices',data);loadPrices();
}

function loadPrices(){
let data=dbGet('prices');
let body=document.querySelector("#pricesTable tbody");
body.innerHTML="";
data.forEach(p=>{
body.innerHTML+=`<tr><td>${p.supplier}</td><td>${p.product}</td><td>${p.price}</td></tr>`;
});
}

/* USERS */
function addUser(){
let data=dbGet('users');
data.push({email:uEmail.value,pass:uPass.value,role:uRole.value});
dbSet('users',data);loadUsers();
}

function loadUsers(){
let data=dbGet('users');
let body=document.querySelector("#usersTable tbody");
body.innerHTML="";
data.forEach(u=>body.innerHTML+=`<tr><td>${u.email}</td><td>${u.role}</td></tr>`);
}

/* ALERTS */
function loadAlerts(){
let products=dbGet('products');
let div=document.getElementById("alerts");
div.innerHTML="";
products.forEach(p=>{
if(p.stock<=p.min){div.innerHTML+=`⚠ Low stock: ${p.name}<br>`;}
});
}

window.onload=function(){
loadProducts();loadSuppliers();loadPrices();loadUsers();
}
