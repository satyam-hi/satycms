export interface paragraphSectionProps {
    ImgUrl: string;
    text: string;
  }
  
export default function ParagraphSection({text}:paragraphSectionProps){
    return(
        <>
        <h1>This from PairagrafSection </h1>
        <p>{text}</p>
        </>
    )
}