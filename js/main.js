const deliverybutton = document.querySelector('.delivery-button');
deliverybutton.addEventListener('click', function (e) {
    const el = document.querySelector('.delivery-info');
    const attribut = el.getAttribute('data-delivery');
    if (attribut === "open") {
        el.setAttribute('data-delivery', 'close');
        console.log (el.getAttribute('data-delivery'));
    }

});