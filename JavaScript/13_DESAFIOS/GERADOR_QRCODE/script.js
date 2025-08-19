const container = document.querySelector('.container');
const qrCodeBtn = document.getElementById('generateButton');
const inputText = document.querySelector("#inputText");
const qrCodeContainer = document.getElementById('qrcode');

// Eventos
function generateQRCode() {
    const inputValue = inputText.value;

    if (!inputValue) return;

    qrCodeBtn.innerText = 'Gerando QR Code...';

    // Limpa o container e adiciona a imagem
    qrCodeContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}" alt="QR Code">`;

    // Restaura o texto do botão após um pequeno delay
    setTimeout(() => {
        qrCodeBtn.innerText = 'Gerar QR Code';
    }, 1000);
}

qrCodeBtn.addEventListener('click', generateQRCode);