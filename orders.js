
function addOrder(){
let orders=dbGet('orders');
orders.push({supplier:orderSupplier.value,product:orderProduct.value,qty:+orderQty.value});
dbSet('orders',orders);
updateStock(orderProduct.value,orderQty.value);
loadOrders();
}

function updateStock(product,qty){
let products=dbGet('products');
products.forEach(p=>{if(p.name==product){p.stock-=qty;}});
dbSet('products',products);
}

function loadOrders(){
let data=dbGet('orders');
let body=document.querySelector("#ordersTable tbody");
body.innerHTML="";
data.forEach(o=>body.innerHTML+=`<tr><td>${o.supplier}</td><td>${o.product}</td><td>${o.qty}</td></tr>`);
}

window.onload=loadOrders;
