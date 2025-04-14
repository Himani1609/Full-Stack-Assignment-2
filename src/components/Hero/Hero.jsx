import './Hero.css';
import profileImg from '../../assets/photo.jpg'; 

export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-left">
                <h1>I'm <br /> <span>Himani Bansal.</span></h1>
                <p className="tagline">Web Developer & Mathematics Teacher</p>
            </div>
            <div className="hero-right">
                <img src={profileImg} alt="Himani Bansal" className="profile-photo" />
            </div>
        </section>
    );
}
