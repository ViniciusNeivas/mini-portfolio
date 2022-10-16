// Objetivo - quando clicarmos na aba temos que mostrar o conteudo da aba que foi clicada pelo usuario e esconderoconteudo da aba anterior

// - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
// - passo 2 - dar um jeito de identificar o clique no elemento da aba
// - passo 3 - quando o usuário clicar, desmarcar a aba selecionada
// - passo 4 - marcar a aba clicada como selecionado
// - passo 5 - esconder o conteúdo anterior
// - passo 6 - mostrar o conteúdo da aba selecionada

// - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

const tabs = (document.querySelectorAll(".tab"));

tabs.forEach(tab => {
    // - passo 2 - dar um jeito de identificar o clique no elemento da aba
    tab.addEventListener("click", function () {

        if (tab.classList.contains("selected")) {
            return;
        }

        toSelectTab(tab);

        toShowInformationTab(tab);
    });
});

function toSelectTab(tab) {
    // - passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const selectedTab = document.querySelector(".tab.selected");
    selectedTab.classList.remove("selected")

    // - passo 4 - marcar a aba clicada como selecionado
    tab.classList.add("selected")

}

function toShowInformationTab(tab) {
    // - passo 5 - esconder o conteúdo anterior

    const informationSelected = document.querySelector(".information.selected");
    informationSelected.classList.remove("selected");

    // - passo 6 - mostrar o conteúdo da aba selecionada

    const idElementTabInformation = `informations-${tab.id}`
    const informationToShow = document.getElementById(idElementTabInformation)
    informationToShow.classList.add("selected")

}