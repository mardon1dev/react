import Heroimg from './hero2.png';
import "./Header.css";

function Hero() {
    return(
        <div className="hero">
            <div className="container">
                <div className='hero-main'>
                    <div className="row d-flex align-items-center gy-5">
                        <div className="hero-text col-md-6 col-lg-6 col-12">
                            <span>Chase the new Flavour</span>
                            <h1>The key to Fine dining</h1>
                            <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                            <button className="border rounded-pill">Explore Menu</button>
                        </div>
                        <div className="hero-img col-md-6 col-lg-6 col-12">
                            <img src={Heroimg} className="hero-img w-100" alt="heroimg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;