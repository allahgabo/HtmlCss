function checkage(e) {
    var age = document.getElementById("age").value;

    var regex = /^[0-9]{3}$/;
    var yes = age.match(regex);

    if (yes == null) {
        alert("Age Not Good");
        e.preventDefault();
        return false;
    }
    else {
        alert("Good Age");

        return true;
    }


}

function checkfeedback(){
    var uname = document.getElementById("uname").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;



    var str = "please Check theses :<br>";

    var ok = true;


    //first name 
    if (uname.search(/^[a-zA-Z]{3,7}$/) != 0) {

        str = str + " يجب أن يتراوح طول الاسم الأول بين 3 و 7 أحرف <br>";
        ok = false

    }
    if (age<16 && age > 61 ) {

        str = str + " يجب أن يكون العمر بين 16 و 61 عامًا <br>";
        ok = false

    }
    if (email.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/) != 0) {

        str = str + " يجب أن يكون البريد الإلكتروني في شكل جيد<br>";
        ok = false

    }


    if (document.getElementById('male').checked==false && document.getElementById('female').checked ==false) {

        str = str + " يرجى تحديد نوع الجنس.<br>";
        ok = false

    }


    if(message.length ==0)
    {     str = str + "من فضلك أدخل رسالة.<br>";
    ok = false

        
    }







    if (ok == false) {
        var err = document.getElementById("err");
        err.innerHTML = "";
        err.innerHTML = str;
        err.style.display = "block";
alert(str);
        e.preventDefault();
        return false;
    }
    else {
        var err = document.getElementById("err");
        err.innerHTML = "";
        err.innerHTML = str;
        err.style.display = "block";
        return true;
    }
    
}


function CheckRegister(e) {
    var uname = document.getElementById("uname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var p1 = document.getElementById("pwd").value;
    var p2 = document.getElementById("pw").value;



    var str = "please Check theses :<br>";

    var ok = true;


    //first name 
    if (uname.search(/^[a-zA-Z]{3,7}$/) != 0) {

        str = str + " <br>";
        ok = false

    }
    if (lname.search(/^[a-zA-Z]{3,7}$/) != 0) {

        str = str + " يجب أن يتراوح طول الاسم الأول بين 3 و 7 أحرف<br>";
        ok = false

    }
    if (email.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/) != 0) {

        str = str + " يجب أن يكون البريد الإلكتروني في شكل جيد<br>";
        ok = false

    }
    if (tel.search(/^\d{10,10}$/)) {

        str = str + " عشرة أرقام فقط<br>";
        ok = false

    }

    if (p1 != p2) {

        str = str + " كلمات المرور غير متطابقة<br>";
        ok = false

    }
   





    if (ok == false) {
        var err = document.getElementById("err");
        err.innerHTML = "";
        err.innerHTML = str;
        err.style.display = "block";

        e.preventDefault();
        return false;
    }
    else {
        var err = document.getElementById("err");
        err.innerHTML = "";
        err.innerHTML = str;
        err.style.display = "block";
        alert("مرحبا بك");
     
        window.location.href = "/home.html";
        return true;
    }
}

var img=1;

function imgshow()
{
    setInterval('changeimg()', 5000);


}
function changeimg()
{
  var imgshow = document.getElementById("imgshow");
    imgshow.src="image\\d"+ img +".jpg";
    img=img+1;
    if(img==7)
    {
        img=1;
    }




}


function buy(){
//var_id=3
var queryString = window.location.search;

var urlParams = new URLSearchParams(queryString);




var fname = urlParams.get('var_name');
if(fname !=null)
{
    alert("لقد اضفت "+ fname +" الى السلة");

}



}
