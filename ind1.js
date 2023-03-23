
function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    // Create a SMTP crendentials that I showed u in my previous video

    // Generating random number as OTP;

    let otp_val = Math.floor(Math.random()*10000);

    let emailbody = `
        <h2>Your OTP is </h2>${otp_val}
    `;

    Email.send({
        SecureToken : "9d612245-feca-45cc-8ba3-9b7c96a36afe",
        To : email.value,
        From : "cybercrimeofficial12@gmail.com",
        Subject : "This is the from Ash_is_Coding, Please Subscribe",
        Body : emailbody
    }).then(
        //if success it returns "OK";
      message => {
        if(message === "OK"){
            alert("OTP sent to your email "+email.value);

            // now making otp input visible
            otpverify.style.display = "block";
            document.getElementById("email").style.display="none"
            document.getElementById("pswdd").style.display="none"
            document.getElementById("bott").style.display="none"
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click',()=>{
                // now check whether sent email is valid
                if(otp_inp.value == otp_val){
                    window.location.assign("./aftsign.html");
                }
                else{
                    alert("Invalid OTP");
                }
            })
        }
      }
    );

}
  

