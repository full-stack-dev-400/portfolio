import React, { useState } from 'react';
import './portfolio.css';
import IMG1 from '../../assets/point-innovation.jpg';
import IMG2 from '../../assets/360appservices.gif';
import IMG3 from '../../assets/shorter-investment.jpg';
import IMG4 from '../../assets/gymnation.gif';
import IMG5 from '../../assets/rare-munchiez.jpg';
import IMG6 from '../../assets/cymbiotika.gif';
import IMG7 from '../../assets/pantelop.jpg';
import IMG8 from '../../assets/liviwell.gif';
import IMG9 from '../../assets/ecolox-tech.jpg';
import IMG10 from '../../assets/a2zleather.gif';
import IMG11 from '../../assets/mdinnovation-center.jpg';
import IMG12 from '../../assets/a2zautoexpress.gif';
import IMG13 from '../../assets/beloon-decor.jpg';
import IMG14 from '../../assets/shaanfinancial.gif';
import IMG15 from '../../assets/makeuscare.jpg';
import IMG16 from '../../assets/sweetcentrebradford.gif';
import IMG17 from '../../assets/walkie.jpg';
import IMG18 from '../../assets/modahf.gif';
import IMG19 from '../../assets/Qclay.jpg';
import IMG20 from '../../assets/walkinspecialist.gif';
import IMG21 from '../../assets/IonScientific.jpg';
import IMG22 from '../../assets/vacationrentallicense.gif';
import IMG23 from '../../assets/Shams-Barakaat.png';
import IMG24 from '../../assets/promescent.gif';
import IMG25 from '../../assets/airvistas.png';
import IMG26 from '../../assets/jafarqaderi.gif';
import IMG27 from '../../assets/Jackaro-Board.png';
import IMG28 from '../../assets/themehfil.gif';
import IMG29 from '../../assets/Eiklique.png';
import IMG30 from '../../assets/nettione.gif';
import IMG31 from '../../assets/Heaven-couture.png';
import IMG32 from '../../assets/monocleapp.gif';
import IMG33 from '../../assets/skwgreater360.jpg';
import IMG34 from '../../assets/greatvtubers.gif';
import IMG35 from '../../assets/Inclusive.jpg';
import IMG36 from '../../assets/vacationrentallicense.gif';
import IMG37 from '../../assets/berks-inulation.png';
import IMG38 from '../../assets/Arabian-printing-press.jpg';


// DO NOT USE THE IMAGE IN PRODUCTION

const data = [
    {
        id: 1,
        Image: IMG1,
        title: 'Point Innovation',
        github: '#',
        demo: 'https://pointinnovation.com/'
    },
    {
        id: 2,
        Image: IMG2,
        title: '360appservices',
        github: '#',
        demo: 'https://360appservices.com/'
    },
    {
        id: 3,
        Image: IMG3,
        title: 'Shorter Investment',
        github: '#',
        demo: 'https://www.shorterinvestmentgroup.com/'
    },
    {
        id: 4,
        Image: IMG4,
        title: 'Gym Nation',
        github: '#',
        demo: 'https://gymnation.com/'
    },

    {
        id: 5,
        Image: IMG5,
        title: 'Rare Munchiez',
        github: '#',
        demo: 'https://raremunchiez.com/'
    },
    {
        id: 6,
        Image: IMG6,
        title: 'Cymbiotika',
        github: '#',
        demo: 'https://www.cymbiotika.com/'
    },
    // Add more projects here if needed
    {
        id: 7,
        Image: IMG7,
        title: 'Pantelop',
        github: '#',
        demo: 'https://360appservices.com/'
    },
    {
        id: 8,
        Image: IMG8,
        title: 'liviwell',
        github: '#',
        demo: 'https://liviwell.net/'
    },
    
    {
        id: 9,
        Image: IMG9,
        title: 'ecolox-tech',
        github: '#',
        demo: 'https://ecoloxtech.com/ '
    },
    {
        id: 10,
        Image: IMG10,
        title: 'A 2 Z Leather ',
        github: '#',
        demo: 'https://atozleather.co.uk/'
    },

    {
        id: 11,
        Image: IMG11,
        title: 'Mdinnovation-center',
        github: '#',
        demo: 'https://www.mdinnovationcenter.com/'
    },
    {
        id: 12,
        Image: IMG12,
        title: 'A 2 Z Autoexpress',
        github: '#',
        demo: 'https://a2zautoexpress.com/'
    },
    {
        id: 13,
        Image: IMG13,
        title: 'Beloon Decor',
        github: '#',
        demo: 'https://beloondecor.com/'
    },
    {
        id: 14,
        Image: IMG14,
        title: 'Shaan Financial',
        github: '#',
        demo: 'https://shaanfinancial.ca/'
    },
    {
        id: 15,
        Image: IMG15,
        title: 'Make Us Care',
        github: '#',
        demo: 'https://makeus.care/'
    },
    {
        id: 16,
        Image: IMG16,
        title: 'Sweet Centre',
        github: '#',
        demo: 'https://sweetcentrebradford.co.uk/'
    },
    {
        id: 17,
        Image: IMG17,
        title: 'Personal Walkie',
        github: '#',
        demo: 'https://personalwalkies.com/'
    },
    {
        id: 18,
        Image: IMG18,
        title: 'Modahf',
        github: '#',
        demo: 'https://modahf.com/'
    },
    {
        id: 19,
        Image: IMG19,
        title: 'Qclay',
        github: '#',
        demo: 'https://qclay.design/'
    },
    {
        id: 20,
        Image: IMG20,
        title: 'Walk In Specialist',
        github: '#',
        demo: 'https://walkinspecialist.ca/'
    },
    {
        id: 21,
        Image: IMG21,
        title: 'Ion Scientific',
        github: '#',
        demo: '#'
    },
    {
        id: 22,
        Image: IMG22,
        title: 'Ion Scientific',
        github: '#',
        demo: '#'
    },
    {
        id: 23,
        Image: IMG23,
        title: 'Shams Barakaat',
        github: '#',
        demo: 'https://shamsbarakaatfurniture.com/'
    },
    {
        id: 24,
        Image: IMG24,
        title: 'promescent',
        github: '#',
        demo: 'https://www.promescent.com/'    
    },
    {
        id: 25,
        Image: IMG25,
        title: 'Air Vistas',
        github: '#',
        demo: 'https://airvistas.ae/'    
    },
    {
        id: 26,
        Image: IMG26,
        title: 'Jafar Qaderi',
        github: '#',
        demo: 'https://jafarqaderi.ca/'    
    },
    {
        id: 27,
        Image: IMG27,
        title: 'Jackaroo Board',
        github: '#',
        demo: 'https://jackarooboard.com/'    
    },
    {
        id: 28,
        Image: IMG28,
        title: 'The Mehfil',
        github: '#',
        demo: 'https://themehfil.ca/'    
    },
    {
        id: 29,
        Image: IMG29,
        title: 'Eiklque',
        github: '#',
        demo: 'https://eiklique.com/'    
    },
    {
        id: 30,
        Image: IMG30,
        title: 'nettione',
        github: '#',
        demo: 'https://nettione.com/'    
    },
    {
        id: 31,
        Image: IMG31,
        title: 'Heaven Couture',
        github: '#',
        demo: 'https://heavencoutureonline.com/'    
    },
    {
        id: 32,
        Image: IMG32,
        title: 'Monocleapp',
        github: '#',
        demo: 'https://www.monocleapp.co/'    
    },
    {
        id: 33,
        Image: IMG33,
        title: 'SKW Greater360',
        github: '#',
        demo: 'https://kwgreater360.com/'    
    },
    {
        id: 34,
        Image: IMG34,
        title: 'Great vtubers',
        github: '#',
        demo: 'https://greatvtubers.com/'    
    },
    {
        id: 35,
        Image: IMG35,
        title: 'Inclusive',
        github: '#',
        demo: 'https://inclusiveleadersgroup.com/'    
    },
    {
        id: 36,
        Image: IMG36,
        title: 'Vacation Rental license',
        github: '#',
        demo: 'https://www.vacationrentallicense.com/'    
    },
    {
        id: 37,
        Image: IMG37,
        title: 'Berks Insulation',
        github: '#',
        demo: 'https://berksinsulation.com/'    
    },
    {
        id: 38,
        Image: IMG38,
        title: 'Arabian Printing Press',
        github: '#',
        demo: 'https://arabianprintingpress.online/'    
    },
    // Add more projects if needed
];

const Portfolio = () => {
    const [showMore, setShowMore] = useState(false);  // State to manage whether to show more projects

    const handleShowMore = () => {
        setShowMore(!showMore);  // Toggle between showing more or less projects
    };

    return (
        <section id="portfolio">
            <h5>Top Projects</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {
                    data.slice(0, showMore ? data.length : 6).map(({ id, Image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={Image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    {/* <a href={github} className='btn'> Github</a> */}
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                                </div>
                            </article>
                        );
                    })
                }
            </div>

            <div className="portfolio__more-btn">
                <button onClick={handleShowMore} className="btn">
                    {showMore ? 'Show Less' : 'Show More Projects'}
                </button>
            </div>
        </section>
    );
};

export default Portfolio;
