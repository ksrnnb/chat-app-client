export class Config {
    static apiEndpoint = () => {
        return process.env.REACT_APP_API_URL + ":" + process.env.REACT_APP_API_PORT;
    }
}