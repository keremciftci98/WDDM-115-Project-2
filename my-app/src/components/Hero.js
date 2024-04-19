import trophy from '../assets/trophy.png';

function Hero() {
    return (
        <section className="Hero h-dvh">
            <div className="container mx-auto">
                <div className='flex justify-center items-center h-dvh w-3/4 mx-auto'>
                    <div className='w-1/2'>
                        <img src={trophy} alt="trophy" />
                    </div>
                    <div className='text-white rammetto-one text-5xl leading-[81px]'>Discover the winners and nominees of The Academy Awards</div>
                </div>
            </div>
        </section>
    );
}

export default Hero;