const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que vai plantar você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Melhor Produção",
                afirmacao: "afirmação"
            },
            {
                texto: "Baixo Custo",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial Qual escolhavocê toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na melhor produção para queajude a encontrar informações relevantes para o trabalho e explique o melhor caminho.",
                afirmacao: "afirmação"
            },
            {
                texto: "Algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Essa prática econômica é baseada no uso do solo para produção de vegetais, e pode ser realizada de diversas formas",
        alternativas: [
            {
                texto: "As condições de solo e de clima definem a forma e metodologia de produção. Já o fator econômico é relacionado ao valor da terra e ao nível tecnológico aplicado na propriedade. Esse nível tecnológico influencia na mão de obra da fazenda.",
                afirmacao: "afirmação"
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "No Brasil, essa diversidade se dá principalmente pela extensão territorial. O país  possui um clima variado e características muito distintas entre uma região e outra.",
        alternativas: [
            {
                texto: "A agricultura extensiva é o sistema de produção agrícola tradicional, que utiliza técnicas rudimentares e de baixa tecnologia.",
                afirmacao: "afirmação"
            },
            {
                texto: "Somado a isso, o uso de insumos agrícolas não é comum, o que torna a produtividade baixa.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "A agricultura intensiva (ou agricultura moderna) é caracterizada pelos altos índices de produtividade e capital de investimento. ",
        alternativas: [
            {
                texto: "Nesse tipo de agricultura, os meios de produção são usados de maneira intensiva, e normalmente apenas um tipo de cultura é produzida em larga escala.",
                afirmacao: "afirmação"
            },
            {
                texto: "Ao contrário da agricultura extensiva, ela utiliza insumos agrícolas. Além disso, esse modelo não adota a rotação de terra, o que pode gerar impacto no ambiente e no solo.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function () {
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();
