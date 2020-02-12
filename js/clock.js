function show()
{ 
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var year = date.getFullYear();
var session = "AM";
if(h>12)
{
	h=h-12;
	session = "PM";
}
if(h<10)
{
	h = "0" + h;
}
if(m<10)
{
	m = "0" + m;
}
if(s<10)
{
	s = "0" + s;
}

var time = h + ":" + m + ":" + s + " " +session ;
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var day = weekday[date.getDay()];
var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var mnth = month[date.getMonth()];
var date = date.getDate();
document.getElementById("day").innerHTML = day;
document.getElementById("month").innerHTML = mnth;
document.getElementById("date").innerHTML = date;
document.getElementById("watch").innerHTML = time;
document.getElementById("year").innerHTML = year;
setTimeout(show,1000)
}

show();