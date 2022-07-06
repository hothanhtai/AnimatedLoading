const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const namer = document.getElementById('namer')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 3000);

function getData() {
    header.innerHTML = ' <img src="./img/bg1.jpg" alt="">'
    title.innerHTML = 'Hi there,I\'m Tai'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis officiis eos.'
    profile_img.innerHTML = ' <img src="./img/avtt.jpg" alt="">'
    namer.innerHTML = 'Ho Thanh Tai'
    date.innerHTML = 'August 18,2001'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}