//스크립트 이용해서 css를 적용하건 이벤트를 별도로 추가해줄 수 있음
//title 변수에 id가 title인 태그를 저장해서 그 태그의 색깔을 파란색으로 바꿈
let title = document.querySelector('#title')
title.style.color = 'blue'
//id가 contents인 태그를 contents라는 변수에 저장해서
//그 변수를 이용해 백그라운드를 핑크로 바꿈
let contents = document.getElementById('contents')
contents.style.background = 'pink'
let txt = prompt('글자를 입력해보세요~~!!')
alert(txt)
contents.innerText += txt