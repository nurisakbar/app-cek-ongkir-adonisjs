import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import axios from 'axios'
import Province from 'App/Models/Province'

export default class RegionsController {

    public async province({response,params}){

        const apiKey = Env.get('RAJA_ONGKIR_KEY')

        let queryParams='';

        if(params.id)
        {
            queryParams = '?id=' + params.id
        }

        const result = await axios.get(`https://api.rajaongkir.com/starter/province${queryParams}`,{ headers: { 'key': apiKey } })
        
        const user = await Province.createMany(result.data.rajaongkir.results)


        return response.send({response:result.data.rajaongkir})
    }

    public async city({response,params}){
        
    }
}
