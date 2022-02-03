// const btn = document.querySelector('.btn')

// function toggleMenu() {
//     let toggle = document.querySelector('.grid-container')
//     if (toggle) {
//         toggle.classList.replace('grid-container', 'grid-container-toggle');
//         // const elementAside = document.querySelector('aside')
//         // elementAside.remove()
//     }else{
//         const header = document.querySelector('header')
//         const aside = document.createElement('aside')
//         // aside.classList.add('grid-sidebar')
//         // aside.innerHTML = "<p>Aside</p>" 
//         header.insertAdjacentElement('afterend', aside)

//         toggle = document.querySelector('.grid-container-toggle')
//         toggle.classList.replace('grid-container-toggle', 'grid-container');

//     }
// }

// btn.addEventListener('click', toggleMenu)



const btn = document.querySelector('.btn')

function toggleMenu() {
    let toggle = document.querySelector('.grid-container')
    if (toggle) {
        toggle.classList.toggle('grid-container');
        const div = document.querySelector('div')
        div.classList.add('grid-container-toggle')
        // const grid = document.classList.add('grid-container-toggle')
        // const elementAside = document.querySelector('aside')
        // elementAside.remove()
    }else{
        toggle = document.querySelector('.grid-container-toggle')
        toggle.classList.toggle('grid-container-toggle');
        const div = document.querySelector('div')
        div.classList.add('grid-container')
        // const header = document.querySelector('header')
        // const aside = document.createElement('aside')
        // // aside.classList.add('grid-sidebar')
        // // aside.innerHTML = "<p>Aside</p>" 
        // header.insertAdjacentElement('afterend', aside)

        // toggle = document.querySelector('.grid-container-toggle')
        // toggle.classList.replace('grid-container-toggle', 'grid-container');

    }
}

btn.addEventListener('click', toggleMenu)