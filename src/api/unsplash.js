import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ZhTVuCBso5yMuGzdIWy8a1JeehhVVQi3_mighSGCCd8'
    }
});