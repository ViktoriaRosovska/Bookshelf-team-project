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

 delate.addEventListener('click', delatePhoto)

 function delatePhoto(params) {
    image1.src = localStorage.removeItem('myImage')
}
 
// function readURL(input) {
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();

//             reader.onload = function (e) {
//                 $('#image1').attr('src', e.target.result);

//                 var widthImg = $('#image').width();
//                 console.log("widthImg = " + widthImg);
//                 var widthContent = 342;
//                 console.log("widthContent = " + widthContent);

//                 //если ширина картинки больше, чем наш контент, то добавляем коеффициент сжатия
//                 if (+widthImg > +widthContent) {
//                     var koef = +widthImg / +widthContent;
                    
//                     $("#koef").val(Math.round(koef*1000));
//                     $('#image1').attr('src', e.target.result).css('width', '100%');
//                 }
//                 else {

//                 }
//                 //addJCrop(1);
//                 //jcrop_api.animateTo(getRandom());
//             }
//             reader.readAsDataURL(input.files[0]);
//         }
//     }

// $("#file1").change(function () {
//         $('#image1').attr('src', "~/Content/nophoto.png");
//         readURL(this);

//         //$('input[type="file"]').hide();
//         //$('.buttonSubmitImg').show();
//         //CropResult.isUpload = true;
//     });

