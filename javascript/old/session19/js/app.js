let productsContainer = document.querySelector('.container')
let productsArray =[
    {id:1, title:'Blue Shoe', price:100,img:'images/1.png'},
    {id:2, title:'Green Shoe', price:90,img:'images/2.png'}
]

productsArray.forEach(function(product){
    productsContainer.insertAdjacentHTML('beforeend',
        '<div class="product-card"><h1>' + product.title + 
        '</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p>'+
        '<div class="product-pic" style="background-image: url('+ product.img + ');"></div>'+
        '<div class="product-info"><div class="product-price">$' + product.price + 
        '</div><a href="product.html?id=" + product.id + " class="product-button">See More</a></div></div></div>'
        
    )
})