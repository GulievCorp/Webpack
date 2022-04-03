import * as $ from 'jquery';

function createAnalytics() {
    let counter = 0;
    let destoryed = false

    const listener = () => counter++

    $document.on('click', listener);

    return {
        destroy() {
            $document.off('click', listener);
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