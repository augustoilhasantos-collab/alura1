// Obter canvas e contexto
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Definir tamanho do canvas
canvas.width = 600;
canvas.height = 750;

// Variáveis de mouse
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

// Evento de movimento do mouse
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    desenharMonaLisa();
});

// Evento de toque (para móvel)
document.addEventListener('touchmove', (e) => {
    mouseX = e.touches[0].clientX;
    mouseY = e.touches[0].clientY;
    desenharMonaLisa();
});

// Cores originais da Mona Lisa
const cores = {
    pele: '#d4a574',
    peleEscura: '#a89968',
    cabelo: '#4a3728',
    cabeloDestaque: '#6b5a47',
    olho: '#3d2817',
    oliho_branco: '#f5f1e8',
    sobrancelha: '#3d2817',
    boca: '#c97a6a',
    boca_escura: '#a85a4a',
    fundo: '#c7b89a',
    roupaDestaque: '#3d2a1a',
    roupa: '#6b4a3a'
};

function desenharMonaLisa() {
    // Limpar canvas
    ctx.fillStyle = cores.fundo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Desenhar fundo com efeito sfumato
    desenharFundo();

    // Desenhar corpo
    desenharCorpo();

    // Desenhar rosto
    desenharRosto();

    // Desenhar cabelo
    desenharCabelo();

    // Desenhar olhos
    desenharOlhos();

    // Desenhar sobrancelhas
    desenharSobrancelhas();

    // Desenhar nariz
    desenharNariz();

    // Desenhar boca
    desenharBoca();

    // Desenhar detalhes finais
    desenharDetalhes();
}

function desenharFundo() {
    // Gradiente de fundo estilo renascença
    const gradienteFundo = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradienteFundo.addColorStop(0, '#a89968');
    gradienteFundo.addColorStop(0.5, '#c7b89a');
    gradienteFundo.addColorStop(1, '#9b8a5c');
    
    ctx.fillStyle = gradienteFundo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Elementos de paisagem ao fundo com sfumato
    ctx.fillStyle = 'rgba(139, 105, 20, 0.2)';
    ctx.beginPath();
    ctx.ellipse(100, 400, 150, 80, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(107, 90, 71, 0.15)';
    ctx.beginPath();
    ctx.ellipse(500, 350, 180, 100, 0, 0, Math.PI * 2);
    ctx.fill();
}

function desenharCorpo() {
    // Ombros e corpo
    ctx.fillStyle = cores.roupa;
    ctx.beginPath();
    ctx.ellipse(300, 500, 180, 150, 0, 0, Math.PI * 2);
    ctx.fill();

    // Destaque da roupa
    ctx.fillStyle = cores.roupaDestaque;
    ctx.beginPath();
    ctx.ellipse(250, 520, 80, 120, -0.3, 0, Math.PI * 2);
    ctx.fill();

    // Braços
    ctx.fillStyle = cores.pele;
    ctx.beginPath();
    ctx.ellipse(180, 480, 50, 120, -0.4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = cores.pele;
    ctx.beginPath();
    ctx.ellipse(420, 480, 50, 120, 0.4, 0, Math.PI * 2);
    ctx.fill();

    // Mãos
    ctx.fillStyle = cores.pele;
    ctx.beginPath();
    ctx.ellipse(140, 580, 45, 50, -0.3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = cores.pele;
    ctx.beginPath();
    ctx.ellipse(460, 580, 45, 50, 0.3, 0, Math.PI * 2);
    ctx.fill();
}

function desenharRosto() {
    // Rosto - forma oval
    ctx.fillStyle = cores.pele;
    ctx.beginPath();
    ctx.ellipse(300, 250, 110, 140, 0, 0, Math.PI * 2);
    ctx.fill();

    // Sombras do rosto para profundidade
    ctx.fillStyle = 'rgba(168, 153, 104, 0.3)';
    ctx.beginPath();
    ctx.ellipse(240, 280, 60, 80, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(168, 153, 104, 0.2)';
    ctx.beginPath();
    ctx.ellipse(360, 280, 60, 80, 0, 0, Math.PI * 2);
    ctx.fill();

    // Destaque do rosto
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.ellipse(280, 200, 50, 60, 0, 0, Math.PI * 2);
    ctx.fill();
}

function desenharCabelo() {
    // Cabelo - parte superior
    ctx.fillStyle = cores.cabelo;
    ctx.beginPath();
    ctx.ellipse(300, 150, 120, 110, 0, 0, Math.PI);
    ctx.fill();

    // Mechas de cabelo com destaques
    ctx.fillStyle = cores.cabeloDestaque;
    ctx.beginPath();
    ctx.ellipse(260, 130, 40, 50, -0.3, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(340, 135, 35, 45, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Cabelo nos lados
    ctx.fillStyle = cores.cabelo;
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.quadraticCurveTo(180, 250, 195, 320);
    ctx.quadraticCurveTo(200, 280, 220, 250);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.quadraticCurveTo(420, 250, 405, 320);
    ctx.quadraticCurveTo(400, 280, 380, 250);
    ctx.closePath();
    ctx.fill();

    // Detalhes do cabelo
    ctx.strokeStyle = cores.cabeloDestaque;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(260, 120);
    ctx.quadraticCurveTo(280, 140, 290, 170);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(340, 120);
    ctx.quadraticCurveTo(320, 140, 310, 170);
    ctx.stroke();
}

function desenharOlhos() {
    // Olho esquerdo
    const olhoEsquerdoX = 260;
    const olhoEsquerdoY = 240;
    const raioOlho = 20;

    // Branco do olho esquerdo
    ctx.fillStyle = cores.oliho_branco;
    ctx.beginPath();
    ctx.ellipse(olhoEsquerdoX, olhoEsquerdoY, raioOlho, raioOlho * 1.1, 0, 0, Math.PI * 2);
    ctx.fill();

    // Calcular direção da pupila para o mouse - olho esquerdo
    const angloEsquerdo = Math.atan2(mouseY - olhoEsquerdoY, mouseX - olhoEsquerdoX);
    const distanciaEsquerda = Math.min(raioOlho * 0.5, 8);
    const pupilaEsquerdaX = olhoEsquerdoX + Math.cos(angloEsquerdo) * distanciaEsquerda;
    const pupilaEsquerdaY = olhoEsquerdoY + Math.sin(angloEsquerdo) * distanciaEsquerda;

    // Pupila esquerda
    ctx.fillStyle = cores.olho;
    ctx.beginPath();
    ctx.ellipse(pupilaEsquerdaX, pupilaEsquerdaY, raioOlho * 0.5, raioOlho * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Brilho do olho esquerdo
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.beginPath();
    ctx.ellipse(pupilaEsquerdaX - 3, pupilaEsquerdaY - 3, 4, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Olho direito
    const olhoDireitoX = 340;
    const olhoDireitoY = 240;

    // Branco do olho direito
    ctx.fillStyle = cores.oliho_branco;
    ctx.beginPath();
    ctx.ellipse(olhoDireitoX, olhoDireitoY, raioOlho, raioOlho * 1.1, 0, 0, Math.PI * 2);
    ctx.fill();

    // Calcular direção da pupila para o mouse - olho direito
    const angloDireito = Math.atan2(mouseY - olhoDireitoY, mouseX - olhoDireitoX);
    const distanciaDireita = Math.min(raioOlho * 0.5, 8);
    const pupilaDirectaX = olhoDireitoX + Math.cos(angloDireito) * distanciaDireita;
    const pupilaDirectaY = olhoDireitoY + Math.sin(angloDireito) * distanciaDireita;

    // Pupila direita
    ctx.fillStyle = cores.olho;
    ctx.beginPath();
    ctx.ellipse(pupilaDirectaX, pupilaDirectaY, raioOlho * 0.5, raioOlho * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Brilho do olho direito
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.beginPath();
    ctx.ellipse(pupilaDirectaX - 3, pupilaDirectaY - 3, 4, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Contorno dos olhos
    ctx.strokeStyle = cores.olho;
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.ellipse(olhoEsquerdoX, olhoEsquerdoY, raioOlho, raioOlho * 1.1, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(olhoDireitoX, olhoDireitoY, raioOlho, raioOlho * 1.1, 0, 0, Math.PI * 2);
    ctx.stroke();
}

function desenharSobrancelhas() {
    ctx.strokeStyle = cores.sobrancelha;
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';

    // Sobrancelha esquerda
    ctx.beginPath();
    ctx.moveTo(240, 210);
    ctx.quadraticCurveTo(260, 195, 280, 205);
    ctx.stroke();

    // Sobrancelha direita
    ctx.beginPath();
    ctx.moveTo(320, 205);
    ctx.quadraticCurveTo(340, 195, 360, 210);
    ctx.stroke();
}

function desenharNariz() {
    // Nariz com sombreado
    ctx.strokeStyle = cores.peleEscura;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    // Ponte do nariz
    ctx.beginPath();
    ctx.moveTo(300, 230);
    ctx.lineTo(300, 290);
    ctx.stroke();

    // Lado esquerdo do nariz
    ctx.beginPath();
    ctx.moveTo(300, 285);
    ctx.quadraticCurveTo(285, 295, 275, 290);
    ctx.stroke();

    // Lado direito do nariz
    ctx.beginPath();
    ctx.moveTo(300, 285);
    ctx.quadraticCurveTo(315, 295, 325, 290);
    ctx.stroke();

    // Narinas
    ctx.fillStyle = cores.peleEscura;
    ctx.beginPath();
    ctx.ellipse(285, 290, 5, 7, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(315, 290, 5, 7, 0, 0, Math.PI * 2);
    ctx.fill();
}

function desenharBoca() {
    // Forma geral da boca
    ctx.fillStyle = cores.boca;
    ctx.beginPath();
    ctx.moveTo(270, 340);
    ctx.quadraticCurveTo(300, 360, 330, 340);
    ctx.quadraticCurveTo(310, 345, 300, 343);
    ctx.quadraticCurveTo(290, 345, 270, 340);
    ctx.fill();

    // Sombra para profundidade (o famoso sorriso da Mona Lisa)
    ctx.strokeStyle = cores.boca_escura;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(270, 340);
    ctx.quadraticCurveTo(300, 358, 330, 340);
    ctx.stroke();

    // Destaque do lábio superior
    ctx.fillStyle = 'rgba(255, 200, 200, 0.3)';
    ctx.beginPath();
    ctx.moveTo(275, 338);
    ctx.quadraticCurveTo(300, 348, 325, 338);
    ctx.fill();

    // Linha do sorriso - o sorriso enigmático
    ctx.strokeStyle = cores.boca_escura;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(280, 342);
    ctx.quadraticCurveTo(300, 350, 320, 342);
    ctx.stroke();
}

function desenharDetalhes() {
    // Veias e texturas sutis
    ctx.strokeStyle = 'rgba(168, 153, 104, 0.2)';
    ctx.lineWidth = 1;

    // Rugas de expressão sutis
    ctx.beginPath();
    ctx.moveTo(250, 260);
    ctx.quadraticCurveTo(255, 280, 250, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(350, 260);
    ctx.quadraticCurveTo(345, 280, 350, 300);
    ctx.stroke();

    // Sombra sob o queixo
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.beginPath();
    ctx.ellipse(300, 380, 80, 20, 0, 0, Math.PI * 2);
    ctx.fill();

    // Destaque final na testa
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.beginPath();
    ctx.ellipse(300, 180, 70, 40, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Desenhar inicialmente
desenharMonaLisa();