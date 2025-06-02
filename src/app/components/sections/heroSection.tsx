
export interface HeroSectionProps {
    backGroundImgUrl?: string;
    text?: string;
    text2?: string;
  }
  
  export default function HeroSection({ backGroundImgUrl, text ,text2}: HeroSectionProps) {
    return (
      <section   className="h-[60vh] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${backGroundImgUrl})` }}>
        <h1 className="font-semibold">{text}</h1>
        <h2>{text2}</h2>
        <p>{text2}</p>
      </section>
    );
  }
  
