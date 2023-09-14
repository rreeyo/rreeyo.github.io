const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        removeActiveClass()
        faq.classList.add('active')
    })
});

function removeActiveClass(){
    faqs.forEach(faq => {
        faq.classList.remove('active')
    });
}