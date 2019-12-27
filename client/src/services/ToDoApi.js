import API from '@/services/API'

export default{
    getToDos()
    {
        return API().get('todo');    
        //console.log('api data:'+API.get('todo'));
        
    }
}