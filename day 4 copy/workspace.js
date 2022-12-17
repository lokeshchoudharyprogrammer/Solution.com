
const work_btn=document.getElementById("work")

work_btn.addEventListener("click",(event)=>{
    event.preventDefault();

workfunction()});
 

let click_work=document.getElementById("renderwork")||[]
const personal_click=document.getElementById("renderpersonal")||[]
const click_nonprofit=document.getElementById("renderNonprofit")||[]
const click_school=document.getElementById("renderschool")||[]



function workfunction(event){
 work_btn.style.backgroundColor="blue"
 personal_btn.style.backgroundColor=null;

 nonprofit_btn.style.backgroundColor=null;
School_btn.style.backgroundColor=null;

    personal_click.innerHTML=null
    click_nonprofit.innerHTML=null
    click_school.innerHTML=null
    
  document.getElementById("work").style.backgroundcolor = "blue";
    click_work.innerHTML=`
   
<form  action="">
<div> <h1>What best describes your <span>current role?<span></h1></div>
      <div>
    <div class="work_slide">
      <div  id="Business-Owner" Onclick="Business()"><input type="radio" placeholder="#" ></div><label>Business Owner</label>

    </div>
    <div class="work_slide">
    <div   id="Team-Leader"> <input type="radio" placeholder="#" ></div><lebal>Team Leader</lebal>
    </div>
    <div  class="work_slide">
    <div  id="Team-Member"><input type="radio" placeholder="#"  ></div><lebal>Team Member</label>
    </div>
    <div class="work_slide">
    <div  id="Freelancer"> <input type="radio" placeholder="#"  ></div><label>Freelancer</lebal>
    </div> 
    <div class="work_slide">
    <div  id="Director" ><input type="radio" placeholder="#" ></div><label>Director</lebal>
</div>
<div class="work_slide">
<div  id="C-Level"><input type="radio" placeholder="#"  ></div><label>C-Level</lebal>
</div>
<div class="work_slide">
<div id="VP"><input type="radio" placeholder="#"  ></div><label>VP</lebal>
</div>
    </div>
    </form>
`
}
// workfunction()

const personal_btn=document.getElementById("personal");
personal_btn.addEventListener("click",(event)=>{
    event.preventDefault();
personalfunction();})


function personalfunction(){
    personal_btn.style.backgroundColor="blue"

    nonprofit_btn.style.backgroundColor=null;
   School_btn.style.backgroundColor=null;
    work_btn.style.backgroundColor=null;
   

    click_nonprofit.innerHTML=null
    click_school.innerHTML=null
    click_work.innerHTML=null
    personal_click.innerHTML=`<div>  </div>`
}
const School_btn=document.getElementById("School");
School_btn.addEventListener("click",(event)=>{
    event.preventDefault();
Schoolfunction()});



function Schoolfunction(event){
    School_btn.style.backgroundColor="blue"

    nonprofit_btn.style.backgroundColor=null;
   personal_btn.style.backgroundColor=null;
    work_btn.style.backgroundColor=null;
   
    click_work.innerHTML=null
    click_nonprofit.innerHTML=null
    click_school.innerHTML=null
    personal_click.innerHTML=null
click_school.innerHTML=`
<form  action="">
<div>
<h1>What best describes your <span>current role?<span></h1></div>
<div>
<div class="work_slide">
<div id="Undergraduate"><input type="radio"></div><label>Undergraduate Student</label>

</div>
<div class="work_slide">
<div id="Graduate "><input type="radio"  ></div><lebal>Graduate Student</lebal>
</div>
<div  class="work_slide">
<div id="Faculty Member"><input type="radio"  ></div><lebal>Faculty Member</label>
</div>
<div class="work_slide">
<div id="Other"><input type="radio"  ></div><label>Other</lebal>
</div>
</div>
</form>
`
}
// Schoolfunction();

const nonprofit_btn=document.getElementById("Nonprofit");
nonprofit_btn.addEventListener("click",(event)=>{
    event.preventDefault();
nonprofitfunction()});



function nonprofitfunction(event){

    nonprofit_btn.style.backgroundColor="blue"

    School_btn.style.backgroundColor=null;
   personal_btn.style.backgroundColor=null;
    work_btn.style.backgroundColor=null;

    click_work.innerHTML=null
    click_school.innerHTML=null
    personal_click.innerHTML=null
    
click_nonprofit.innerHTML=`
<form  action="">
<div>
<h1>What best describes your <span>current role?<span></h1></div>
<div>
<div class="work_slide">
<div id="Board member"><input type="radio" placeholder="#"  ><label>Board member</label>

</div>
<div class="work_slide">
<div id="Executive"><input type="radio" placeholder="#" ></div><lebal>Executive</lebal>
</div>
<div  class="work_slide">
<div id="Employee"><input type="radio" placeholder="#" ></div><lebal>Employee</label>
</div>
<div class="work_slide">
<div id="Volunteer"><input type="radio" placeholder="#"  ></div><label>Volunteer</lebal>
</div>
<div class="work_slide">
<div id="IT Staff"><input type="radio" placeholder="#"  ></div><label>IT Staff</lebal>
</div>
<div class="work_slide">
<div  id="other"><input type="radio" placeholder="#" ></div><label>Other</lebal>
</div>
</div>
</form>
`
}
