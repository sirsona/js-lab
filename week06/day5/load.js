async function loadData(BASE_URL) {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
    }
    return await response.json();

}

export default loadData
