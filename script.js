//your JS code here. If required.
// let x=document.getElementById("ip");
// let y=document.getElementById("output");
// document.getElementById("btn").addEventListener("click", ()=>{
// 	// alert(x.value);
// 	y.innerText=`Result: ${x.value}`;
// })

document.getElementById("btn").addEventListener("click", ()=>{
  new Promise(function(resolve, reject) {
    setTimeout(function() {
      let num = document.getElementById("ip").value;
      resolve(num);
    }, 2000);
  })
  .then(function(num) {
    let y = document.getElementById("output");
    y.innerText = `Result: ${num}`;
  });
});