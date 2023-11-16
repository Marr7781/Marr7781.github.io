// ! Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop
    const totop = document.getElementById('totop')
    // console.log(fixedNav)
    // console.log(pageYOffset)
    
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
        totop.classList.remove('hidden')
        totop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        totop.classList.add('hidden')
        totop.classList.remove('flex')
    }
}

// ! Hamburger
const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('nav_menu')
console.error(hamburger)
console.error(navMenu)

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')

    if(hamburger.classList.contains('hamburger-active')){
        navMenu.classList.remove('hidden')
    } else {
        navMenu.classList.add('hidden')
    }
    console.error('clicked!')
})

//! Hamburger click anywhere!

window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

//! Dark Mode



// ! Self Gallery Arrow Up-Down
const svg_div = document.getElementById('div_svg')
const arrow = svg_div.children[0]
const parent = svg_div.parentNode
const picture = parent.children[1]

console.log(picture)
console.log(arrow)
console.log(svg_div)

arrow.addEventListener('click', function(){
    picture.classList.toggle('picture-active')
    svg_div.classList.toggle('svg-div-active')
    arrow.classList.toggle('svg-arrow-up-active')
})
// ____________________

const svg_div2 = document.getElementById('div_svg2')
const arrow2 = svg_div2.children[0]
const parent2 = svg_div2.parentNode
const picture2 = parent2.children[1]

arrow2.addEventListener('click', function(){
    picture2.classList.toggle('picture-active')
    svg_div2.classList.toggle('svg-div-active')
    arrow2.classList.toggle('svg-arrow-up-active')
})

// __________________________

const svg_div3 = document.getElementById('div_svg3')
const arrow3 = svg_div3.children[0]
const parent3 = svg_div3.parentNode
const picture3 = parent3.children[1]

arrow3.addEventListener('click', function(){
    picture3.classList.toggle('picture-active')
    svg_div3.classList.toggle('svg-div-active')
    arrow3.classList.toggle('svg-arrow-up-active')
})

// _________________________


const svg_div4 = document.getElementById('div_svg4')
const arrow4 = svg_div4.children[0]
const parent4 = svg_div4.parentNode
const picture4 = parent4.children[1]

arrow4.addEventListener('click', function(){
    picture4.classList.toggle('picture-active')
    svg_div4.classList.toggle('svg-div-active')
    arrow4.classList.toggle('svg-arrow-up-active')
})


//! Dark Mode
window.onload = function() {
    const checkbox = document.getElementById('toggle')
    const toggleCircle = document.getElementById('toggle-circle')
    const html = document.querySelector('html')
    
    console.log(checkbox)
    console.log(toggleCircle)
    
    
    checkbox.addEventListener('click', function(){
        if(this.checked){
            toggleCircle.classList.remove('translate-x-4')
            html.classList.remove('dark')
        } else {
        toggleCircle.classList.add('translate-x-4')
        html.classList.add('dark')
        }
    })
    }