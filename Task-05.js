function simulateApiCall(url) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Data from ${url}`), 1000);
    });
}

async function parallelCalls(urls) {
    const responses = await Promise.all(urls.map(url => simulateApiCall(url)));
    console.log("Responses:", responses);
}

parallelCalls(["url1", "url2", "url3"]);
