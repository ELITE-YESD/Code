document.addEventListener('DOMContentLoaded', async () => {
    const universityResult = document.getElementById('university-result');
    const universityTable = document.getElementById('university-table');

    try {
        console.log('Fetching user data from /get-user-data...');
        const response = await fetch('/get-user-data'); // 엔드포인트 확인
        console.log('Response received:', response);

        if (!response.ok) {
            console.error('Error fetching data:', response.status, response.statusText);
            universityResult.innerHTML = '<h3>데이터를 불러오는 중 오류가 발생했습니다.</h3>';
            return;
        }

        const data = await response.json();
        console.log('Data parsed:', data);

        if (data.score && data.university) {
            universityResult.innerHTML = `<h3>${data.score}점 선배는 ${data.university} 대학을 갔습니다.</h3>`;

            // 표 데이터 생성
            if (data.preferences && data.preferences.length > 0) {
                let tableHTML = '<table><thead><tr><th>순위</th><th>대학</th></tr></thead><tbody>';
                data.preferences.forEach((univ, index) => {
                    tableHTML += `<tr><td>${index + 1}</td><td>${univ}</td></tr>`;
                });
                tableHTML += '</tbody></table>';
                universityTable.innerHTML = tableHTML;
            } else {
                universityTable.innerHTML = '<p>표시할 대학 정보가 없습니다.</p>';
            }
        } else {
            universityResult.innerHTML = '<h3>데이터를 불러오는 중 오류가 발생했습니다.</h3>';
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        universityResult.innerHTML = '<h3>데이터를 불러오는 중 오류가 발생했습니다.</h3>';
    }
});
