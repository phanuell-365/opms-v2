const getDrugs = async (token) => {

    return await useFetch(`http://localhost:4040/api/drugs`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    });
}

export const useAllDrugs = (token) => {
    return useState('allDrugs', () => {
        return getDrugs(token).then(res => {
            return res.data;
        });
    });
}
