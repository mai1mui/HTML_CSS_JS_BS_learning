function check(){
    var sPwd=document.getElementById("pwd").value;
    var sName=document.getElementById("txtName").value;
    if(sName!="aptech" ||sPwd!="123"){
        alert("Invalid login name or password!");
        document.getElementById("txtName").focus();
        return false;
    }
}

function kiemtra(){

    //1.username
    var sUser=document.getElementById("txtUser").value;
    var reUser=/^[A-Za-z0-9]{3,}$/;
    if(reUser.test(sUser)==false){
        alert("Invalid Name!");
        document.getElementById("txtUser").focus();
        return false;
    }

    //2.mail
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
    if(sPwd==sUser){
        alert("Password cannot be the same as username!");
        return false;
    }

    // Tổng hợp thông tin
    var data = "Registed Infomation";
        data += "\n-------------------";
        data += "\nName: " + sUser;
        data += "\nMail: " + sMail;
    alert(data); 
}