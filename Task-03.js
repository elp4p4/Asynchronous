function simulateApiCall(shouldSucceed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve("API Data");
            } else {
                reject("API Error");
            }
        }, 2000);
    });
}

async function awaitCallWithErrorHandling(bolean) {
    try {
        const data = await simulateApiCall(bolean);
        console.log("Received:", data);
    } catch (error) {
        console.error("Failed:", error);
    }
}

awaitCallWithErrorHandling(true);
