document.addEventListener('DOMContentLoaded',function(){




let tabList = document.querySelectorAll('.sec2 .tab_nav .tab li'),
    tabs = document.querySelectorAll('.sec2 .tab_ul > li'),
    tabListb = document.querySelectorAll('.sec6 .tab_nav .tab li'),
    tabsb = document.querySelectorAll('.sec6 .tab_ul > li');

tabList.forEach((tem,idx)=>{
  tem.addEventListener('click',(e)=>{
    e.preventDefault();

    for(is of tabs){
      is.style.display = 'none';
    }
    tabs[idx].style.display = 'block';

  });
});


tabListb.forEach((tem,idx)=>{
  tem.addEventListener('click',(e)=>{
    e.preventDefault();

    for(is of tabsb){
      is.style.display = 'none';
    }
    tabsb[idx].style.display = 'block';

  });
});








});