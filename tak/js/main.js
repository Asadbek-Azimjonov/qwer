'use strict';
(function(){
    let header=document.querySelector('.header')
    window.onscroll=()=>{
        if(window.pageYOffset>60){
            header.classList.add('tyt')
        }
        else{
            header.classList.remove('tyt')
        }
    }
}())