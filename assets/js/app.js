let cl=console.log;


 const toggalnav =document.getElementById("toggalnav");


let onclick=(eve)=>{
  eve.target.classList.toggle("fa-x");
  eve.target.classList.toggle("fa-bars")
}


 toggalnav.addEventListener("click",onclick)




//  <div class="row" >
//                   <div class="col-3"><i class="fa-regular fa-clock"></i> <span>time</span></div>
//                   <div class="col-3"><i class="fa-brands fa-superpowers mx-1"></i> <span>SUPER EASY</span></div>
//                   <div class="col-3"> <i class="fa-solid fa-server mx-1"><span>SERVES 1</span></div>
//                   <div class="col-3"><i class="fa-solid fa-wine-glass mx-1"><span>DRINKS</span></div>
                  
//                  </div>