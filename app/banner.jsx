import './imgBanner.css'

export default function Banner({heading, paragraph, buttonParagraph}){
    return(<>
        <img className="imgBanner w-full h-screen" src="gym.jpg" alt="" />
        <div className="imgBannerBox">
            <h2 className="text-black">{heading}</h2>
            <p className="text-black">{paragraph}</p>
            <button className="bg-black p-2 text-White hover:bg-zinc-400 hover:text-black ">{buttonParagraph}</button>
        </div>
        </>
    )
}