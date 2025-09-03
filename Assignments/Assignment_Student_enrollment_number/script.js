
function kiemtra(){

     //1.fullname
     var sName=document.getElementById("txtName").value;
     var reName=/^[A-Za-z ]{6,}$/;
     if(reName.test(sName)==false){
         alert("Invalid Fullname!");
         document.getElementById("txtName").focus();
         return false;
     }

    //2.mail
    var sMail=document.getElementById("txtMail").value;
    var reMail=/^[A-Za-z0-9\._%]{4,}[@][A-Za-z]{3,}[.][com]{3}$/;
    if(reMail.test(sMail)==false){
        alert("Invalid Email!");
        document.getElementById("txtMail").focus();
        return false;
    }

    //3.phone
    var sPhone=document.getElementById("txtPhone").value;
    var rePhone=/^[0-9]{2}[-][0-9]{3}[-][0-9]{7}$/;
    if(rePhone.test(sPhone)==false){
        alert("Invalid Phone!");
        document.getElementById("txtPhone").focus();
        return false;
    }

    var dateInput = document.getElementById("txtDate").value;
    var timeInput = document.getElementById("txtTime").value;

    if(dateInput==false){
        alert("Please select a date.");
        return false;
    }

    if(timeInput==false){
        alert("Please select a time.");
        return false;
    }

    // Thong bao
    var data = "Thanks you Mr/Ms." + sName;
    data += "\nYour reservation has been recorded by system.";
    data += "\nWe'll contact you soon at the telephone no." +sPhone;
alert(data); 
}