let imagesLazy = document.querySelectorAll("[data-src]");

let imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

let imageObserver = new IntersectionObserver((images, imageObserver) => {
    images.forEach(image => {
        if(!image.isIntersecting) {
            return;
        }
        else {
            imagePreload(image.target);
            imageObserver.unobserve(image.target);
        }
    })
}, imageOptions);

function imagePreload(image) {
    let source = image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    }
    if (!source) {
        return;
    }
    image.src = source;
};

imagesLazy.forEach(image => {
    imageObserver.observe(image);
});


/***********************************EXAMPLE CODE*********************************************/
// This function uses JS to load the images from the data-src only when the user is scrolled close enough to load them, this keeps all the images from loading at once.
// if('IntersectionObserver' in window) {
//     const observer = new IntersectionObserver((items, observer) => {
//         items.forEach((item) => {
//         if(item.isIntersecting) {
//             loadImages(item.target);
//             observer.unobserve(item.target);
//         }
//         });
//     }, imageOptions);
//     imagesLazy.forEach((img) => {
//         observer.observe(img);
//     });
//     }
// else {
//     imagesLazy.forEach((img) => {
//         loadImages(img);
//     });
// }


// This function uses JS to load the images from the data-src only after the rest of the page has finished loading, the placeholder will display until then.
// let imagesToLoad = document.querySelectorAll('img[data-src]');
// const loadImages = (image) => {
//   image.setAttribute('src', image.getAttribute('data-src'));
//   image.onload = () => {
//     image.removeAttribute('data-src');
//   };
// };
// imagesToLoad.forEach((img) => {
//     loadImages(img);
// });
/***********************************EXAMPLE CODE END******************************************/