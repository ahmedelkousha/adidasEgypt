
export default function PromotionHeader({title1,title2,title3}){
    return(
<header className="header-promotion bg-black flex justify-evenly min-h-8 items-center text-center p-3 tracking-widest">
<a href="#" className="hover:underline font-bold text-xs title-1 max-sm:font-thin max-sm:basis-1/2">{title1}</a>
<a href="#" className="hover:underline font-bold text-xs title-2">{title2}</a>
<a href="#" className="hover:underline font-bold text-xs title-3 max-sm:font-thin max-sm:basis-1/2">{title3}</a>
</header>
    )
}

