// 1. Seleciona o elemento
const imagem = document.getElementById('imagemMovel');

// 2. Define a velocidade e as posições iniciais (em pixels)
let posX = 50; // Posição Horizontal (left)
let posY = 50; // Posição Vertical (top)
const velocidade = 5; // Pixels por ciclo de movimento

// 3. Define as direções
let direcaoX = 1; // 1 para direita, -1 para esquerda
let direcaoY = 1; // 1 para baixo, -1 para cima

// 4. Função que atualiza a posição do elemento
function moverImagem() {
    // === Movimento Horizontal (X) ===
    posX += velocidade * direcaoX;

    // Verifica colisão nas bordas horizontais
    // Se atingir a borda direita (largura da tela - largura da imagem) OU a borda esquerda (0)
    if (posX + imagem.offsetWidth > window.innerWidth || posX < 0) {
        direcaoX *= -1; // Inverte a direção horizontal
        posX += velocidade * direcaoX; // Garante que ele não fique "preso" na borda
    }

    // === Movimento Vertical (Y) ===
    posY += velocidade * direcaoY;

    // Verifica colisão nas bordas verticais
    // Se atingir a borda inferior (altura da tela - altura da imagem) OU a borda superior (0)
    if (posY + imagem.offsetHeight > window.innerHeight || posY < 0) {
        direcaoY *= -1; // Inverte a direção vertical
        posY += velocidade * direcaoY; // Garante que ele não fique "preso" na borda
    }

    // 5. Aplica as novas posições ao estilo CSS do elemento
    imagem.style.left = posX + 'px';
    imagem.style.top = posY + 'px';

    // 6. Agenda a próxima atualização de quadro (para animações suaves)
    requestAnimationFrame(moverImagem);
}

// Inicia a animação
moverImagem();
