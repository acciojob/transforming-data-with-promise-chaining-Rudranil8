//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function() {
	new Promise(function(resolve, reject) {
  setTimeout(function() {
    let num = document.getElementById("ip").value;
    resolve(num);
  }, 2000);
})
	.then(function(num) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      num *= 2; // multiply the number by 2
      resolve(num);
    }, 1000);
  });
})
});