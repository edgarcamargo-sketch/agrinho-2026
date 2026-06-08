// Aguarda o DOM carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Elementos do DOM
    const btnCalcular = document.getElementById("btn-calcular");
    const inputVerdes = document.getElementById("residuos-verdes");
    const inputCastanhos = document.getElementById("residuos-castanhos");
    const resultadoSection = document.getElementById("resultado-section");
    const resultadoTexto = document.getElementById("resultado-texto");
    const dicaSustentavel = document.getElementById("dica-sustentavel");
    const mensagemBoasVindas = document.getElementById("mensagem-boas-vindas");

    // 2. Funcionalidade Criativa: Mensagem baseada no horário do usuário
    function atualizarMensagemHorario() {
        const hora = new Date().getHours();
        let saudacao = "";

        if (hora >= 5 && hora < 12) {
            saudacao = "Bom dia, produtor sustentável!";
        } else if (hora >= 12 && hora < 18) {
            saudacao = "Boa tarde! Que tal equilibrar seus resíduos hoje?";
        } else {
            saudacao = "Boa noite! Cuidar do solo é planejar o amanhã.";
        }
        
        mensagemBoasVindas.textContent = `${saudacao} Vamos calcular a saúde da sua compostagem.`;
    }

    // 3. Lógica da Calculadora e Validação de Campos
    function calcularCompostagem() {
        // Validação básica se os campos estão vazios ou negativos
        const pesoVerdes = parseFloat(inputVerdes.value);
        const pesoCastanhos = parseFloat(inputCastanhos.value);

        if (isNaN(pesoVerdes) || isNaN(pesoCastanhos) || pesoVerdes <= 0 || pesoCastanhos <= 0) {
            alert("Por favor, insira valores válidos e maiores que zero.");
            return;
        }

        // A proporção ideal de compostagem em peso (massa) é de aproximadamente 
        // 2 a 3 partes de Castanhos (Carbono) para 1 parte de Verdes (Nitrogênio)
        const proporcao = pesoCastanhos / pesoVerdes;

        // Revela a seção de resultados removendo a classe utilitária do CSS
        resultadoSection.classList.remove("hidden");

        // Processamento lógico da resposta
        if (proporcao >= 2 && proporcao <= 3) {
            resultadoTexto.innerHTML = `<strong>Proporção Perfeita!</strong> Sua relação atual é de ${proporcao.toFixed(1)}:1.`;
            dicaSustentavel.textContent = "Excelente! Esse equilíbrio garante que a decomposição ocorra sem mau cheiro e produza um adubo rico em nutrientes, protegendo o meio ambiente.";
            dicaSustentavel.style.borderLeftColor = "var(--verde-claro)";
        } else if (proporcao < 2) {
            resultadoTexto.innerHTML = `<strong>Excesso de Nitrogênio (Verdes)!</strong> Sua relação atual é de ${proporcao.toFixed(1)}:1.`;
            dicaSustentavel.textContent = "Alerta: Muito material verde pode gerar mau cheiro e compactação. Adicione mais folhas secas, serragem ou palha (Castanhos) para equilibrar.";
            dicaSustentavel.style.borderLeftColor = "#f44336"; // Vermelho alerta
        } else {
            resultadoTexto.innerHTML = `<strong>Excesso de Carbono (Castanhos)!</strong> Sua relação atual é de ${proporcao.toFixed(1)}:1.`;
            dicaSustentavel.textContent = "Alerta: Muito material castanho faz com que a decomposição fique extremamente lenta. Adicione restos de alimentos ou esterco (Verdes) para acelerar o processo.";
            dicaSustentavel.style.borderLeftColor = "#ff9800"; // Laranja alerta
        }
    }

    // Event Listeners (Gatilhos de interação)
    btnCalcular.addEventListener("click", calcularCompostagem);
    
    // Execução inicial
    atualizarMensagemHorario();
});