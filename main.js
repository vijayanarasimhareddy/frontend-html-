fetch("data.json")
.then((response)=>{
    return response.json();
}).then((data)=>{
    display_info(data.basics);
}) 

var bodyElement=document.querySelector("#js");
function display_info(info){
    let card=document.createElement("div");
    card.classList.add("card");
    bodyElement.append(card);

    let heading=document.createElement("h2");
    heading.textContent=info.Name;
    card.append(heading);

    let line=document.createElement("hr");
    card.append(line);

    let Role=document.createElement("h2");
    Role.textContent=info.Role;
    card.append(Role);

    let email=document.createElement("a");
    email.textContent=info.email;
    email.href="mailto:"+info.email;
    card.append(email);

    let br=document.createElement("br")
    card.append(br);



    let mobile=document.createElement("a");
    mobile.href="tel:"+info.mobile;
    mobile.textContent=info.mobile;
    card.append(mobile);

    var button=document.createElement("a");
    button.textContent="viewprofile";
    button.classList.add("btn");
    card.append(button);

}