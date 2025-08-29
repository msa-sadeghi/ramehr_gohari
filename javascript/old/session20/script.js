let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];


let searchInputElem = document.querySelector('input')
let autocomBox = document.querySelector('.autocom-box')
let searchInputWrapper = document.querySelector('.search-input')

searchInputElem.addEventListener('keyup', function(){
    let searchvalue = searchInputElem.value
    if (searchvalue){
        searchInputWrapper.classList.add('active')
        let filteredeWords = suggestions.filter(function(word){
            return word.toLocaleLowerCase().startsWith(searchvalue.toLocaleLowerCase())
        })
        suggestionWordsgenerator(filteredeWords)
    }else{
        searchInputWrapper.classList.remove('active')
    }
})
function suggestionWordsgenerator(wordsArray){
    let listItemArray = wordsArray.map(function(word){
        return '<li>' + word + '</li>'
    })
    let result = listItemArray.join('')
    autocomBox.innerHTML = result


    let items = autocomBox.querySelectorAll('li')
    items.forEach(function(li){
        li.addEventListener('click', function(e){
            searchInputElem.value = e.target.textContent
            searchInputWrapper.classList.remove('active')

        })
    })
}