import { Client } from "@notionhq/client";

type Help = {
    title:string;
    description:string;

}


export async function getStaticProps() {

const token="secret_OrFeW7CfsVV4HmbixUsP4VFAdG1oNs7Fe2od8lGcFNF"    
const databaseId ="0833762918ad4f79b302c7dd288595e1"

const notion = new Client({ auth: token});
const data =await notion.databases.query({database_id:databaseId});

console.log(data);



const helpList:Help[] =[
    {title:"質問1",description:"回答1"},
    {title:"質問2",description:"回答2"},
    {title:"質問3",description:"回答3"},
    {title:"質問4",description:"回答4"},
];

return{props:{helpList},revalidate:30};
}

export default Help


    
