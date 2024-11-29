function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceId="service_w2ed2i8";
    const templateId="template_7lv1uqq";
    emailjs.send(serviceId,templateId,params)
    .then((res) =>{
            document.getElementById("name").value ="";
            document.getElementById("email").value ="";
            document.getElementById("message").value ="";
            console.log(res);
            alert("your message sent sucuessfully");
           })
           .catch((err)=> console.log((err)));
}