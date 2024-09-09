const apiKey = 'AIzaSyC4NDy7L_SFNMMJq5vHXyggo-CMYC2UYVk';  // Google API 키
const spreadsheetId = '1OaDPMQXrWSe1s9KQJi25lHxyRp_eSpBRVVR1WgZJxys';  // 스프레드시트 ID
const range = 'Sheet1!A1';  // 가져올 범위 (예: A1 셀)
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
console.log(url)
// 시트 이름이 정확한지 확인하세요. 
// 시트 이름이 정확하지 않으면, "400 Bad Request" 오류가 발생할 수 있습니다.
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.values && data.values.length > 0) {
            const cellValue = data.values[0][0];  // A1 셀의 값
            document.getElementById("content").textContent = cellValue;
        } else {
            document.getElementById("content").textContent = 'No data found';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("content").textContent = 'Error loading data';
    });