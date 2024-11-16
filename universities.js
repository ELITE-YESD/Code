document.getElementById('check-score-btn').addEventListener('click', async () => {
    const score = document.getElementById('score-input').value;
    try {
        const response = await fetch(`/get-university?score=${score}`);
        const data = await response.json();
        if (data.university) {
            document.getElementById('result').textContent = `해당 점수로 합격한 대학: ${data.university}`;
        } else {
            document.getElementById('result').textContent = '해당 점수에 대한 데이터가 없습니다.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').textContent = '데이터를 불러오는 중 오류가 발생했습니다.';
    }
});
