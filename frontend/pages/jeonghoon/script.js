window.addEventListener('load', () => {
    
    document.body.style.opacity = '1'; //페이드


    document.querySelectorAll('.info-box').forEach((box, index) => {
        setTimeout(() => {
            box.classList.add('show');
        }, index * 200); //박스
    });
});


document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});