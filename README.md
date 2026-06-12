# 🎨 Mona Lisa Interativa - Projeto Alura

Um projeto educacional que recria a famosa obra-prima de Leonardo da Vinci usando HTML5 Canvas, com a adição de um efeito interativo onde os olhos da Mona Lisa acompanham o cursor do mouse!

## 📋 Características

- ✨ **Desenho detalhado da Mona Lisa** usando Canvas API
- 👀 **Olhos interativos** que acompanham o movimento do mouse
- 🎨 **Cores originais** da pintura renascentista
- 📱 **Responsivo** - funciona em desktop e dispositivos móveis
- 🎭 **Efeito Sfumato** - técnica de Leonardo da Vinci para transições suaves de cores
- 🖱️ **Suporte a toque** - funciona em telas sensíveis ao toque

## 🚀 Como Usar

### Opção 1: Abrir localmente
1. Clone ou baixe os arquivos do repositório
2. Abra o arquivo `index.html` em seu navegador
3. Mova o mouse sobre a tela para ver os olhos acompanharem!

### Opção 2: GitHub Pages
Se quiser hospedar no GitHub Pages:
1. Vá em Settings → Pages
2. Selecione a branch main como fonte
3. Acesse a URL fornecida

## 📁 Estrutura de Arquivos

```
alura1/
├── index.html       # Estrutura HTML
├── style.css        # Estilos e design
├── script.js        # Lógica e desenho
└── README.md        # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e gradientes
- **Canvas API** - Desenho e gráficos
- **JavaScript** - Interatividade e cálculos matemáticos

## 🎓 Conceitos Aprendidos

Este projeto aborda:

- Uso da Canvas API para desenho 2D
- Manipulação de eventos de mouse e toque
- Cálculo de ângulos com `Math.atan2()`
- Criação de formas complexas com `quadraticCurve` e `ellipse`
- Gradientes e preenchimentos
- Responsividade e design adaptativo

## 🎨 Personalização

Você pode modificar:

- **Cores**: Altere o objeto `cores` em `script.js`
- **Tamanho do canvas**: Modifique `canvas.width` e `canvas.height`
- **Sensibilidade dos olhos**: Ajuste o valor `distancia` no cálculo das pupilas
- **Fundo**: Modifique a cor e gradientes em `desenharFundo()`

## 💡 Dicas

- Os olhos usam `Math.atan2()` para calcular o ângulo em direção ao mouse
- A técnica de sfumato é implementada com camadas de cores semi-transparentes
- Use `ctx.ellipse()` para criar formas mais complexas que óvalos

## 📚 Recursos Adicionais

- [MDN - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [MDN - Mouse Events](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
- [Leonardo da Vinci - Mona Lisa](https://pt.wikipedia.org/wiki/Mona_Lisa)

## 📝 Licença

Este projeto é um trabalho educacional criado para fins de aprendizado em parceria com a Alura.

## 👨‍💻 Autor

Desenvolvido como projeto Alura de Canvas interativo.

---

**Divirta-se explorando a interatividade! 🎭✨**