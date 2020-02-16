function billingFunction(){
  var shipname = document.getElementById("shippingName");
  var shipzip = document.getElementById("shippingZip");
  var billname = document.getElementById("billingName");
  var billzip = document.getElementById("billingZip");

 if ( document.getElementById("same").checked == true){
 	billname.value = shipname.value;
 	billzip.value = shipzip.value;
 } else {
 	billname.value = null;
 	billzip.value = null;
 }
}