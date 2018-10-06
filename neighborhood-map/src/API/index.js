class Helper {
    static baseURL() {
        return "https://api.foursquare.com/v2";
    }
    static authorizations() {
        const keys = {
            client_id: "ZNYVFTLSQ042C0FQVC01CTUBDI3XGXFYS4EXMHTAYJWWRBDX",
            client_secret: "QWD10FMGI3FU05FG5GMG5ONI0AJTTR24TP5VZDKSKPGAMXCV",
            v: "20181005"
        };
        return Object.keys(keys)
            .map(key => `${key}=${keys[key]}`)
            .join("&");
    }
    static urlCreator(urlParams) {
        if(!urlParams) {
            return ""
        }
        return Object.keys(urlParams)
            .map(key => `${key}=${urlParams[key]}`)
            .join("&");
    }
    static headers() {
        return {
            Accept:"application/json"
        };
    }
    static easyFetch(endPoint,method,urlParams) {
        let requestInfo = {
            method,
            headers: Helper.headers()
        };
        return fetch(
            `${Helper.baseURL()}${endPoint}?${Helper.authorizations()}&${Helper.urlCreator(
            urlParams)}`, requestInfo
            ).then(response => response.json()); 
    }
}

export default class FourAPI {
    static search(urlParams) {
        return Helper.easyFetch("/venues/search","GET",urlParams);
    }
    static getDetails(VENUE_ID) {
        return Helper.easyFetch(`/venues/${VENUE_ID}`,"GET");
    }
    static getPhotos(VENUE_ID) {
        return Helper.easyFetch(`/venues/${VENUE_ID}/photos`, "GET");
    }
}