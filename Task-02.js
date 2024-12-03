async function awaitCall() {
    const simulateApiCall = () => new Promise(resolve => {
        setTimeout(() => resolve("API Data"), 2000);
    });

    const data = await simulateApiCall();
    console.log("Received:", data);
}

awaitCall();
