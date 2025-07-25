# 2048 – Clone do Clássico Jogo de Lógica

O **2048** é um jogo de quebra-cabeça numérico viciante no qual o objetivo é combinar blocos com o mesmo valor até alcançar o número **2048**. Com um tabuleiro 4x4, cada movimento desliza todas as peças em uma direção (↑ ↓ ← →). Blocos com o mesmo valor se fundem, dobrando seu valor. Parece simples... até ficar sem espaço!

Esta versão foi desenvolvida usando **HTML**, **CSS** e **JavaScript**, recriando fielmente a mecânica do jogo original. Ideal para testar suas habilidades estratégicas de maneira divertida! 

<p align="center">
  <img src="https://github.com/user-attachments/assets/e3243772-8b55-4c7a-9ad2-0b40ce606547" alt="Imagem do jogo 2048" width="300">
</p>

## Funcionalidades

* Tabuleiro 4x4 dinâmico
* Movimentação por teclas direcionais (setas)
* Combinação automática de blocos com mesmo valor
* Verificação de vitória ao atingir o bloco 2048
* Verificação de fim de jogo quando não há mais movimentos
* Cores dinâmicas para cada valor
* Botão de reinício do jogo
* Contador de pontuação em tempo real

## Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript Vanilla (puro)**

## Estrutura de Arquivos

* `index.html` – Estrutura da página e elementos principais
* `style.css` – Estilos visuais e responsividade
* `app.js` – Toda a lógica do jogo (movimentos, combinações, verificação de vitória/derrota, pontuação, etc.)

## Como Jogar

1. Abra o arquivo `index.html` no seu navegador.
2. Use as **setas do teclado** para mover os blocos.
3. Tente alcançar o número **2048** combinando blocos de mesmo valor.
4. Clique em **"Reiniciar"** a qualquer momento para jogar novamente.

## Curiosidade Técnica

O jogo usa manipulação de DOM para renderizar os blocos e aplicar a lógica de movimentação e combinação. A verificação de vitória e derrota é feita após cada nova geração de bloco, garantindo uma experiência fluida e realista.
