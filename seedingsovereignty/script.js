


let currentIndex = 0;

function move(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    
    // Calculate the max index based on the number of visible items (responsive)
    let visibleItems = window.innerWidth <= 768 ? 1 : 2; // 1 item for mobile, 2 items for desktop
    const maxIndex = totalItems - visibleItems;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    const offset = -currentIndex * (100 / visibleItems); // Adjust offset based on number of visible items
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}