
const work_btn=document.getElementById("work")
work_btn.addEventListener("click",(event)=>{
    event.preventDefault();

workfunction()});
 

let click_work=document.getElementById("renderwork")||[]
const personal_click=document.getElementById("renderpersonal")||[]
const click_nonprofit=document.getElementById("renderNonprofit")||[]
const click_school=document.getElementById("renderschool")||[]



function workfunction(event){
    personal_click.innerHTML=null
    click_nonprofit.innerHTML=null
    click_school.innerHTML=null
    click_work.innerHTML=`
   
<form  action="">
<div> <h1>What best describes your <span>current role?<span></h1></div>
      <div>
    <div class="work_slide">
        <input type="radio" placeholder="#"  id="Business-Owner"><label>Business Owner</label>

    </div>
    <div class="work_slide">
        <input type="radio" placeholder="#" id="Team-Leader" ><lebal>Team Leader</lebal>
    </div>
    <div  class="work_slide">
        <input type="radio" placeholder="#" id="Team-Member" ><lebal>Team Member</label>
    </div>
    <div class="work_slide">
        <input type="radio" placeholder="#" id="Freelancer" ><label>Freelancer</lebal>
    </div> 
    <div class="work_slide">
    <input type="radio" placeholder="#" id="Director" ><label>Director</lebal>
</div>
<div class="work_slide">
<input type="radio" placeholder="#" id="C-Level" ><label>C-Level</lebal>
</div>
<div class="work_slide">
<input type="radio" placeholder="#" id="VP" ><label>VP</lebal>
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
<input type="radio"   id="Undergraduate"><label>Undergraduate Student</label>

</div>
<div class="work_slide">
<input type="radio" id="Graduate " ><lebal>Graduate Student</lebal>
</div>
<div  class="work_slide">
<input type="radio" id="Faculty Member" ><lebal>Faculty Member</label>
</div>
<div class="work_slide">
<input type="radio" id="Other" ><label>Other</lebal>
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
    click_work.innerHTML=null
    click_school.innerHTML=null
    personal_click.innerHTML=null
    
click_nonprofit.innerHTML=`
<form  action="">
<div>
<h1>What best describes your <span>current role?<span></h1></div>
<div>
<div class="work_slide">
<input type="radio" placeholder="#"  id="Board member"><label>Board member</label>

</div>
<div class="work_slide">
<input type="radio" placeholder="#" id="Executive" ><lebal>Executive</lebal>
</div>
<div  class="work_slide">
<input type="radio" placeholder="#" id="Employee" ><lebal>Employee</label>
</div>
<div class="work_slide">
<input type="radio" placeholder="#" id="Volunteer" ><label>Volunteer</lebal>
</div>
<div class="work_slide">
<input type="radio" placeholder="#" id="IT Staff" ><label>IT Staff</lebal>
</div>
<div class="work_slide">
<input type="radio" placeholder="#" id="other" ><label>Other</lebal>
</div>
</div>
</form>
`
}

