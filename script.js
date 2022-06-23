'use strict';

const toc = document.querySelector('.toc');

// let free = 5;
// console.log(free)

toc.addEventListener('click', e => {
    if(e.target.classList.contains('list-item')){
        const ul = e.target.closest('.list')
        const siblings = ul.querySelectorAll('.list-item')

        siblings.forEach( el => {
            if(el != e.target){
                el.querySelector('.child-list').style.display = 'none';
                el.querySelector('.arrows').classList.remove('active');
                el.style.color = '#6d6d6d'
            }
            else {
                el.style.color = 'black';
                
                if(el.querySelector('.arrows').classList.contains('active')) {
                    el.querySelector('.child-list').style.display = 'none';
                    el.querySelector('.arrows').classList.remove('active');
                    el.style.color = '#6d6d6d';
                }
                else {
                    el.querySelector('.child-list').style.display = 'block';
                    el.querySelector('.arrows').classList.add('active');
                }
                
            }
        });
    }
})