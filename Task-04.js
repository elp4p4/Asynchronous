function simulateApiCall(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Data from API ${id}`), 1000 * id);
    });
}

async function concurrentRequests() {
    const [res_1, res_2] = await Promise.all([
        simulateApiCall(5),
        simulateApiCall(2)
    ]);

    console.log("Responses:", res_1, res_2);
}

concurrentRequests();
