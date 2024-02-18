let cl=console.log;


 const toggalnav =document.getElementById("toggalnav");


let onclick=(eve)=>{
  eve.target.classList.toggle("fa-x");
  eve.target.classList.toggle("fa-bars")
}


 toggalnav.addEventListener("click",onclick)