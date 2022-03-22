function createAnalytics() {
    let counter = 0;
    let destoryed = false

    const listener = () => counter++

    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            destoryed = true;
        },
        getClicks() {
            if(destoryed){
                return `Alaytics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}

window.analytics = createAnalytics();