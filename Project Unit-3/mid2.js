let small_nav_tag_data=[
    {img:"https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/board_icon.svg",
   name:"Boards",information:"Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments."},
   {img:"https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/views_icon.svg",
    name:"views",information:"Visualize and plan your work more efficiently with multiple views: Kanban board, calendar, timeline, Gantt chart, and more."},
    {img:"https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/dashboard_icon.svg",
       name:"Dashboards",information:"Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards."},
       {img:"https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/integrations_icon.svg",
   name:"Integrations",information:"Connect monday.com with all your favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more."},
   {img:"https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/automations_icon.svg ",
name:"Automations",information:"Streamline processes to focus on the work that matters. Choose from a variety of automation recipes or create your own in minutes."},
{img:"https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/apps_icon.svg",
name:"Apps",information:"Expand the capabilities of your Work OS with monday apps. Enhance your workflows with custom views, widgets, integrations, and more."},
{img:"https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/docs_icon.svg",
name:"Docs",information:"Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc."}

]

// five image and all data related thad are present in this array
  let five_imageAlldata=[
   {id:1,img:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/Mobile/Work_management1.png",
   headImg:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/medium_size/wm_text.png",caption:"For professionals and teams managing tasks & workflows",paragraph:"Manage tasks and workflows to fuel team collaboration and productivity at scale.",useCase:["Task management","Project management","Automated workflows ","Build your own"
       ]
},{id:2,img:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/Mobile/Marketer1.png",headImg:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/medium_size/marketer_text.png",caption:"For marketing and creative professionals and teams",paragraph:"Manage and collaborate on marketing and creative projects to launch campaigns.",
useCase:["Content calendar","Campaign tracking","Digital asset management","Marketing projects"]},
{id:3,img:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/Mobile/Sales_CRM1.png",headImg:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/medium_size/crm_text.png",caption:"For sales professionals and customer-facing teams",paragraph:"Track and manage all aspects of your sales cycle, customer data, and more in one place.",
useCase:["Contact management","Sales pipeline","Post-sales management","Lead management"]},
{id:4,img:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/Mobile/Project1.png",headImg:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/Mobile/Project1.png",
caption:"For PMO teams and project manager professionals",paragraph:"Plan, collaborate, and execute on every project and portfolio to reach your goals, faster.",
useCase:["Advanced projects","Critical path","Portfolio management","Program management"]},
{id:5,img:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/Mobile/Dev1.png",headImg:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/medium_size/dev_text.png",caption:"For product and development professionals and teams",
paragraph:"Build agile workflows to drive impact across your product, design, and R&D teams.",useCase:["Roadmap planning","Scrum & Kanban","Bug tracking","Sprint dashboards"]}
  ]


  let arry_of_slideshow=[
   {img:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/oscar_image.png",
name:"OSCAR",heading:"Solution.com Work OS save us Time about 1850 hours staff time somewherea round $50000 a month.",para:"Stefana muller | Senior Director CTO program Office"},
{img:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/the_student_hotel_image.png",
name:"The Student Hotel",heading:"Now that we Solution.com Work OS as the backbone of our organization I feel tha I have an overview I can trust",para:"Charlie Macegrger | Co founder & CEO"},
{img:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/zippo_image.png",
name:"OSCAR",heading:"Solution.com Work OS save us Time about 1850 hours staff time somewherea round $50000 a month.",para:"Stefana muller | Senior Director CTO program Office"},
{img:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/nissan_image.png",
name:"The Student Hotel",heading:"Now that we Solution.com Work OS as the backbone of our organization I feel tha I have an overview I can trust",para:"Charlie Macegrger | Co founder & CEO"}
  ]

let small_nav_tag=document.querySelector("#small-nav-tag")
let eachTagdiv=document.querySelector("#eachTagDiv")
let eachTagData=JSON.parse(localStorage.getItem("eachtagItem"))
let allfiveImg=document.querySelector("#allfiveImg")
let dataOfall_five_Img=document.querySelector("#dataOfall_five_Img")





   function display_Small_nav( data){
       small_nav_tag.innerText=""
      data.forEach((e)=>{
           let div=document.createElement("div")
           div.addEventListener("click",function(){
               localStorage.setItem("eachtagItem",JSON.stringify(e))
               eachTagShow()
           })
           let image=document.createElement("img")
           image.src=e.img
           let name=document.createElement("p")
           name.innerText=e.name
           div.append(image,name)
           small_nav_tag.append(div)
       })
   }
   display_Small_nav( small_nav_tag_data)

 let temporary
   //  eachTag shows behind video 
          function eachTagShow(){
           eachTagdiv.innerHTML=null
           let temporaruData= {img:"https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/board_icon.svg",
           name:"Boards",information:"Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments."}
           let eachTagData=JSON.parse(localStorage.getItem("eachtagItem"))||temporaruData
               let img=document.createElement("img")
               img.src=eachTagData.img
               img.style.width="25px";
               // name.style.color=""
               let name=document.createElement("sup")
               name.style.fontSize="30px"
               name.style.margin="8px"
               name.innerText=eachTagData.name
               let info=document.createElement("p")
               info.style.fontSize="20px"
               info.innerText=eachTagData.information
               eachTagdiv.append(img,name,info)
        
         
          }
          eachTagShow()
          window.addEventListener("load", (event) => {
           localStorage.setItem("eachtagItem",JSON.stringify(null))
         });
     

         function showFiveImg(data){
              data.forEach((e)=>{
               let div=document.createElement("div")
               div.setAttribute("class","each_Div_Of_fiveImg")
             
               div.addEventListener("click",function(){
                   localStorage.setItem("Imagedata",JSON.stringify(e))
                   showDataOfFiveimg()
                 
               })
              
               let img=document.createElement("img")
               img.src=e.img
               img.style.width="80%"
               img.style.margin="10%"
               
               img.addEventListener("click",function(){
                   localStorage.setItem("Imagedata",JSON.stringify(e))
                   showDataOfFiveimg()
     
               })
               div.append(img)
               allfiveImg.append(div)
              })
             
         }
         showFiveImg(five_imageAlldata)
                

      
         function showDataOfFiveimg(){
           dataOfall_five_Img.innerText=null
           let defaultData= {id:1,img:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/Mobile/Work_management1.png",
           headImg:"https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/medium_size/wm_text.png",caption:"For professionals and teams managing tasks & workflows",paragraph:"Manage tasks and workflows to fuel team collaboration and productivity at scale.",useCase:["Task management","Project management","Automated workflows ","Build your own"
               ]
              }
          
              let Data=JSON.parse (localStorage.getItem("Imagedata"))||defaultData
             
               let img=document.createElement("img")
               img.src=Data.headImg
               if(Data.id==5){
                   img.style.width="45%"
               }else{
                   img.style.width="70%"
               }
              

               let caption=document.createElement("p")
               caption.innerText=Data.caption
               caption.style.color="grey"
               let paragraph=document.createElement("p")
               paragraph.innerText=Data.paragraph
               paragraph.style.color="grey"
               paragraph.style.fontSize="150%"
               let horizontal=document.createElement("hr")
               if(Data.id==1){
                   horizontal.style.border="3px solid blue"
               }else if(Data.id==2){
                   horizontal.style.border="3px solid pink"
               }else if(Data.id==3){
                   horizontal.style.border="3px solid	rgb(0, 255, 255)"
               }else if(Data.id==4){
                   horizontal.style.border="3px solid	orange"
               }else{
                   horizontal.style.border="3px solid	green"
               }
              
               let usecase=document.createElement("p")
               usecase.innerText="UseCase :"
              
                let ul=document.createElement("ul")
                for(let i=0;i<Data.useCase.length;i++){
                   let usecaseData=document.createElement("li")
                   usecaseData.innerText=Data.useCase[i]
                   usecaseData.style.color="grey"
                   ul.append( usecaseData)
                }
             
               // usecaseData.innerText=Data.useCase.join(" #")
               // ul.append()
               let button=document.createElement("button")
               button.innerText="Get Started ->"
               button.setAttribute("class","fiveImgButton")
               dataOfall_five_Img.append(img,img,caption,paragraph,horizontal,usecase, ul,button)
          
         }
         showDataOfFiveimg()
         window.addEventListener("load", (event) => {
           localStorage.setItem("Imagedata",JSON.stringify(null))
         });

       //   slide show


       let  slideShow_data=document.querySelector("#slideShow_data")
       let slideShow_img=document.querySelector("#slideShow_img_div")
       let slideImage=document.querySelector("#slideImage")
        function slideShowfun(){
           console.log("hello")
           let i=0
           let head=document.createElement("h2")
           let para=document.createElement("p")
           let name=document.createElement("h1")
           let img=document.createElement("img")
           head.innerText=arry_of_slideshow[i].heading
           para.innerText=arry_of_slideshow[i].para
           img.src=arry_of_slideshow[i].img
           img.style.width="100%"
           img.style.height="100%"
           img.style.borderRadius="20px"
           name.innerText=arry_of_slideshow[i].name
           slideShow_data.append(head,para,name)
           slideShow_img.append(img)
           setInterval(()=>{
               if(i==arry_of_slideshow.length){
                   i=0
               }
              head.innerText=arry_of_slideshow[i].heading
              para.innerText=arry_of_slideshow[i].para
              img.src=arry_of_slideshow[i].img
              name.innerText=arry_of_slideshow[i].name
             i++

           },4000)  
        }
      


        window.addEventListener("load",function(){
           slideShowfun()
        })


    //   Please (Team Member) Don't touch the code 
        let ne=document.querySelector(".nextpage")
        ne.addEventListener("click",()=>{
           
            window.location.href="./login/day 4 copy/sign_up.html"
        })