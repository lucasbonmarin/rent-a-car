import { Link } from 'react-router-dom';
import './HeroComponent.scss';

export type HeroComponentProps = {
    name: string;
};

const HeroComponent = ({
    name
}: HeroComponentProps) => (

    <section className='hero-component'>
        <div className='hero-component__overlay' />
        <div className='container'>
            <div className='hero-component__text'>
                <h3>{name}</h3>
                <p>
                    <Link to="/">Home</Link> / {name}
                </p>
            </div>
        </div>
    </section>

);

export default HeroComponent;