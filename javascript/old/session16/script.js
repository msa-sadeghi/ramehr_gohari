let imageElem = document.querySelector('img')
let nextBtn = document.querySelector('.next')
let imageArray = [
    'images/1.jpg', 'images/2.png', 'images/3.jpg'
]

let imageIndex = 0


function nextImage(){
    imageIndex++;
    if(imageIndex > imageArray.length - 1){
        imageIndex = 0
    }
    imageElem.setAttribute('src', imageArray[imageIndex])
    console.log(imageIndex)
}

function prevImage(){
    
}

setInterval(nextImage, 4000)
nextBtn.addEventListener('click', nextImage)