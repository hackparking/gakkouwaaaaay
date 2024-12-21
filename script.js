document.getElementById('webhookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルト動作を防ぐ

    const message = document.getElementById('message').value;
    const webhookUrl = '？？'; // ここにDiscord Webhook URLを入力

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: message
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = 'メッセージが送信されました！';
    })
    .catch(error => {
        document.getElementById('response').innerText = 'エラーが発生しました。';
        console.error('Error:', error);
    });
});
