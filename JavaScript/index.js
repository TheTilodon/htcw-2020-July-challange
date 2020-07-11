$(function () {
    $('.regexInput').each((index, element) => {
        console.log(element);
        let $element = $(element);
        let regExp = new RegExp($element.data('regex'), 'ig');
        $element.on('keyup', (elm) => {
                doRegEx(elm.target, regExp);
            }
        );
    })
});

/**
 * Hide or show the right icon for feedback
 * @param {jQuery} level
 * @param {boolean} regExState
 */
function swapIcon(level, regExState) {
    if (regExState) {
        $(`#Level${level}Right`).removeClass('d-none');
        $(`#Level${level}Wrong`).addClass('d-none');
    } else {
        $(`#Level${level}Right`).addClass('d-none');
        $(`#Level${level}Wrong`).removeClass('d-none');
    }
}

/**
 * Execute the regex on the element
 * @param {*} element
 * @param {RegExp} regExp
 */
function doRegEx(element, regExp) {
    let $elm = $(element);
    let elmVal = $elm.val();
    let lvl = $elm.data('level');
    swapIcon(lvl, !!elmVal.match(regExp))
}