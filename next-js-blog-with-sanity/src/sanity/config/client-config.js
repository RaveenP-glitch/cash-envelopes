import { ClientPerspective } from "next-sanity";  

const config = {  
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,  
    dataset: "production",  
    apiVersion: "2024-11-07",  
    useCdn: false,  
    token: process.env.SANITY_API_KEY,  
    perspective: 'published',
};  

export default config;