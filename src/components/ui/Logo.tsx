import HeroLogoOuter from '../../assets/hero/hero-logo-outer.svg';
import HeroLogoInner from '../../assets/hero/hero-logo-inner.svg';

const Logo = () => {
    return ( 
        <a href="#hero">
            <div className="flex items-center gap-3">
                <div className="relative w-12 h-auto shrink-0">
                    <img
                        src={HeroLogoOuter}
                        alt="Hero Logo Outer"
                        className="absolute inset-0 m-auto w-12 object-contain"
                    />
                    <img
                        src={HeroLogoInner}
                        alt="Hero Logo Inner"
                        className="absolute inset-0 m-auto object-contain"
                    />
                </div>
                <span className="text-white text-xl font-['Epilogue'] font-24 font-bold">Agency</span>
            </div>
        </a>
    );
};

export default Logo;