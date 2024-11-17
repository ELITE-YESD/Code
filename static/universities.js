document.addEventListener('DOMContentLoaded', () => {
    const checkScoreBtn = document.getElementById('check-score-btn');
    const resultContainer = document.getElementById('result');

    checkScoreBtn.addEventListener('click', async () => {
        const scoreInput = document.getElementById('score-input').value;
        
        if (!scoreInput) {
            resultContainer.textContent = '점수를 입력하세요.';
            return;
        }

        try {
            const response = await fetch(`/get-university?score=${scoreInput}`);
            const data = await response.json();

            if (data.university) {
                resultContainer.textContent = `해당 점수로 합격한 대학: ${data.university}`;
            } else {
                resultContainer.textContent = '해당 점수에 대한 데이터가 없습니다.';
            }
        } catch (error) {
            console.error('Error:', error);
            resultContainer.textContent = '데이터를 불러오는 중 오류가 발생했습니다.';
        }
    });
});
