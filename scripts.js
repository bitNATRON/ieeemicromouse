// toggle hambuerger
function toggleMobileMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}

// função de mostrar integrante, patrocionio ou juiz com aniação drawer
function showIntegrante(id, event) {
    event.preventDefault();
    var integrantes = document.getElementsByClassName('quem-somos-integrante');
    var integranteAtual = document.getElementById(id);

    // verifica se o integrante atual já está ativo
    var isActive = integranteAtual.classList.contains('active');

    // fecha gavetas
    for (var i = 0; i < integrantes.length; i++) {
        integrantes[i].classList.remove('active', 'drawer');
    }

    // abre integrante não ativo
    if (!isActive) {
        integranteAtual.classList.add('active', 'drawer');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // elemento do calendário na variavel
    const calendarEl = document.getElementById('calendar');

    // cria o calendário
    const calendar = new FullCalendar.Calendar(calendarEl, {
        // config
        initialView: 'dayGridMonth',
        initialDate: '2025-05-01', // Define a data inicial para maio de 2025
        events: [
            {
                title: 'Início da Competição',
                start: '2025-05-29',
                description: 'Abertura oficial da competição Micro Mouse.'
            },
            {
                title: 'Rodada Eliminatória',
                start: '2025-05-30',
                description: 'Primeira rodada eliminatória da competição.'
            },
            {
                title: 'Final da Competição',
                start: '2025-05-31',
                description: 'Evento final da competição, onde será decidido o vencedor.'
            }
        ],
        // função ao clicar em um evento do calendário
        eventClick: function(info) {
            alert('Evento: ' + info.event.title + '\n' + 'Descrição: ' + info.event.extendedProps.description);
        }
    });

    calendar.render();
});
