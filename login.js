document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const emailError = document.getElementById('login-email-error');
    const passwordError = document.getElementById('login-password-error');

    let hasError = false;
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    if (!email.endsWith('@yonsei.ac.kr')) {
        emailError.textContent = '연세대학교 이메일만 사용 가능합니다.';
        emailError.style.display = 'block';
        hasError = true;
    }

    if (!/^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)) {
        passwordError.textContent = '비밀번호는 영문 8자리 이상, 특수문자 1자리를 포함해야 합니다.';
        passwordError.style.display = 'block';
        hasError = true;
    }

    if (!hasError) {
        alert('로그인 시도 중...');
    }
});

document.getElementById('register-button').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const emailError = document.getElementById('register-email-error');
    const passwordError = document.getElementById('register-password-error');

    let hasError = false;
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    if (!email.endsWith('@yonsei.ac.kr')) {
        emailError.textContent = '연세대학교 이메일만 사용 가능합니다.';
        emailError.style.display = 'block';
        hasError = true;
    }

    if (!/^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)) {
        passwordError.textContent = '비밀번호는 영문 8자리 이상, 특수문자 1자리를 포함해야 합니다.';
        passwordError.style.display = 'block';
        hasError = true;
    }

    if (!hasError) {
        alert('회원가입 시도 중...');
    }
});


document.getElementById('show-register-link').addEventListener('click', function() {
    document.getElementById('login-form-container').style.display = 'none';
    document.getElementById('register-form-container').style.display = 'block';
});

document.getElementById('show-login-link').addEventListener('click', function() {
    document.getElementById('register-form-container').style.display = 'none';
    document.getElementById('login-form-container').style.display = 'block';
});
