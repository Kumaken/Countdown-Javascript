//Author : Abel Stanley
//Deskripsi program:
/* Script node js yang mengandung function coutdown yang akan menghitung mundur selama durasi tertentu
   dan akan memberikan alert kepada user ketika durasi countdown telah selesai. */

//Spesifikasi Fungsi:
/* Fungsi menerima sebuah parameter numerik(dapat berupa integer atau float) yang merepresentasikan 
   durasi countdown dalam satuan detik/seconds. */

//Dependencies:
/* file countdown.js harus didalam satu directory dengan file countdown.html */

//Helper round function to specific decimal places:
Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places)  + "e-" + places);
}

//Function Countdown:
function countdown(duration){
	//SecondsLeft melambangkan berapa banyak detik yang tersisa dalam countdown
    var secondsLeft = duration;
    //Digunakan fungsi setInterval untuk simulasi interval countdown yaitu 1000ms/1 detik.
    //Dideklarasi variable timerID agar fungsi setInterval dapat di-break jika countdown selesai.
    var timerID = setInterval
    	(
    		//Nested function:
	    	function(){
	    		//Jika durasi belum habis:
		        if (secondsLeft >= 0) {
		        	//Mengedit tampilan pada countdown.html
		            document.getElementById("Countdown").innerHTML = secondsLeft.round(2) +
		            "<span class='label'> detik ... </span>";
		        } else { 
		        	//Durasi habis:
		            document.getElementById("warning").innerHTML = "The countdown is over!";
		            alert("countdown finished"); //Diberikan alert pada browser user
		            clearInterval(timerID); // Break dari setInterval
		        }
		        //Countdown:
		        --secondsLeft;
	    	}
        ,1000);
}

//Pemanggilan fungsi ketika countdown.html di-load
countdown(10.35);
