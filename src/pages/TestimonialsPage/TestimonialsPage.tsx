import HeroComponent from "../../components/HeroComponent/HeroComponent";

import './TestimonialsPage.scss';
import ClientTestimonials from "../../components/ClientTestimonials/ClientTestimonials";

const TestimonialsPage = () => (

    <>
        <section className='testimonials-section'>
            <HeroComponent name='Testimonials' />
            <ClientTestimonials />
        </section>
    </>

);

export default TestimonialsPage;