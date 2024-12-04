function simulateApiCall() {
    return new Promise(resolve => {
        setTimeout(() => resolve("API Data"), 2000);
    });
}

async function awaitCall() {
    const data = await simulateApiCall();
    console.log("Received:", data);
}

awaitCall();

