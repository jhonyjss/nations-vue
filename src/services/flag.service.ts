import http from "../http";
export const getAllFlags = async () => {
    try {
        const response = await http.get('/all?fields=name,capital,flags,region,population');
        return response.data;
    } catch (error) {
        console.error('Error getting all flags:', error);
        throw error;
    }
};

export const getFlagByRegionName = async (region: string) => {
    try {
        const response = await http.get(`/region/${region.toUpperCase()}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting flag with Region ${region.toUpperCase()}:`, error);
        throw error;
    }
};

export const getFlagByName = async (name: string) => {
    try {
        const response = await http.get(`/name/${name.toLowerCase()}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting flag with Region ${name.toLowerCase()}:`, error);
        throw error;
    }
};
