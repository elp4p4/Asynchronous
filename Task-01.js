async function iterateWithAsyncAwait(array) {
    for (const arr of array) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(arr);
    }
}

iterateWithAsyncAwait(['kill', 'death', 'suicide']);
