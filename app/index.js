const productImage = document.getElementById("image-product");
const boxProduct = document.getElementById('box-product');
const boxContainer = document.querySelector('.box-container');

console.log('elemens', boxContainer) 


productImage.addEventListener("mousemove", function(e) {
  createBox(e);
});  

const createBox = (element) => {
  const srcElement = element.srcElement.currentSrc; 
  const positionX = element.offsetX/element.currentTarget.offsetWidth*100;  
  const postionY = element.offsetY/element.currentTarget.offsetHeight*100;
  
  boxContainer.style.opacity = 1;
  
  boxProduct.style.backgroundImage = `url(${srcElement})`
  boxProduct.style.backgroundPosition = `${positionX}% ${postionY}%`
}

productImage.addEventListener("mouseout", function(e) {
  boxContainer.style.opacity = 0;
});

productImage.addEventListener("click", function(e) {
});