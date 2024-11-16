document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');

    // 로그인 시 사용자 이름 가져옴
    const userName = getUserFromDatabase();
    if (userName) {
        welcomeMessage.textContent = `${userName}님 환영합니다`;
        welcomeMessage.style.display = 'block';
    }
});


document.getElementById('login-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'login.html';
});

document.getElementById('signup-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'signup.html';
});
