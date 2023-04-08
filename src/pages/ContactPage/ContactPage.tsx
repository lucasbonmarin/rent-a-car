import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { MdLocationOn } from "react-icons/md";
import { BsFillSendFill } from 'react-icons/bs';

import HeroComponent from "../../components/HeroComponent/HeroComponent";
import BookBanner from "../../components/BookBanner/BookBanner";

import "./ContactPage.scss";

const ContactPage = () => (

    <>
        <section className="contact-section">
            <HeroComponent name="Contact" />
            <div className='container'>
                <div className='contact-div'>
                    <div className='contact-div__text'>
                        <h2>Need additional information ?</h2>
                        <p>
                            A multifaceted professional skilled in multiple fields of
                            research, development as well as a learning specialist. Over 15
                            years of experience.
                        </p>
                        <a href="/">
                            <BsFillTelephoneFill />&nbsp; (123) -456-789
                        </a>
                        <a href="/">
                            <IoIosMail />&nbsp; rentacar@gmail.com
                        </a>
                        <a href="/">
                            <MdLocationOn />&nbsp; Paris, France
                        </a>
                    </div>
                    <div className='contact-div__form'>
                        <form>
                            <label>
                                Full Name <b>*</b>
                            </label>
                            <input type="text" placeholder='E.g : John Smith' />

                            <label>
                                Email <b>*</b>
                            </label>
                            <input type="email" placeholder='youremail@example.com' />

                            <label>
                                Tell us about it <b>*</b>
                            </label>
                            <textarea placeholder='Write here...' />

                            <button type="submit">
                                <BsFillSendFill />&nbsp; Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <BookBanner />
        </section>
    </>

);

export default ContactPage;