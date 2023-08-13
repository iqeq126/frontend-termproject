$().ready(function () {
    let uid;
    $("#loginAlert").click(function () {
        uid = document.idForm.id.value;
        let id_length = document.idForm.id.value.length;
        let pw_length = document.pwForm.password.value.length;
        let t1 = false, t2 = false;
        if (id_length >= 6 && id_length <= 20){ t1 = true; } else { t1 = false; }
        if (pw_length >= 8 && pw_length <= 20){ t2 = true; } else { t2 = false; }
       if(t1 == false || t2 == false){
            Swal.fire({
                icon: 'error',
                title: '입력값이 조건에 맞지 않습니다.',
                text: '아이디/패스워드를 다시 입력해주세요',
            }).then((value)=>{
                location.href="login.html";
            });
        }
        else{
            Swal.fire({
                icon: 'success',
                title: uid + '님의 로그인이 완료되었습니다.',
                text: '환영합니다',
            }).then((value)=>{
                location.href="../main.html";
            });
        }
    });
    $("#JoinAlert").click(function () {
        let id = document.getElementById('id').value;
        let uid = document.getElementById('id').style.borderColor;
        let pw1 = document.getElementById('password').style.borderColor;
        let pw2 = document.getElementById('password2').style.borderColor;
        let cer = document.getElementById('Certification').style.borderColor;
        let t1 = false;
        if(uid == 'blue') {
            if(uid == pw1 && pw2 == cer){ t1 = true; }
        }
       if(t1 == false){
            Swal.fire({
                icon: 'error',
                title: '입력값이 조건에 맞지 않습니다.',
                text: '붉은 입력창을 제거해주세요',
            }).then((value)=>{
                location.href="join.html";
            });
        }
        else{
            Swal.fire({
                icon: 'success',
                title: id + '님의 회원가입이 완료되었습니다.',
                text: '환영합니다',
            }).then((value)=>{
                location.href="login.html";
            });
        }
    });

    $( "#id" ).change( function() {
        let uid = document.idForm.id;
        let id_length = document.idForm.id.value.length;
        if (id_length == 0){
            uid.style.borderColor = 'lightgray';
        }
        else if (id_length >= 6 &&  id_length <= 20){
            uid.style.borderColor = 'blue';
        }
        else{
            uid.style.borderColor = 'red';
        }
      } );

      $( "#password" ).change( function() {
        let upw = document.pwForm.password;
        let pw_length = document.pwForm.password.value.length;
        if (pw_length == 0){
            upw.style.borderColor = 'lightgray';
        }
        else if (pw_length >= 8 &&  pw_length <= 20){
            upw.style.borderColor = 'blue';
        }
        else{
            upw.style.borderColor = 'red';
        }
      } );
});

// 뒤로 가기를 막는 함수
window.history.forward(); function noBack(){ 
    window.history.forward();
}

// 화면 전환 효과 : fade
document.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(() => {
      document.body.classList.remove('fade');
    });
  });