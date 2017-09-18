/**
 * Created by Hans Dulimarta Fall 2017.
 * TODO: Add your name below this line
 * David Crawford
 */

/////window.onload = function()

/**
 * Given a node with id {rootId}, the following function finds all its descendant
 * elements having its attribute ID set. The function returns the number of
 * such elements. ALSO, for each such element this function sets its class
 * to {klazName}.
 *
 * @param rootId
 * @returns {number}
 */
function findElementsWithId(rootId, klazName) {
    /* complete this function */
    console.log(rootId);

    var descendents = document.querySelectorAll('#' + rootId + ' > *');
    var i, e;
    var count = 0;
    for (i = 0; i < descendents.length; ++i) {
        e = descendents[i];
        if (e.hasAttribute('id')) {
            console.log(e);
            count++;
            e.className = klazName;
        }
    }
    return count;
}

/**
 * The following function finds all elements with attribute 'data-gv-row' (or
 * 'data-gv-column') and create a table of the desired dimension as a child of
 * the element.
 *
 * @returns NONE
 */
function createTable() {
    /* complete this function */
    var row = document.querySelector('[data-gv-row]').getAttribute('data-gv-row');
    var column = document.querySelector('[data-gv-column]').getAttribute('data-gv-column');
    var ancestor = document.getElementsByClassName('table-home')[0];

    var table = document.createElement('table');
    ancestor.appendChild(table);
    var header = document.createElement('tr');

    for (h = 1; h <= column; h++) {
        var headth = document.createElement('th');
        headth.innerText = 'Heading ' + h;
        header.appendChild(headth);
    }

    table.appendChild(header);

    var lipsum = new LoremIpsum();

    for (i = 0; i < row; i++) {
        var rowElem = document.createElement('tr');
        for (ii = 0; ii < column; ii++) {
            var word = lipsum.generate(3);

            var colElem = document.createElement('td');
            colElem.innerText = word;
            rowElem.appendChild(colElem);
        }
        table.appendChild(rowElem);

    }
}