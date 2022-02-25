function initModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar')
}

const subscriber = document.getElementById(buttonSub);
subscriber.addEventListener('click', () => initModal('modalSubscription'));