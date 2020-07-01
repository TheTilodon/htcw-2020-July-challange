$(function () {
    let $inputLevel1 = $('#inputLevel1');
    let lvl1RegExp = new RegExp('123-939-7878', 'ig');
    $inputLevel1.on('keyup', function () {
        doRegEx(this, lvl1RegExp);
    });

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
 * @param {{[Symbol.match](string: string): (RegExpMatchArray | null)}} regExp
 */
function doRegEx(element, regExp) {
    let $elm = $(element);
    let elmVal = $elm.val();
    let lvl = $elm.data('level');
    swapIcon(lvl, !!elmVal.match(regExp))
}