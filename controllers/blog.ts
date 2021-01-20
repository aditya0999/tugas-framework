import { renderFileToString } from 'https://deno.land/x/dejs/mod.ts'; 
import { select } from '../models/pg_model.ts';

const home = async({response} : {response : any}) => {
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            pemrograman : await select()
        },
        subview : {
            namafile : "./views/blog-main.ejs",
            showjumbotron : true
        }
    });
    response.body = new TextEncoder().encode(html);
}
const signup = async ({response} : {response : any}) => {
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            pemrograman : await select()
        },
        subview : {
            namafile : "./views/signup.ejs",
            showjumbotron : false
        }
    }
    );
    response.body = new TextEncoder().encode(html);

}
const saveuser = async({response, request} : {response : any, request : any}) => {
    const result = await request.body().value;
    const parseData = new URLSearchParams(result);

    const namalengkap = parseData.get("fullname");
    const namauser = parseData.get("username");
    const pwd = parseData.get("paswd");
    response.body = "Data yg di POST : "+namalengkap+" ,"+namauser+" ,"+pwd;
}
const kategori = async ({params,response} : {params:{id : string}, response : any}) =>{
   response.body = "ID Parameter :"+params.id;
}
export { home, signup, saveuser, kategori };