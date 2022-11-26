$(document).ready(function () {
    renderQuote();
    displayNow();
});

function displayNow() {  // 시간 계산 함수
    var now = new Date();     // Date 객체의 인스턴스를 만듦      
    var currentTime = now.toLocaleTimeString();     //  toLocaleTmeString() 메서드를 사용해 지역에 맞는 시간을 가져옴

    document.querySelector("#current").innerHTML = currentTime;   // id="current" 인 요소에 현재 시간 표시
}
setInterval(displayNow, 1000);  // 1초마다 시간 계산 함수 실행

function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `" ${data['content']} "`;
            let author = `- ${data['author']} -`;
            $('#content').text(content);
            $('#author').text(author);
        });
}
setInterval(renderQuote, 10000);