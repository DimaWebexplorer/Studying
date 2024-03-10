//base
function getPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        for (let j = i - 1; j >= 1; j--) {
            row += j;
        }
        console.log(' '.repeat(n-i) + row);
    }
    for (let i = n - 1; i >= 1; i--) {
        let row = '';
        for (j = 1; j <= i; j++) {
            row += j;
        }
        for (let j = i - 1; j >= 1; j--) {
            row += j;
        }
        console.log(' '.repeat(n-i) + row);
    }
}

//advanced
class PaginationUtil {
    constructor (arr, quantityOfElements) {
        this.arr = arr;
        this.quantityOfElements = quantityOfElements;
        this.distributedArr = this.#distributedPages();
    }

    #distributedPages() {
        let distributedArr = [];
        let i = 0;

        while (i < this.arr.length) {
            distributedArr.push(this.arr.slice(i, i + this.quantityOfElements));
            i += this.quantityOfElements;
        }

        return distributedArr;
    }

    pageCount() {
        return Math.ceil(this.itemCount() / this.quantityOfElements);
    }

    itemCount() {
        return this.arr.length;
    }

    pageItemCount(pageNumber) {
        if (pageNumber > this.pageCount() - 1) {
            return -1;
        }

        return this.distributedArr[pageNumber].length;
    }

    pageIndex(elemIndex) {
        if (elemIndex >= this.itemCount() || elemIndex < 0) {
            return -1;
        }

        const elem = this.arr[elemIndex];

        for (let i = 0; i < this.distributedArr.length; i++) {
            for (let j = 0; j < this.distributedArr[i].length; j++) {
                if (this.distributedArr[i][j] == elem) {
                    return i
                }
            }
        }
    }
}
