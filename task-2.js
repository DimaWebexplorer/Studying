'use strict';
function getLenght (inputValue) {
    if (inputValue.hasOwnProperty('length')) {
        return console.log(inputValue.length);
    }
    return console.log(0);
}

function compare (node1, node2) {
    if (node1 ===  null && node2 === null) {
        return true;
    }
    if (node1 ===  null || node2 === null) {
        return false;
    }
    
    const query1 = [],
        query2 = [];

    query1.push(node1);
    query2.push(node2);

    while (query1.length && query2.length) {
        const currentNode1 = query1.shift();
        const currentNode2 = query2.shift();

        if (currentNode1.value !== currentNode2.value) {
            return false;
        }

        if (currentNode1.left ===  null && currentNode2.left !==  null) {
            return false;
        }
        if (currentNode1.left !==  null && currentNode2.left ===  null) {
            return false;
        }

        if (currentNode1.right ===  null && currentNode2.right !==  null) {
            return false;
        }
        if (currentNode1.right !==  null && currentNode2.right ===  null) {
            return false;
        }

        if (currentNode1.left !==  null && currentNode2.left !==  null) {
            query1.push(currentNode1.left);
            query2.push(currentNode2.left);
        }
        if (currentNode1.right !==  null && currentNode2.right !==  null) {
            query1.push(currentNode1.right);
            query2.push(currentNode2.right);
        }
    }
    return true;
}