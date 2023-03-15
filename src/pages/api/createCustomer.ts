import { ApiService } from "../../../services/api.service";

const handler = async (req: { method: any; body: any; }, res: { end: (arg0: string) => any; }) => {
    // shopify store credentials
    const baseUrl = new ApiService();

    try {
        // shopify call end point and fetch options
        const options = {
            method: req.method,
            body: JSON.stringify(req.body)
        }
        
        const url = baseUrl.getBaseUrl() + `/add-customer`;
        const response = await fetch(url, options);
        // throw error if there are any response errors
        if (!response.ok) {
            throw Error('Could not get the data!');
        }
        // get store data when no response errors
        const data = await response.json();
        return res.end(JSON.stringify({ data: data }));

    } catch (err:any) {
        return res.end(JSON.stringify({ error: err.message }));
    }
}

export default handler;