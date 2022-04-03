export function startTransition() {
    let item = document.getElementById('main')
    setTimeout(() => {
        item.classList.add('active')
    }, 1)
}

export function exitTransition() {
    let item = document.getElementById('main')
    item.classList.remove('active')
}