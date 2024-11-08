import ImageUrlBuilder from "@sanity/image-url";  
import { createClient } from "next-sanity"; // Removed the unnecessary type import  
import clientConfig from "./config/client-config";  
import { postQuery, postQueryBySlug } from "./sanity-query";  

export const client = createClient(clientConfig);  

export function imageBuilder(source) {  
  return ImageUrlBuilder(clientConfig).image(source);  
}  

export async function sanityFetch({ query, qParams, tags }) {  
  return client.fetch(query, qParams, {  
    cache: "force-cache",  
    next: { tags },  
  });  
}  

export const getPosts = async () => {  
  const data = await sanityFetch({  
    query: postQuery,  
    qParams: {},  
    tags: ["post", "author", "category"],  
  });  
  return data;  
};  

export const getPostBySlug = async (slug) => {  
  const data = await sanityFetch({  
    query: postQueryBySlug,  
    qParams: { slug },  
    tags: ["post", "author", "category"],  
  });  

  return data;  
};