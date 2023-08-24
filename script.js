
let captchachecked = false;

function beforeSubmit(event)
{
    if(captchachecked){
        let outputdate = document.querySelector(".outputdate");
        let inputdate = document.querySelector(".inputdate");

        console.log('Input Date', inputdate.value);

        //Convert the date from string to date

        let formattedDate = new Date(inputdate).toLocaleDateString("en-IN");
        outputdate.value = formattedDate;
    } else{
        alert("Please check the reCaptcha box to submit the Lead");
        event.preventDefault();
    }
    
}

function timestamp() 
{ 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") 
    {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    } 
} 
setInterval(timestamp, 500);

function captchasuccess()
{
    captchachecked = true;
}