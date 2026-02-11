
function dbGet(name){return JSON.parse(localStorage.getItem(name)||"[]");}
function dbSet(name,data){localStorage.setItem(name,JSON.stringify(data));}
