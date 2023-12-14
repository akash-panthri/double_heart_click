const loveme = document.querySelector('.loveme')
const times = document.querySelector('#times')

let clicktime = 0
let timesClicked = 0
loveme.addEventListener('click', (e)=>{
    if (clicktime ===0){
        clicktime = new Date().getTime()
    }
    else{
        if((new Date().getTime() - clicktime)<800){
createHeart(e)
clicktime =0
        }else{
            clicktime = new Date().getTime()
        }
    }
})

const createHeart = (e)=>{
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')


    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop
   

    const xInside = x - leftOffset
    const yInside = y - topOffset


    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveme.appendChild(heart)
    times.innerText = ++timesClicked
    setTimeout(()=>heart.remove(),1000)
}