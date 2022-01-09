let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = 2;


    const container = document.querySelector(".header-slider-conteiner");
    const track = document.querySelector(".header-slider-track");
    const btnPrev = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");
    const items = document.querySelectorAll(".slider-item");
    const itemCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;
    items.forEach((item) =>{
        item.style.minWidth = `${itemWidth}px`;
    });
    
    btnNext.addEventListener('click', () => {
        const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth; 
        if (position == -((itemWidth*itemCount)-(slidesToShow*itemWidth))) {
            position = 0;
        } else {
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        }
        setPosition();
        checkBtns();
    });
    btnPrev.addEventListener('click',() => {
        const itemsLeft = Math.abs(position) / itemWidth;
        if (position === 0) {
            position = -((itemWidth*itemCount)-(slidesToShow*itemWidth));
        } else {
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        }
        setPosition()
        checkBtns();
    });

    const setPosition = () => { 
        track.style.transform = `translateX(${position}px)`;
    }
    const checkBtns = () => {
        // btnPrev.disabled = position === 0;
        // btnNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth;
    }
    checkBtns();



   
    /// -------  динамичные скролы картинок Picture-----///
    
    const seeMore = document.querySelector(".maine-gallery-seeMore-button");
    const pictureBox = document.querySelector('.maine-gallery-picture');
    seeMore.addEventListener('click', () => {
        pictureBox.classList.toggle('pictureVisible');
        if (pictureBox.classList.contains('pictureVisible') == true) {
            seeMore.innerHTML = 'Scroll Back';
        }
        else {
            seeMore.innerHTML = 'See More';
        }
    })
    /// -------  динамичные скролы картинок Picture-----///

     /// -------  делаем ширину больше в картинках-----///

     const picture = document.querySelectorAll(".maine-gallery-picture-row");
        if (pictureBox.clientWidth >= 900) {
            for (let i = 0; i < picture.length; i++) {
                if ((i == 0) || (i == 1)) {
                    picture[i].style.minWidth = picture[i].clientWidth+(picture[i].clientWidth/1.8)+"px";
                }
        }}
 /// -------  делаем ширину больше в картинках-----///