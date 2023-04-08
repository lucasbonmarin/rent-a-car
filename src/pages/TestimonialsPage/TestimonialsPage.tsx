import HeroComponent from "../../components/HeroComponent/HeroComponent";
import ClientTestimonials from "../../components/ClientTestimonials/ClientTestimonials";
import BookBanner from "../../components/BookBanner/BookBanner";

import './TestimonialsPage.scss';

const TestimonialsPage = () => (

    <>
        <section className='testimonials-section'>
            <HeroComponent name='Testimonials' />
            <ClientTestimonials />
            <BookBanner />
        </section>
    </>

);

export default TestimonialsPage;