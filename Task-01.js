function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

async function iterateWithAsyncAwait(array) {
    for (const arr of array) {
        await delay();
        console.log(arr);
    }
}

iterateWithAsyncAwait(['sky', 'blue', 'sun']);
