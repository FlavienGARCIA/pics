import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID 8658454aaee7e2fe087e3b9ab12152783bda325d3717004e545a8d071fde539a'
	}
});
