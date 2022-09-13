export function isFirstMessVisible() {

    const coords = document.querySelector('.messages-container')?.firstElementChild?.getBoundingClientRect();
    const windowHeight = document.querySelector('.messages-container')?.clientHeight;

    return coords!.top > 0 && coords!.top < windowHeight!
}
