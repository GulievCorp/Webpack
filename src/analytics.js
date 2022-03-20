function createAnalytics() {
    let counter = 0;
    let isDestoryed = false

    const listener = () => counter++

    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            isDestoryed = true;
        },
        getClicks() {
            if(isDestoryed){
                return 'Alaytics is destroyed'
            }
            return counter
        }
    }
}

window.analytics = createAnalytics();