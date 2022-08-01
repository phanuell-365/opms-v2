const getDrugs = async (token, drugId) => {

    return await $fetch(`http://localhost:4040/api/drugs/${drugId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    });
}

export const useDrugById = (token, drugId) => {
    return useState('drugById', () => {
        return getDrugs(token, drugId);
    });
}
