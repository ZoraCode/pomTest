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
function sample6_execDaumPostcode() {
  new daum.Postcode({
      oncomplete: function(data) {
          var addr = ''; // 주소 변수
          var extraAddr = ''; // 참고항목 변수
          if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
              addr = data.roadAddress;
          } else { // 사용자가 지번 주소를 선택했을 경우(J)
              addr = data.jibunAddress;
          }
          if(data.userSelectedType === 'R'){
              // 법정동명이 있을 경우 추가한다. (법정리는 제외)   
              if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                  extraAddr += data.bname;
              }
              if(data.buildingName !== '' && data.apartment === 'Y'){
                  extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
              }                    
              if(extraAddr !== ''){
                  extraAddr = ' (' + extraAddr + ')';
              }

              document.getElementById("sample6_extraAddress").value = extraAddr;

          } else {
              document.getElementById("sample6_extraAddress").value = '';
          }
          document.getElementById('sample6_postcode').value = data.zonecode;
          document.getElementById("sample6_address").value = addr;
          document.getElementById("sample6_detailAddress").focus();
      }
  }).open();





});