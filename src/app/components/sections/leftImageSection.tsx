export interface LeftImageSectionProps {
    ImgUrl: string;
    text: string;
  }
  
export default function LeftImageSection({ ImgUrl, text }: LeftImageSectionProps){
    return(
        <>
        <h1>This from LeftImageSection </h1>
        <h1>{text}</h1>
        <h1>{ImgUrl}</h1>
        </>
    )
}