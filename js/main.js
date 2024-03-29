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



// 모든 .tab_ul li span 요소 선택
let btnClick = document.querySelectorAll('.tab_ul li span');

// 각 요소에 대해 이벤트 리스너 추가
btnClick.forEach(item => {
    // 클릭 이벤트 처리
    item.addEventListener('click', () => {
        // 부모 요소인 li 요소 찾기
        let li = item.parentNode;
        // block 클래스가 있는 요소인지 확인
        let BlockClass = li.querySelector('.block');
        // none 클래스가 있는 요소인지 확인
        let NoneClass = li.querySelector('.none');

        // block 클래스가 있을 경우, none 클래스를 block으로, block 클래스를 none으로 변경
        if (BlockClass) {
            BlockClass.classList.remove('block');
            BlockClass.classList.add('none');
        }
        if (NoneClass) {
            NoneClass.classList.remove('none');
            NoneClass.classList.add('block');
        }
    });
});






});