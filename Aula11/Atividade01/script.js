const esconderBarra = document.createElement("style");

esconderBarra.textContent = `
    html, body {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    html::-webkit-scrollbar,
    body::-webkit-scrollbar {
        display: none;
    }
`;

document.head.appendChild(esconderBarra);

document.body.style.backgroundColor = "#ffffff";

const escudo = document.createElement("img");

escudo.src = "./img/escudo.png";
escudo.alt = "Escudo do Corinthians";

escudo.style.width = "250px";
escudo.style.display = "block";
escudo.style.margin = "auto";
escudo.style.position = "absolute";
escudo.style.opacity = "1";
escudo.style.transition = "none";

const fonte = document.createElement("link");
fonte.rel = "stylesheet";
fonte.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap";

document.head.appendChild(fonte);

const header = document.createElement("header");

header.textContent = "Sport Club Corinthians Paulista";
header.style.backgroundColor = "#FFFFFF";
header.style.color = "#000000";
header.style.padding = "20px";
header.style.fontSize = "120px";
header.style.fontFamily = "'Great Vibes', cursive";
header.style.textAlign = "center";
header.style.fontWeight = "normal";
header.style.position = "absolute";
header.style.opacity = "0";
document.body.style.margin = "0";
document.body.style.userSelect = "none";
document.body.style.cursor = "default";

const intro = document.createElement("section");

intro.style.height = "100vh";
intro.style.display = "flex";
intro.style.alignItems = "center";
intro.style.justifyContent = "center";
intro.style.position = "sticky";
intro.style.top = "0";
intro.style.opacity = "0";
intro.style.transition = "opacity 2s ease";

const areaAnimacao = document.createElement("div");
areaAnimacao.style.height = "450vh";

intro.appendChild(escudo);
intro.appendChild(header);

areaAnimacao.appendChild(intro);
document.body.appendChild(areaAnimacao);

setTimeout(() => {
    intro.style.opacity = "1";
}, 1500);

window.addEventListener("scroll", function () {
    const progresso = Math.min(window.scrollY / (window.innerHeight * 3), 1);

    escudo.style.opacity = Math.max(1 - progresso * 3, 0);
    header.style.opacity = Math.min(Math.max((progresso - 0.55) * 3, 0), 1);
});

const historia = document.createElement("section");

historia.style.display = "flex";
historia.style.alignItems = "center";
historia.style.gap = "50px";
historia.style.padding = "50px";

const imagem1 = document.createElement("img");

imagem1.src = "./img/imagem1.jpg";
imagem1.style.width = "600px";
imagem1.style.height = "auto";
imagem1.style.borderRadius = "12px";

historia.appendChild(imagem1);

document.body.appendChild(historia);

const fonteHistoria = document.createElement("link");

fonteHistoria.rel = "stylesheet";
fonteHistoria.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";

document.head.appendChild(fonteHistoria);

const titulo = document.createElement("h2");

titulo.textContent = "1910 — O nascimento de uma nação";
titulo.style.fontFamily = "'Montserrat', sans-serif";
titulo.style.fontSize = "36px";
titulo.style.fontWeight = "700";
titulo.style.margin = "0";

const caixaTexto = document.createElement("div");

caixaTexto.style.display = "flex";
caixaTexto.style.flexDirection = "column";
caixaTexto.style.gap = "20px";
caixaTexto.style.maxWidth = "600px";
caixaTexto.style.fontFamily = "'Montserrat', sans-serif";

const paragrafo = document.createElement("p");

paragrafo.textContent = "Em 1º de setembro de 1910, cinco operários fundaram o Sport Club Corinthians Paulista, no bairro do Bom Retiro, em São Paulo. Inspirado pelo clube inglês Corinthian FC, o time nasceu com o objetivo de tornar o futebol mais acessível ao povo.";

paragrafo.style.fontSize = "18px";
paragrafo.style.lineHeight = "1.8";
paragrafo.style.color = "#555555";
paragrafo.style.margin = "0";

caixaTexto.appendChild(titulo);
caixaTexto.appendChild(paragrafo);

historia.appendChild(caixaTexto);

const estadio = document.createElement("section");

estadio.style.display = "flex";
estadio.style.alignItems = "center";
estadio.style.justifyContent = "flex-end";
estadio.style.gap = "30px";
estadio.style.padding = "50px";
estadio.style.flexWrap = "wrap";
estadio.style.marginTop = "80px";

const caixaEstadio = document.createElement("div");

caixaEstadio.style.flex = "0 1 580px";
caixaEstadio.style.fontFamily = "'Montserrat', sans-serif";
caixaEstadio.style.maxWidth = "580px";
caixaEstadio.style.textAlign = "right";

const tituloEstadio = document.createElement("h2");

tituloEstadio.textContent = "1918 — O primeiro estádio";
tituloEstadio.style.marginBottom = "20px";
tituloEstadio.style.fontSize = "36px";
tituloEstadio.style.fontWeight = "700";
tituloEstadio.style.lineHeight = "1.2";
tituloEstadio.style.margin = "0 0 20px 0";

const textoEstadio = document.createElement("p");

textoEstadio.textContent = "Em 1918, o Corinthians inaugurou seu primeiro campo próprio, conhecido como Ponte Grande, em São Paulo. Construído com a ajuda dos próprios jogadores e torcedores, o estádio representou um passo importante na consolidação do clube.";

textoEstadio.style.fontSize = "17px";
textoEstadio.style.lineHeight = "1.9";
textoEstadio.style.textAlign = "right";
textoEstadio.style.maxWidth = "580px";
textoEstadio.style.color = "#555555";
textoEstadio.style.margin = "0";

const imagem2 = document.createElement("img");

imagem2.src = "./img/imagem2.jpg";
imagem2.style.width = "600px";
imagem2.style.maxWidth = "100%";
imagem2.style.height = "auto";
imagem2.style.borderRadius = "12px";
imagem2.style.filter = "grayscale(100%)";

caixaEstadio.appendChild(tituloEstadio);
caixaEstadio.appendChild(textoEstadio);

estadio.appendChild(caixaEstadio);
estadio.appendChild(imagem2);

document.body.appendChild(estadio);

const conquista = document.createElement("section");

conquista.style.display = "flex";
conquista.style.alignItems = "center";
conquista.style.gap = "50px";
conquista.style.padding = "50px";
conquista.style.marginTop = "80px";
conquista.style.flexWrap = "wrap";

const imagem3 = document.createElement("img");

imagem3.src = "./img/imagem3.png";
imagem3.alt = "Corinthians campeão brasileiro de 1990";
imagem3.style.width = "600px";
imagem3.style.maxWidth = "100%";
imagem3.style.height = "auto";
imagem3.style.borderRadius = "12px";

const caixaConquista = document.createElement("div");

caixaConquista.style.display = "flex";
caixaConquista.style.flexDirection = "column";
caixaConquista.style.gap = "20px";
caixaConquista.style.maxWidth = "600px";
caixaConquista.style.fontFamily = "'Montserrat', sans-serif";
caixaConquista.style.textAlign = "left";

const tituloConquista = document.createElement("h2");

tituloConquista.textContent = "1990 — A primeira conquista brasileira";
tituloConquista.style.fontSize = "36px";
tituloConquista.style.fontWeight = "700";
tituloConquista.style.margin = "0";
tituloConquista.style.lineHeight = "1.2";

const textoConquista = document.createElement("p");

textoConquista.textContent = "Em 1990, o Corinthians conquistou seu primeiro Campeonato Brasileiro, derrotando o São Paulo na final. Com Neto como grande destaque, o Timão venceu os dois jogos decisivos por 1 a 0. A conquista marcou uma nova era na história do clube e fortaleceu ainda mais sua ligação com a Fiel Torcida.";

textoConquista.style.fontSize = "18px";
textoConquista.style.lineHeight = "1.8";
textoConquista.style.color = "#555555";
textoConquista.style.margin = "0";

caixaConquista.appendChild(tituloConquista);
caixaConquista.appendChild(textoConquista);

conquista.appendChild(imagem3);
conquista.appendChild(caixaConquista);

document.body.appendChild(conquista);



// Curiosidades

const curiosidades = document.createElement("section");

curiosidades.style.padding = "100px 50px";
curiosidades.style.marginTop = "60px";
curiosidades.style.fontFamily = "'Montserrat', sans-serif";
curiosidades.style.textAlign = "center";


const detalheCuriosidades = document.createElement("span");

detalheCuriosidades.textContent = "ALÉM DAS QUATRO LINHAS";
detalheCuriosidades.style.fontSize = "12px";
detalheCuriosidades.style.fontWeight = "700";
detalheCuriosidades.style.letterSpacing = "3px";
detalheCuriosidades.style.color = "#999999";


const tituloCuriosidades = document.createElement("h2");

tituloCuriosidades.textContent = "Curiosidades";
tituloCuriosidades.style.fontSize = "44px";
tituloCuriosidades.style.fontWeight = "700";
tituloCuriosidades.style.color = "#111111";
tituloCuriosidades.style.margin = "15px 0";


const subtituloCuriosidades = document.createElement("p");

subtituloCuriosidades.textContent =
    "Histórias, conquistas e momentos que marcaram o Timão.";

subtituloCuriosidades.style.fontSize = "16px";
subtituloCuriosidades.style.color = "#777777";
subtituloCuriosidades.style.margin = "0 0 65px";


const listaCuriosidades = document.createElement("div");

listaCuriosidades.style.display = "grid";
listaCuriosidades.style.gridTemplateColumns =
    "repeat(auto-fit, minmax(min(100%, 245px), 1fr))";
listaCuriosidades.style.gap = "22px";
listaCuriosidades.style.maxWidth = "1200px";
listaCuriosidades.style.margin = "auto";
listaCuriosidades.style.textAlign = "left";


const dadosCuriosidades = [
    {
        numero: "01",
        titulo: "Fundado por operários",
        texto: "O Corinthians nasceu em 1910, fundado por cinco trabalhadores no bairro do Bom Retiro, em São Paulo."
    },
    {
        numero: "02",
        titulo: "Inspiração inglesa",
        texto: "O nome Corinthians foi inspirado no Corinthian FC, clube inglês que realizou uma excursão pelo Brasil em 1910."
    },
    {
        numero: "03",
        titulo: "A origem do Timão",
        texto: "O apelido Timão ganhou força em 1966, quando o clube reuniu grandes jogadores e formou uma equipe de destaque."
    },
    {
        numero: "04",
        titulo: "Democracia Corinthiana",
        texto: "Na década de 1980, jogadores como Sócrates participaram de um movimento que defendia decisões coletivas no clube."
    },
    {
        numero: "05",
        titulo: "Dois títulos mundiais",
        texto: "O Corinthians conquistou o Mundial de Clubes da FIFA em 2000 e 2012, derrotando o Chelsea na final de 2012."
    },
    {
        numero: "06",
        titulo: "A Invasão Corinthiana",
        texto: "Em 1976, dezenas de milhares de corinthianos viajaram ao Rio de Janeiro para acompanhar uma semifinal contra o Fluminense."
    },
    {
        numero: "07",
        titulo: "Libertadores invicta",
        texto: "Em 2012, o Corinthians conquistou sua primeira Copa Libertadores sem perder nenhuma partida durante toda a competição."
    },
    {
        numero: "08",
        titulo: "Uma arena de Copa",
        texto: "A Neo Química Arena foi inaugurada em 2014 e recebeu a partida de abertura da Copa do Mundo daquele ano."
    }
];


const cardsCuriosidades = [];

dadosCuriosidades.forEach(function (item, indice) {


    const envoltorio = document.createElement("div");

    envoltorio.style.opacity = "0";
    envoltorio.style.transform = "translateY(25px)";
    envoltorio.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";


    const card = document.createElement("div");

    card.style.backgroundColor = "#f8f8f8";
    card.style.border = "1px solid #eeeeee";
    card.style.borderRadius = "14px";
    card.style.padding = "32px";
    card.style.height = "100%";
    card.style.boxSizing = "border-box";
    card.style.cursor = "default";

    card.style.transition =
        "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease";

    const numero = document.createElement("span");

    numero.textContent = item.numero;
    numero.style.fontSize = "13px";
    numero.style.fontWeight = "700";
    numero.style.letterSpacing = "2px";
    numero.style.color = "#999999";

    // linha decorativa

    const linha = document.createElement("div");

    linha.style.width = "35px";
    linha.style.height = "2px";
    linha.style.backgroundColor = "#222222";
    linha.style.margin = "20px 0 25px";
    linha.style.transition = "width 0.2s ease";

    const titulo = document.createElement("h3");

    titulo.textContent = item.titulo;
    titulo.style.fontSize = "20px";
    titulo.style.fontWeight = "700";
    titulo.style.color = "#111111";
    titulo.style.lineHeight = "1.4";
    titulo.style.margin = "0 0 15px";

    const texto = document.createElement("p");

    texto.textContent = item.texto;
    texto.style.fontSize = "14px";
    texto.style.lineHeight = "1.9";
    texto.style.color = "#666666";
    texto.style.margin = "0";

    // Bagui do mouse

    card.addEventListener("mouseenter", function () {

        card.style.transform = "translateY(-7px)";
        card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.08)";
        card.style.borderColor = "#cccccc";

        linha.style.width = "60px";
    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
        card.style.borderColor = "#eeeeee";

        linha.style.width = "35px";
    });

    card.appendChild(numero);
    card.appendChild(linha);
    card.appendChild(titulo);
    card.appendChild(texto);

    envoltorio.appendChild(card);
    listaCuriosidades.appendChild(envoltorio);

    cardsCuriosidades.push(envoltorio);
});

// Animação

const observadorCuriosidades = new IntersectionObserver(
    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                const indice = cardsCuriosidades.indexOf(entrada.target);

                entrada.target.style.transitionDelay =
                    `${(indice % 4) * 0.08}s`;

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";

                observadorCuriosidades.unobserve(entrada.target);
            }
        });

    },
    {
        threshold: 0.1
    }
);

cardsCuriosidades.forEach(function (card) {
    observadorCuriosidades.observe(card);
});

curiosidades.appendChild(detalheCuriosidades);
curiosidades.appendChild(tituloCuriosidades);
curiosidades.appendChild(subtituloCuriosidades);
curiosidades.appendChild(listaCuriosidades);

document.body.appendChild(curiosidades);


// História e o Rodapéeeeeeeeeeeeee

{
    const resumoCorinthians = document.createElement("section");
    resumoCorinthians.setAttribute("aria-labelledby", "titulo-resumo-corinthians");

    Object.assign(resumoCorinthians.style, {
        padding: "clamp(64px, 9vw, 112px) 24px",
        fontFamily: "'Montserrat', sans-serif",
        textAlign: "center"
    });

    const blocoResumo = document.createElement("div");
    blocoResumo.style.maxWidth = "72ch";
    blocoResumo.style.margin = "0 auto";

    const tituloResumo = document.createElement("h2");
    tituloResumo.id = "titulo-resumo-corinthians";
    tituloResumo.textContent = "Mais que um clube, uma história.";
    tituloResumo.style.fontSize = "clamp(32px, 5vw, 56px)";
    tituloResumo.style.lineHeight = "1.12";
    tituloResumo.style.margin = "0 0 32px";

    const historiaResumida = [
        "Em 1910, cinco operários fundaram o Corinthians no Bom Retiro, em São Paulo. O primeiro Campeonato Paulista veio em 1914, com uma campanha invicta. Quatro anos depois, o clube inaugurou seu primeiro campo próprio, a Ponte Grande.",

        "A torcida cresceu até nos anos mais difíceis. Em 1976, a Fiel tomou o caminho do Maracanã para acompanhar a semifinal do Brasileiro contra o Fluminense. No ano seguinte, o Corinthians venceu a Ponte Preta e encerrou quase 23 anos de jejum no Paulista. Nos anos 1980, a Democracia Corinthiana, com jogadores como Sócrates, levou as decisões coletivas para dentro do clube.",

        "Em 1990, o Timão venceu o São Paulo e conquistou seu primeiro Brasileirão. Em 2000, ganhou seu primeiro Mundial de Clubes da FIFA. O rebaixamento de 2007 marcou um dos momentos mais duros da história do clube. A reação veio com o título da Série B em 2008 e a conquista da Copa do Brasil em 2009.",

        "Em 2012, o Corinthians ganhou a Libertadores sem perder um jogo e venceu o Chelsea na final do Mundial. O sétimo título brasileiro veio em 2017. Em 2025, o futebol masculino conquistou a quarta Copa do Brasil, enquanto as Brabas levantaram a taça da Libertadores Feminina pela sexta vez."
    ];

    blocoResumo.appendChild(tituloResumo);

    historiaResumida.forEach((trecho, indice) => {
        const paragrafoResumo = document.createElement("p");
        paragrafoResumo.textContent = trecho;
        paragrafoResumo.style.fontSize = "clamp(16px, 2vw, 18px)";
        paragrafoResumo.style.lineHeight = "1.85";
        paragrafoResumo.style.margin = indice === 0 ? "0" : "16px 0 0";
        paragrafoResumo.style.textAlign = "center";
        blocoResumo.appendChild(paragrafoResumo);
    });

    resumoCorinthians.appendChild(blocoResumo);

    const rodapeCorinthians = document.createElement("footer");
    Object.assign(rodapeCorinthians.style, {
        width: "calc(100% - 48px)",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "28px 0 40px",
        borderTop: "1px solid rgba(128, 128, 128, 0.3)",
        textAlign: "center"
    });

    const fraseRodape = document.createElement("p");
    fraseRodape.textContent = "A história continua nas arquibancadas.";
    fraseRodape.style.fontFamily = "'Great Vibes', cursive";
    fraseRodape.style.fontSize = "clamp(22px, 3vw, 30px)";
    fraseRodape.style.margin = "0";

    rodapeCorinthians.appendChild(fraseRodape);
    document.body.append(resumoCorinthians, rodapeCorinthians);

    const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!movimentoReduzido.matches && "IntersectionObserver" in window) {
        const observadorResumo = new IntersectionObserver(([entrada]) => {
            if (entrada.isIntersecting) {
                blocoResumo.animate(
                    [
                        { opacity: 0.2, transform: "translateY(16px)" },
                        { opacity: 1, transform: "translateY(0)" }
                    ],
                    { duration: 650, easing: "ease-out" }
                );
                observadorResumo.disconnect();
            }
        });

        observadorResumo.observe(tituloResumo);
    }
}

// Botão de modo escuro
{
    const estilosTema = document.createElement("style");
estilosTema.textContent = `
        .botao-tema {
            position: fixed;
            top: 16px;
            right: 16px;
            z-index: 100;
            padding: 10px 14px;
            border: 1px solid #d9d9d9;
            border-radius: 999px;
            background: #ffffff;
            color: #171717;
            font: 600 13px Montserrat, sans-serif;
            cursor: pointer;
        }

        .botao-tema:hover { background: #f2f2f2; }
        .botao-tema:focus-visible {
            outline: 2px solid currentColor;
            outline-offset: 3px;
        }

        body[data-tema="escuro"] {
            background-color: #101010 !important;
            color: #f4f4f4;
            color-scheme: dark;
        }

        body[data-tema="escuro"] .titulo-intro-tema {
            background-color: #101010 !important;
            color: #f4f4f4 !important;
        }

        body[data-tema="escuro"] :is(h2, h3) { color: #f4f4f4 !important; }
        body[data-tema="escuro"] p { color: #c7c7c7 !important; }

        body[data-tema="escuro"] .card-tema {
            background-color: #1c1c1c !important;
            border-color: #383838 !important;
        }

        body[data-tema="escuro"] .card-tema:hover { border-color: #6b6b6b !important; }
        body[data-tema="escuro"] .card-tema > div { background-color: #dedede !important; }

        body[data-tema="escuro"] .botao-tema {
            background-color: #1c1c1c;
            color: #f4f4f4;
            border-color: #505050;
        }

        body[data-tema="escuro"] .botao-tema:hover { background-color: #2b2b2b; }
`;
    document.head.appendChild(estilosTema);

    header.classList.add("titulo-intro-tema");

    listaCuriosidades.querySelectorAll(":scope > div > div").forEach((card) => {
        card.classList.add("card-tema");
    });

    const botaoTema = document.createElement("button");
    botaoTema.type = "button";
    botaoTema.className = "botao-tema";
    botaoTema.textContent = "Modo escuro";
    document.body.appendChild(botaoTema);

    const escudoOriginal = escudo.src;
    const escudoClaro = new Image();
    let escudoClaroCarregado = false;
    let modoEscuro = false;

    try {
        modoEscuro = localStorage.getItem("tema-corinthians") === "escuro";
    } catch {
    }

    function aplicarTema() {
        document.body.dataset.tema = modoEscuro ? "escuro" : "claro";
        botaoTema.setAttribute("aria-pressed", String(modoEscuro));

        escudo.src = modoEscuro && escudoClaroCarregado ? escudoClaro.src : escudoOriginal;
        escudo.style.filter = modoEscuro && !escudoClaroCarregado
            ? "grayscale(1) invert(1)"
            : "";
    }

    escudoClaro.onload = () => {
        escudoClaroCarregado = true;
        aplicarTema();
    };
    escudoClaro.src = "./img/escudo-claro.png";

    botaoTema.addEventListener("click", () => {
        modoEscuro = !modoEscuro;
        aplicarTema();

        try {
            localStorage.setItem("tema-corinthians", document.body.dataset.tema);
        } catch {
        }
    });

    aplicarTema();
}
