let useryear , usermonth , userdate , currentyear , currentmonth , currentdate = 0 ;
const userDOB = document.querySelector("#inputfield")
const button = document.querySelector("#btn")
function getuserinput() {
    button.addEventListener('click' , function () {
        const input = userDOB.value ;
         useryear = parseInt(input.substring(0,4));
         usermonth = parseInt(input.substring(5,7));
         userdate = parseInt(input.substring(8));
         getcurrentdate() ;
    })
}
function getcurrentdate() {
    const date = new Date
     currentyear = date.getFullYear();
     currentmonth = date.getMonth()+1 ;
     currentdate = date.getDate();
     calculation() ;
}
function calculation() {
    console.log("hello");
    let year = currentyear - useryear ;
    let month = currentmonth - usermonth ;
    let date = currentdate - userdate ;

    if(month < 0 ){
        year-- ;
        month+=12 ;
    }
    if(date < 0){
        date += new Date(currentyear , currentmonth , 0 ).getDate() ;
        month-- ;
    }
    displaydate(year , month , date);
}
function displaydate(year , month , date) {
    document.querySelector("#result").innerHTML = `You are ${year} years ${month} month and ${date} days old`;
}
getuserinput()