function loadPage(page) {
    const content = document.getElementById('content');
    let filePath;

    if (page === 'calculator') {
        filePath = 'pages/hangyeol/calculator.html';
    } else if (page === 'graph') {
        filePath = 'pages/hangyeol/graph.html';
    }

    if (filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => {
                content.innerHTML = "<p>페이지를 로드할 수 없습니다.</p>";
            });
    }
}

// 초기 화면 설정
document.addEventListener("DOMContentLoaded", () => {
    loadPage('calculator'); // 기본적으로 계산기 페이지 표시
});

//테스트용
function calculate() {
    alert("입력 정상 처리됨: 점수 계산 중...");
}