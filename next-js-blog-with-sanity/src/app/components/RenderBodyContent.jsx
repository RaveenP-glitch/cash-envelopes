import config from "@/sanity/config/client-config";  
import { PortableText } from "@portabletext/react";  
import { getImageDimensions } from "@sanity/asset-utils";  
import urlBuilder from "@sanity/image-url";  
import Image from "next/image";  

// Lazy-loaded image component  
const ImageComponent = ({ value, isInline }) => {  
  const { width, height } = getImageDimensions(value);  
  return (  
    <div className="my-10 overflow-hidden rounded-[15px]">  
      <Image  
        src={  
          urlBuilder(config)  
            .image(value)  
            .fit("max")  
            .auto("format")  
            .url()  
        }  
        width={width}  
        height={height}  
        alt={value.alt || "blog image"}  
        loading="lazy"  
        style={{  
          display: isInline ? "inline-block" : "block",  
          aspectRatio: width / height,  
        }}  
      />  
    </div>  
  );  
};  

const components = {  
  types: {  
    image: ImageComponent,  
  },  
};  

const RenderBodyContent = ({ post }) => {  
  return (  
    <>  
      <PortableText value={post && post.body} components={components} />  
    </>  
  );  
};  

export default RenderBodyContent;