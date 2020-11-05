document.addEventListener('DOMContentLoaded', function(){
    //search imitation
    const headerBtn = document.querySelector('.header__button'),
          headerInput = document.querySelector('.header__input'),
          infoBlock = document.querySelector('.info'),
          sorryBlock = document.querySelector('.sorry'),
          reportBlock = document.querySelector('.report');

    headerBtn.addEventListener('click', function(){
        let search = headerInput.value.toUpperCase();
        if (search && (search.includes('O') || search.includes('A') || search.includes('B'))){
            if (!sorryBlock.classList.contains('dispNone')){
                sorryBlock.classList.add('dispNone');
            }
            infoBlock.classList.remove('dispNone');
        }else{
            sorryBlock.classList.remove('dispNone');
            if (!infoBlock.classList.contains('dispNone')){
                infoBlock.classList.add('dispNone');
            }
        }
        if(!reportBlock.classList.contains('dispNone')){
            reportBlock.classList.add('dispNone');
        }
    })

    //report search imitation
    const formBtn = document.querySelector('.info__form-submit'),
          formRadios = document.querySelectorAll('.info__form-input'),
          reportTitle = document.querySelector('.report__title');
          
    
    formBtn.addEventListener('click', function(e){
        e.preventDefault();
        let radio = null;

        for (let i = 0; i < formRadios.length; i++){
            if (formRadios[i].checked){
                radio = formRadios[i];
            }
        }

        if (radio) {
            reportBlock.classList.remove('dispNone');
            reportTitle.textContent = `${radio.id} report`;
        }
    })
})