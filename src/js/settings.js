const settingsBtn = document.querySelector('.settings');
const closeBtn = document.querySelector('.close-modal-settings');
if (settingsBtn) {
    settingsBtn.addEventListener('click', onSettingModalShow); 
}

if (closeBtn) {
    closeBtn.addEventListener('click', onSettingsModalClose);
}

function onSettingsModalClose() {
     document.querySelector('.modal-settings').classList.add('is-hidden-btn');
    document.querySelector('.modal-settings').style.display = 'none';
}


function onSettingModalShow() {
    document.querySelector('.modal-settings').classList.remove('is-hidden-btn');
    document.querySelector('.modal-settings').style.display = 'block';
}


