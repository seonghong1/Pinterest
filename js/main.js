window.addEventListener('load', function () {

    var elem = document.querySelector('section');
    const iso = new Isotope(elem, {
        // options
        itemSelector: 'article',
        layoutMode: 'masonry'
    });

    const filterBtn = document.querySelectorAll('.btns li')


    //for of문
    for (let item of filterBtn) {
        console.log('밖의 for문', item)
        item.addEventListener('click', function (e) {
            e.preventDefault()
            for (let item of filterBtn) {
                //배열 전체의 요소에 적용
                item.classList.remove('on')
                console.log('안의 for문', item)
            }
            //클릭한 요소
            e.currentTarget.classList.add('on')
            //클릭한 버튼에 있는 a태그의 href값을 갖고온다.
            const filtering = e.currentTarget.querySelector('a').getAttribute('href')
            console.log(filtering)
            //자바스크립트일경우 iso.arrange({})
            iso.arrange({ filter: filtering })
        })
    }
    /* 
     //for문
     for(let i = 0; i< filterBtn.length; i++){
         filterBtn[i].addEventListener('click',(e)=>{
             for(let i = 0; i< filterBtn.length; i++){
                 filterBtn[i].classList.remove('on')
             }
             e.currentTarget.classList.add('on')
         })
     }
 
     */

    //article 클릭시 팝업창 
    const items = document.querySelectorAll('article')
    const pop = document.querySelector('#popup')
    const close = document.querySelector('.close')
    const winW = document.body.clientWidth

    close.addEventListener('click', function () {
        pop.classList.remove('on')
    })
    window.addEventListener('resize',()=>{
        if(winW < 600){
            pop.classList.remove('on')
          
        }
        console.log(winW)
    })
    
    
    if (winW > 600) {
        for (let item of items) {
            item.addEventListener('click', function (e) {
                const h2 = e.currentTarget.querySelector('h2').innerText
                const p = e.currentTarget.querySelector('p').innerText
                pop.classList.toggle('on')
                const imgSrc = e.currentTarget.querySelector('img').getAttribute('src')
                pop.querySelector('img').setAttribute('src', imgSrc)
                pop.querySelector('h2').innerText = h2
                pop.querySelector('p').innerText = p
            })
        }
    }

})