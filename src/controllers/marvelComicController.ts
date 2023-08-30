import axios from "axios";
import md5 from "md5";
import { envConfig } from "../config/config";  
import { Characters, Comic } from "./marvelComicControllerTypes";

// Variables from the .env file
const { MARVEL_ROUTE, PUBLIC_KEY, PRIVATE_KEY } = envConfig;

/**
 * Helper function to get the hash for the Marvel API
 * @returns hash for the Marvel API
 */
const getHashForApiMarvel = () => {
    const ts = Date.now();
    return md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);
};

/**
 * Fetch All Comics from the Marvel API
 * @returns Array of Comics
 */
export const getComics = async ():Promise<{
    comics: Comic[],
    totalSizeComics: number,
    countComics: number
}> => {
    const hash = getHashForApiMarvel();
    let response;
    try {
        const ts = Date.now();
        response = await axios.get(MARVEL_ROUTE, {
            params: {
                ts,
                apikey: PUBLIC_KEY,
                hash
            }
        });
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching comics from Marvel API');
    }
    return { 
        comics: response.data.data.results as Comic[],
        totalSizeComics: response.data.data.total,
        countComics: response.data.data.count
    }
 };

/**
 * Fetch One Comic from the Marvel API
 * @param idComic id of the comic to fetch
 * @returns Comic entity
 */
export const getOneComic = async (idComic: string):Promise<{
    comic: Comic,
}> => {
    const hash = getHashForApiMarvel();
    let response;
    try {
        const ts = Date.now();
        response = await axios.get(`${MARVEL_ROUTE}/${idComic}`, {
            params: {
                ts,
                apikey: PUBLIC_KEY,
                hash
            }
        });
    } catch (error) {
        console.error(error);
        throw new Error(`Error fetching comic with id ${idComic} from Marvel API`);
    }
    return { 
        comic: response.data.data.results[0] as Comic
    }
 };

/**
 * Get Characters from a Comic from the Marvel API
 * @param idComic id of the comic to fetch
 * @returns Characters array
 */
 export const getCharactersFromComic = async (idComic: string):Promise<Characters[]> => {
    const hash = getHashForApiMarvel();
    let response;
    try {
        const ts = Date.now();
        response = await axios.get(`${MARVEL_ROUTE}/${idComic}/characters`, {
            params: {
                ts,
                apikey: PUBLIC_KEY,
                hash
            }
        });
    } catch (error) {
        console.error(error);
        throw new Error(`Error fetching characters from comic with id ${idComic} from Marvel API`);
    }
    return response.data.data.results as Characters[];
 }