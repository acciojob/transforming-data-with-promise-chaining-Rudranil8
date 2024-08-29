//your JS code here. If required.
let x=document.getElementById("ip");
let y=document.getElementById("output");
document.getElementById("btn").addEventListener("click", ()=>{
	// alert(x.value);
	y.innerText=`Result: ${x.value}`;
})