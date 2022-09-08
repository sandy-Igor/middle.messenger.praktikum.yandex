export function setScrollBottom(elem: HTMLElement) {
    elem.scrollTop = elem.scrollHeight - elem.clientHeight;
}