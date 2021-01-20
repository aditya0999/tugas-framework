import { Client } from 'https://deno.land/x/postgres/mod.ts';
import { QueryResult } from 'https://deno.land/x/postgres/query.ts'; 

const client = new Client ({
    hostname : "localhost",
    port : 5432,
    user : "postgres12",
    password :"123123",
    database : "db_blog"
});

export async function select(){
    let data : any = [];
    try {
        await client.connect();
        let hasil : QueryResult = await client.query("select * from tbl_kategori");
        await client.end();
        data = hasil.rowsOfObjects();
    } catch(error) {
        console.log(error);
    }
    return data;
}