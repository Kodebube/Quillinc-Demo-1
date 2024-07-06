// Light Dark Mode Toggle

const sun = document.querySelector('#Toggle-Switch');

console.log(sun.innerHTML)
sun.addEventListener('click', Modes)

function Modes() {
    if (sun.innerHTML == '<i class="fa fa-sun text-warning" title="Light Mode"></i>') {
        sun.innerHTML = '<i class="fa fa-moon text-white" title="Dark Mode"></i>'
        document.getElementById('body').classList = 'text-white bg-black'
        document.getElementById('Quilinc').classList = 'text-white'
        document.getElementById('QuilincII').classList = 'text-white'
        document.getElementById('nav').classList = 'navbar navbar-light bg-dark fw-bolder text-light'
        document.getElementById('footer').classList = 'bg-dark text-light'
        document.getElementById('offcanvas-header').classList = 'offcanvas-header bg-dark text-white'
        document.getElementById('offcanvas-body').classList = 'offcanvas-body bg-dark text-white'
    }
    else if (sun.innerHTML == '<i class="fa fa-moon text-white" title="Dark Mode"></i>') {
        sun.innerHTML = '<i class="fa fa-sun text-warning" title="Light Mode"></i>'
        document.getElementById('body').classList = 'text-black bg-white'
        document.getElementById('Quilinc').classList = 'text-black'
        document.getElementById('QuilincII').classList = 'text-black'
        document.getElementById('nav').classList = 'navbar navbar-light bg-light fw-bolder text-black'
        document.getElementById('footer').classList = 'bg-light text-black'
        document.getElementById('offcanvas-header').classList = 'offcanvas-header'
        document.getElementById('offcanvas-body').classList = 'offcanvas-body'
    }
};



// // Light Dark Mode Toggle

// const sun = document.querySelector('#btnSwitch');

// sun.addEventListener('click', Modes)

// function Modes() {
//     if (sun.innerHTML == '<i class="bi bi-sun-fill text-warning p-3 mt-5 fs-4"></i>') {
//         sun.innerHTML = '<i class="bi bi-moon-fill text-white p-3 mt-5 fs-4"></i>'
//         document.getElementById('dash-bg').classList = 'd-flex flex-column flex-shrink-0 p-3 text-white bg-black'
//         document.getElementById('dash-bg2').classList = 'row px-2 px-md-5 bg-dark text-light float-end'
//     }
//     else if (sun.innerHTML == '<i class="bi bi-moon-fill text-white p-3 mt-5 fs-4"></i>') {
//         sun.innerHTML = '<i class="bi bi-sun-fill text-warning p-3 mt-5 fs-4"></i>'
//         document.getElementById('dash-bg').classList = 'd-flex flex-column flex-shrink-0 p-3 text-white bg-black'
//         document.getElementById('dash-bg2').classList = 'row px-2 px-md-5 bg-light text-dark float-end'
//         // row px-2 px-md-5 bg-light text-dark float-end
//     }
// };

// console.log('Nigga')