// Import what is needed:
import React from 'react';
// Import and save images for later:
import IMG1 from '../../assets/bookstore.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/comingsoon.png';
import "./portfolio.css";

// This is to create the portfolio section:

const Portfolio = () => {
    const soloProjects = [
        {
          id: 1,
          title: 'S Star Auto Mechanic Shop',
          img: IMG1,
          link: 'https://hamzaishfaq7.github.io/Shop-Project/',
          github: 'https://github.com/hamzaishfaq7/Shop-Project',
        },
        {
          id: 2,
          title: 'Tanzys Decor Event Planning',
          img: IMG2,
          link: 'https://hamzaishfaq7.github.io/Party-Planning/',
          github: 'https://github.com/hamzaishfaq7/Party-Planning/',
        },
        {
          id: 3,
          title: 'My Old Portfolio',
          img: IMG3,
          link: 'https://hamzaishfaq7.github.io/Portfolio/',
          github: 'https://github.com/hamzaishfaq7/Portfolio',
        },
        {
          id: 4,
          title: 'Coming Soon! See a preview:',
          img: IMG4,
          link: 'https://hamzaishfaq7.github.io/',
          github: 'https://github.com/hamzaishfaq7/',
        }

    ];

        // Return something:
        return (
            <section id="portfolio">
            <h5 className='changeSize'>My Recent Work:</h5>
            <h2 className='changeSize'>Portfolio</h2>
      
            <div className="container portfolio__container">
              {soloProjects.map((pro) => (
                <article className="portfolio__item" key={pro.id}>
                <div className="portfolio__item-image">
                  <img src={pro.img} alt={pro.title} />
                </div>
                <h3>{pro.title}</h3>
                <div className="portfolio__item-cta">
                  <a href={pro.github} className="btn">GitHub</a>
                  <a href={pro.link} className="btn btn-primary">Live Demo</a>
                </div>
              </article>
              ))}   
            </div>
          </section>
        )
}

// Export for use:

export default Portfolio