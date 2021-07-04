import axios from 'axios'
export default class CloudHealthSDK {
    url: string
    constructor(url: string) {
        this.url = url
    }

    public async newEndpoint(endpoint: string, webhook: string, waitTime?: number) {
        if (!waitTime) {
            waitTime = 5
        }
        await axios.post(`${this.url}/new`,{
            hostname: endpoint,
            onFailWebhook: webhook,
            waitTIme: waitTime
        })
    }
}