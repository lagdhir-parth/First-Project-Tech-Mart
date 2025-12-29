setting_op=document.querySelector(".setting-op")
setting_icon=document.querySelector(".setting-op i");

setting_op.addEventListener('mouseover',()=>{
    setting_icon.classList.add("fa-spin")
});
setting_op.addEventListener('mouseout',()=>{
    setting_icon.classList.remove("fa-spin")
});

admin_info=document.querySelector(".admin-info")
admin_caret=document.querySelector(".fa-caret-down")

admin_info.addEventListener('mouseover',()=>{
    admin_caret.classList.add("fa-bounce")
});
admin_info.addEventListener('mouseout',()=>{
    admin_caret.classList.remove("fa-bounce")
});

menu_items=document.querySelectorAll(".menu-item")
icons=document.querySelectorAll(".icon")
logout=document.querySelector(".logout")

menu_items[0].addEventListener("mouseover",()=>{
    icons[0].classList.add("fa-beat")
});
menu_items[0].addEventListener("mouseout",()=>{
    icons[0].classList.remove("fa-beat")
});

menu_items[1].addEventListener("mouseover",()=>{
    icons[1].classList.add("fa-beat")
});
menu_items[1].addEventListener("mouseout",()=>{
    icons[1].classList.remove("fa-beat")
});

menu_items[2].addEventListener("mouseover",()=>{
    icons[2].classList.add("fa-beat")
});
menu_items[2].addEventListener("mouseout",()=>{
    icons[2].classList.remove("fa-beat")
});

menu_items[3].addEventListener("mouseover",()=>{
    icons[3].classList.add("fa-beat")
});
menu_items[3].addEventListener("mouseout",()=>{
    icons[3].classList.remove("fa-beat")
});

logout.addEventListener("mouseover",()=>{
    icons[4].classList.add("fa-beat")
});
logout.addEventListener("mouseout",()=>{
    icons[4].classList.remove("fa-beat")
});

menu_items.forEach(link => {
    if (link.href === window.location.href) {
      link.style.transform="scale(1.1)"
      link.style.borderTop="1px solid rgba(255, 255, 255, 0.25)";
      link.style.borderBottom="1px solid rgba(255, 255, 255, 0.25)";
      link.style.background="linear-gradient(to right,transparent,#454444,transparent)";
    }
  });

