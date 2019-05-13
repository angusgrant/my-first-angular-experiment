import {Navigation} from './navigation-data';

export const MENU : Navigation[] = [
    {
    title: "Home",
    url: "/",
    },
    {
    title: "Portfolio",
    navigationItems: [
        {
            title: "Ingenta Open",
            url: "https://ingentaopen.com/",
            description: "Showcase website for Ingenta Connects open source content."
          },
          {
            title: "OECD Journals",
            url: "https://www.oecd-ilibrary.org/",
            description: "Organisation for Economic Cooperation and Development Journal website "
          },
          {
            title: "Microbiology Society Journals",
            url: "https://www.microbiologyresearch.org/",
            description: "Microbiology societies academic content."
          },
      
          {
            title: "ASTMH journals",
            url: "https://www.ajtmh.org/",
            description: "The American Journal of Tropical Medicine and Hygiene"
          },
      
          {
            title: "ECDC Journals",
            url: "https://www.eurosurveillance.org/",
            description: "The European Commission for Disease Control academic content"
          },
      
          {
            title: "IET digital library",
            url: "https://digital-library.theiet.org/",
            description: "The Institute for Engineering and Technology Journals"
          },
       
          {
            title: "Numerique Premium",
            url: "https://www.numeriquepremium.com/",
            description: "Large collection of History and Humanities books in french."
          },
      
          {
            title: "BSAVA Journals",
            url: "https://www.bsavalibrary.com/jsap",
            description: "The British Small Animal Veterinary Association journals"
          },
      
          {
           
            title: "Sunmedia",
            url: "http://www.pieronline.jp",
            description: "Japanese medical journals site"
          },
          {
            
            title: "Chmiel",
            url: "http://www.blackwellpublishing.com/chmiel",
            description: "Book companion website on Work and orgnaistaional psychology for Whiley-blackwell publishing"
          }
        
        ]
      },
     {
        title: "Experiments",
        navigationItems: [ 
            {
              title: "D3 Chart big data demo",
              url: "http://angusgrant.me.uk/d3-diet-composition-example-chart/",
              description: "A D3 demo site filtering a large data set of the diet composition of various countries"
            },
            {
              title: "Angular Calculator demo",
              url: "http://angusgrant.me.uk/calculator-demo/",
              description: "A Javascript calculator written using the Angular framework utilizing CSS grid"
            }
        ]
    },
    {
        title: "About",
        url: "/about"
    }
  ]