import API from '@/services/API'

export default(city1) => {
    return API().get('tempreal/'+city1);
}