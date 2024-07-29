// var countDownDate1 = new Date("May 18, 2025 10:00:00").getTime();
// var countDownDate2 = new Date("May 18, 2025 10:00:00").getTime();
// var countDownDate3 = new Date("May 19, 2025 13:00:00").getTime();
// var countDownDate4 = new Date("May 19, 2025 10:00:00").getTime();
// var countDownDate5 = new Date("May 18, 2025 13:00:00").getTime();

// var x = setInterval(function() {

//   var now = new Date().getTime();

//   var distance1 = countDownDate1 - now;
//   var distance2 = countDownDate2 - now;
//   var distance3 = countDownDate3 - now;
//   var distance4 = countDownDate4 - now;
//   var distance5 = countDownDate5 - now;

//   var days_a = Math.floor(distance1 / (1000 * 60 * 60 * 24));
//   var hours_a = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes_a = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds_a = Math.floor((distance1 % (1000 * 60)) / 1000);

//   var days_b = Math.floor(distance2 / (1000 * 60 * 60 * 24));
//   var hours_b = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes_b = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds_b = Math.floor((distance2 % (1000 * 60)) / 1000);

//   var days_c = Math.floor(distance3 / (1000 * 60 * 60 * 24));
//   var hours_c = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes_c = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds_c = Math.floor((distance3 % (1000 * 60)) / 1000);

//   var days_d = Math.floor(distance4 / (1000 * 60 * 60 * 24));
//   var hours_d = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes_d = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds_d = Math.floor((distance4 % (1000 * 60)) / 1000);

//   var days_e = Math.floor(distance5 / (1000 * 60 * 60 * 24));
//   var hours_e = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes_e = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds_e = Math.floor((distance5 % (1000 * 60)) / 1000);

//   days_a = days_a < 10 ? "0" + days_a : days_a;
//   hours_a = hours_a < 10 ? "0" + hours_a : hours_a;
//   minutes_a = minutes_a < 10 ? "0" + minutes_a : minutes_a;
//   seconds_a = seconds_a < 10 ? "0" + seconds_a : seconds_a;

//   days_b = days_b < 10 ? "0" + days_b : days_b;
//   hours_b = hours_b < 10 ? "0" + hours_b : hours_b;
//   minutes_b = minutes_b < 10 ? "0" + minutes_b : minutes_b;
//   seconds_b = seconds_b < 10 ? "0" + seconds_b : seconds_b;

//   days_c = days_c < 10 ? "0" + days_c : days_c;
//   hours_c = hours_c < 10 ? "0" + hours_c : hours_c;
//   minutes_c = minutes_c < 10 ? "0" + minutes_c : minutes_c;
//   seconds_c = seconds_c < 10 ? "0" + seconds_c : seconds_c;

//   days_d = days_d < 10 ? "0" + days_d : days_d;
//   hours_d = hours_d < 10 ? "0" + hours_d : hours_d;
//   minutes_d = minutes_d < 10 ? "0" + minutes_d : minutes_d;
//   seconds_d = seconds_d < 10 ? "0" + seconds_d : seconds_d;

//   days_e = days_e < 10 ? "0" + days_e : days_e;
//   hours_e = hours_e < 10 ? "0" + hours_e : hours_e;
//   minutes_e = minutes_e < 10 ? "0" + minutes_e : minutes_e;
//   seconds_e = seconds_e < 10 ? "0" + seconds_e : seconds_e;

//   document.getElementById("demo1").innerHTML = days_a + " : " + hours_a + " : "
//   + minutes_a + " : " + seconds_a;
//   document.getElementById("demo2").innerHTML = days_b + " : " + hours_b + " : "
//   + minutes_b + " : " + seconds_b;
//   document.getElementById("demo3").innerHTML = days_c + " : " + hours_c + " : "
//   + minutes_c + " : " + seconds_c;
//   document.getElementById("demo4").innerHTML = days_d + " : " + hours_d + " : "
//   + minutes_d + " : " + seconds_d;
//   document.getElementById("demo5").innerHTML = days_e + " : " + hours_e + " : "
//   + minutes_e + " : " + seconds_e;

//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo1").innerHTML = "EXPIRED";
//     document.getElementById("demo2").innerHTML = "EXPIRED";
//     document.getElementById("demo3").innerHTML = "EXPIRED";
//     document.getElementById("demo4").innerHTML = "EXPIRED";
//     document.getElementById("demo5").innerHTML = "EXPIRED";
//   }
// }, 1000);
