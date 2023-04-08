import HeroComponent from "../../components/HeroComponent/HeroComponent";
import Person1 from "../../assets/images/team/1.png";
import Person2 from "../../assets/images/team/2.png";
import Person3 from "../../assets/images/team/3.png";
import Person4 from "../../assets/images/team/4.png";
import Person5 from "../../assets/images/team/5.png";
import Person6 from "../../assets/images/team/6.png";
import BookBanner from "../../components/BookBanner/BookBanner";

import './OurTeam.scss';

export type TeamMember = {
    name: string;
    job: string;
    image: string;
};

const teamMembers: TeamMember[] = [
    {
        name: 'Luke Skywalker',
        job: 'Salesman',
        image: Person1
    },
    {
        name: 'Clark Kent',
        job: 'Business Owner',
        image: Person2
    },
    {
        name: 'Lois Lane',
        job: 'Photographer',
        image: Person3
    },
    {
        name: 'Leia Organa',
        job: 'Car Detailist',
        image: Person4
    },
    {
        name: 'Martin Scorsese',
        job: 'Mechanic',
        image: Person5
    },
    {
        name: 'Diana Prince',
        job: 'Manager',
        image: Person6
    }
];
const OurTeamPage = () => (

    <>
        <section className='ourteam-section'>
            <HeroComponent name="Our Team" />
            <div className='container'>
                <div className='ourteam-container'>
                    {teamMembers.map((member, index) => (
                        <div className='ourteam-container__box' key={index}>
                            <div className='ourteam-container__box__image'>
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className='ourteam-container__box__descr'>
                                <h3>{member.name}</h3>
                                <p>{member.job}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <BookBanner />
        </section>
    </>

);

export default OurTeamPage;