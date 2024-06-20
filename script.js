const testimonials = [
    {
        name:"Lorem",
        photoUrl:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit minima corporis delectus quas cumque hic, fugiat voluptas culpa et aut sed itaque error suscipit, molestiae perferendis voluptates voluptatum cupiditate provident sequi! Placeat aliquam qui modi nobis atque quo ratione veniam facere. Praesentium laborum id possimus. Harum officia exercitationem asperiores!"
        

    },
    {
        name:"Lorem1",
        photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit minima corporis delectus quas cumque hic, fugiat voluptas culpa et aut sed itaque error suscipit, molestiae perferendis voluptates voluptatum cupiditate provident sequi! Placeat aliquam qui modi nobis atque quo ratione veniam facere. Praesentium laborum id possimus. Harum officia exercitationem asperiores!"


    },
    {
        name:"Lorem2",
        photoUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit minima corporis delectus quas cumque hic, fugiat voluptas culpa et aut sed itaque error suscipit, molestiae perferendis voluptates voluptatum cupiditate provident sequi! Placeat aliquam qui modi nobis atque quo ratione veniam facere. Praesentium laborum id possimus. Harum officia exercitationem asperiores!"


    }

];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".username");

let index = 0;

updateTestimonial();

function updateTestimonial(){
    const {name,photoUrl,text} = testimonials[index];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    userNameEl.innerText = name;
    index++;
    if(index === testimonials.length){
        index = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    },2000);
};