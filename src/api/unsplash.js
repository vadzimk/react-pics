//configuration of api request
import axios from 'axios';

//axios.create({}) creates an instance of an axios client with defaulted properties
export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
					Authorization: 'Client-ID f4edf266a0a43b18322b7e2d9766a14ce2195a74c3f43b9b9495f0846bb3af7a'
				}
});
