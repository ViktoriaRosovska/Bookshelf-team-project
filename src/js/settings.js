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


const delate = document.querySelector('.js-photo-delate')
const input = document.querySelector('.input-photo-save')

input?.addEventListener('click', save)
 delate?.addEventListener('click', delatePhoto)

 function delatePhoto(params) {
    image1.src = localStorage.removeItem('myImage')
}
 
function save ()  {
    let f = file1.files[0];
    if (f) {
        image1.src = URL.createObjectURL(f);
        localStorage.setItem('myImage', image1.src);
    }

    image1.src = localStorage.getItem('myImage')
}



