
function sendEmail(){
let orders=dbGet('orders');
let body="Παραγγελία:\n";
orders.forEach(o=>body+=o.product+" "+o.qty+"\n");
window.location.href="mailto:?subject=Order&body="+encodeURIComponent(body);
}
