async function awaitCallWithErrorHandling(bolean) {
    const simulateApiCall = (shouldSucceed) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve("API Data");
            } else {
                reject("API Error");
            }
        }, 2000);
    });

    try {
        const data = await simulateApiCall(bolean);
        console.log("Received:", data);
    } catch (error) {
        console.error("Failed:", error);
    }
}


awaitCallWithErrorHandling(false);
