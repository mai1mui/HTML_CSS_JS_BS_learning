
function check(){
    var sPwd=document.getElementById("pwd").value;
    var sName=document.getElementById("txtName").value;
    if(sName!="aptech" || sPwd!="123"){
        alert("Invalid login name or password!");
        document.getElementById("txtName").focus();
        return false;
    }
}

function kiemtra(){
    //login name
    var sName=document.getElementById("txtName").value;
    var reName=/^[A-Za-z]{3,}$/;
    if(reName.test(sName)==false){
        alert("Invalid Login name!");
        document.getElementById("txtName").focus();
        return false;
    }
    var sMail=document.getElementById("txtMail").value;
    var reMail=/^[A-Za-z0-9\._%]{2,}[@][A-Za-z]{2,}[.][A-Za-z]{2,}([.][A-Za-z]{2,})?$/;
    if(reMail.test(sMail)==false){
        alert("Invalid Email!");
        document.getElementById("txtMail").focus();
        return false;
    }
    //password
    //pwd không để trống
    var sPwd=document.getElementById("pwd").value;
    if((sPwd.length==0)){
        alert("Password field can't left blank!");
        document.getElementById("pwd").focus();
        return false;
    }

    //qui tắc đặt mật khẩu
    var sPwd=document.getElementById("pwd").value;
    var rePwd=/^[A-Za-z0-9@#$%&]{8,}$/;
    if(rePwd.test(sPwd)==false){
        alert("Password must be at least 8 characters including letters, numbers, special characters (@,#,$,%,&)");
        document.getElementById("pwd").focus();
        return false;
    }

    //rpwd không để trống
    var sRpwd=document.getElementById("rpwd").value;
    if(sRpwd.length==0){
        alert("Confirmed password field can't left blank!");
        document.getElementById("rpwd").focus();
        return false;
    }

    //pwd phải trùng rpwd
    if(sPwd!=sRpwd){
        alert("Passwords do not match!");
        return false;
    }

    //pwd không trùng user
    if(sPwd==sName){
        alert("Password cannot be the same as name!");
        return false;
    }

    // Tổng hợp thông tin
    var data = "Infomation";
        data += "\n-------------------";
        data += "\nLogin name: " + sName;
        data += "\nEmail: " + sMail;
    alert(data); 
    //change label submit từ Register thành Done nếu function kiemtra() trả kết quả TRUE
    document.querySelector("button[type='submit']").innerHTML="Done";
}

    //change label từ Done thành Register khi lick vào button Reset
function resetLabel () {
    document.querySelector("button[type='submit']").innerHTML="Register";
}

function resetPwd () {
    //mail
    var sMail=document.getElementById("txtMail").value;
    var reMail=/^[A-Za-z0-9\._%]{2,}[@][A-Za-z]{2,}[.][A-Za-z]{2,}([.][A-Za-z]{2,})?$/;
    if(reMail.test(sMail)==false){
        alert("Invalid Email!");
        document.getElementById("txtMail").focus();
        return false;
    }
    //new password
    //new pwd không để trống
    var snPwd=document.getElementById("pwd").value;
    if((snPwd.length==0)){
        alert("Password field can't left blank!");
        document.getElementById("pwd").focus();
        return false;
    }

    //qui tắc đặt mật khẩu
    var snPwd=document.getElementById("pwd").value;
    var renPwd=/^[A-Za-z0-9@#$%&]{3,}$/;
    if(renPwd.test(snPwd)==false){
        alert("Password must be at least 8 characters including letters, numbers, special characters (@,#,$,%,&)");
        document.getElementById("pwd").focus();
        return false;
    }

    //new rpwd không để trống
    var snRpwd=document.getElementById("rpwd").value;
    if(snRpwd.length==0){
        alert("Confirmed password field can't left blank!");
        document.getElementById("rpwd").focus();
        return false;
    }

    //new pwd phải trùng new rpwd
    if(snPwd!=snRpwd){
        alert("Passwords do not match!");
        return false;}

    //new pwd không trùng old pwd
    if(snPwd=="123"){
        alert("The new password cannot be the same as the old password!");
        return false;
    }

    // Thông báo      
    alert("Password has been changed successfully!"); 
}

