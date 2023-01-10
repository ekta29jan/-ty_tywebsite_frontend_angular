import { style } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlickConfigService {

  caseStudyConfig = {
    slidesToShow: 4,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        infinite: true
      }
    },{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        dots: false
      }
    },
    ,{
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        dots: false
      }
    },
     {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: false
      }
    }, {
      breakpoint: 300,
      settings: 'unslick' // destroys slick
    }]
  };

  testimonialConfig = {
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    draggable: true
  };

  clientSlickConfig = {
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    draggable: true
  };

  statisticsConfig = {
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnHover: true,
    draggable: false
  };

  // brands = [
  //   {
  //     imgURL: 'assets/images/logos/qspiders.jpg',
  //     url: 'http://qspiders.com/',
  //     brand: 'QSpiders'
  //   },
  //   {
  //     imgURL: 'assets/images/logos/jspiders.jpg',
  //     url: 'http://jspiders.com/',
  //     brand: 'JSpiders'
  //   },
  //   {
  //     imgURL: 'assets/images/logos/pyspiders-new.jpg',
  //     url: 'http://pyspiders.com/',
  //     brand: 'PySpiders'
  //   },
  //   // {
  //   //   imgURL: 'assets/images/logos/AISpiders.jpg',
  //   //   url: 'http://pyspiders.com/',
  //   //   brand: 'AISpiders'
  //   // },
  //   {
  //     imgURL: 'assets/images/logos/skillrary-linear-new.png',
  //     url: 'https://www.skillrary.com/',
  //     brand: 'SkillRary'
  //   },
  //   // {
  //   //   imgURL: 'assets/images/logos/tech-elevate.png',
  //   //   url: 'https://www.skillrary.com/',
  //   //   brand: 'TechElevate'
  //   // },
  //   {
  //     imgURL: 'assets/images/logos/ELF.png',
  //     url: 'https://www.skillrary.com/',
  //     brand: 'ELF'
  //   },
  //   // {
  //   //   imgURL: 'assets/images/logos/cbt.png',
  //   //   url: 'https://www.skillrary.com/',
  //   //   brand: 'CrowdBetaTesters'
  //   // },
  //   // {
  //   //   imgURL: 'https://adefy.com/wp-content/uploads/2016/06/Test-Optimize-Maintain-02-770x375.jpg',
  //   //   url: '/solutions/test-optimize',
  //   //   brand: 'Test Optimize'
  //   // }
  // ];

  clients = [
    'assets/images/clients/Capgemini_Logo_2COL_RGB.png',
    'assets/images/clients/stellapps.png',
    'assets/images/clients/UST_Global_Logo.png',
    'assets/images/clients/Bosch-Logo.png',
    'assets/images/clients/experience-commerce.gif',
    'assets/images/clients/genesis.jpeg',
    'assets/images/clients/IBM-Logo.png',
    'assets/images/clients/logothough.png',
    'assets/images/clients/manthan.png',
    'assets/images/clients/onebill_logo2x.png',
    'assets/images/clients/prime-focus.jpeg',
    'assets/images/clients/chefs.png'
  ];

  services = [
    {
      serviceName: 'Managed Services',
      // class: 'fas fa-laptop-code icon',
      content: `We provide the ideal Offshore Development Center set up at a reasonable price for development and support projects. `,
      class1:`fas fa-angle-double-right`,
      Image:'assets/images/home-carousel/managed service.png',
      Image1:'assets/images/home/managed service (1).png'
    },
    {
      serviceName: 'Professional Services',
      Image:'assets/images/home-carousel/professional service.png',
      Image1:'assets/images/home/professional service (1).png',
      // class: 'fas fa-users icon',
      content: `On the client side, we assign our engineers to various projects, and we deploy our resources for projects for a set length of time. `,
      class2:`fas fa-angle-double-right`
    },
    {
      serviceName: 'Support Services',
      Image:'assets/images/home-carousel/support Service.png',
      Image1:'assets/images/home/support Service (1).png',
      // class: 'fas fa-chalkboard-teacher icon',
      content: `We are capable of entirely owning the application support and maintenance in any capacity.
      `,
      class3:`fas fa-angle-double-right`


    },
  ];

  whatWeDo = [
    {
      url: 'https://www.youtube.com/embed/uYeMScxrZBA',
      content: 'Our Capabilities in Testing'
    },
    {
      url: 'https://www.youtube.com/embed/vWLcyFtni6U',
      content: 'Agile mode of Training Service (ELF)'
    },
    {
      url: 'https://www.youtube.com/embed/n_Cn8eFo7u8',
      content: 'Development Services (Tech Elevate)'
    },
    {
      url: 'https://www.youtube.com/embed/pl4UYZfVmTA',
      content: 'Capabilities in Crowd Testing'
    },
    {
      url: 'https://www.youtube.com/embed/uU0PhxGOHKU',
      content: 'Experience in Automation'
    },
    {
      url: 'https://www.youtube.com/embed/1i9kcBHX2Nw',
      content: 'Ahead in Latest Technologies'
    }
  ];

  statistics = [
    // { class: 'fas fa-history text-center', content: '13 YEARS IN BUSINESS' },
    { class: 'fas fa-users text-center', content: 'DEVELOPERS',count :'810+' },
    // { class: 'fas fa-user-graduate text-center', content: '3200+ IT PROFESSIONALS' },
    { class: 'fas fas fa-user-tie text-center', content: 'CLIENTS',count :'40+' },
    // { class: 'fas fa-user-clock text-center', content: '60+ STRATEGIC CLIENTS' },
    { class: 'fas fa-tasks text-center', content: 'PROJECTS',count :'50+' },
    { class: 'fas fa-globe text-center', content: ' LOCATIONS',count :'6 GLOBAL' },
    { class: 'fas fa-industry text-center', content: 'DOMAINS',count :'8+' },
    // { class: 'fas fa-braille text-center', content: '9 BRANDS' },
    { class: 'fas fa-laptop-code text-center', content: 'TECHNOLOGIES',count :'30+' }
  ];

  testimonials = [
    {
      name: 'Mr. James Hercules',
      content: `This was an early evaluation of the product and CrowdBetaTesters
      functioned in a professional and efficient manner to prepare and execute the
      testing.  My expectations were fully met`,
      designation: 'BU Head',
      organisation: 'Manthan',
      imgURL: 'https://content.fortune.com/wp-content/uploads/2020/02/Jeff-Weiner-LinkedIn-Ceo.jpg'
    },
    {
      name: 'Mr. Krishna Sudheendra',
      content: `Outcome of the testing was very satisfying and we had captured some of
      the browser specific critical issues in Login and checkout flows, that got fixed
      in later.`,
      designation: 'CEO',
      organisation: 'UST Global',
      imgURL: 'https://m.economictimes.com/thumb/msid-69444839,width-1200,height-900,resizemode-4,imgsize-241889/ust-ceo.jpg'
    },
    {
      name: 'Mrs. Shailaja',
      content: `Expectations were not just met but exceeded. With a busy startup
      life it is great to have a testing group that stays on top of you and actually
      takes the time to learn and understand your platform before starting.`,
      designation: 'Director',
      organisation: 'One Bill',
      imgURL: 'https://i2.wp.com/www.steverrobbins.com/wp-content/uploads/ceo-woman-Depositphotos_12497994_xl-2015-800w.jpg?w=1080&ssl=1'
    },
    {
      name: 'Mr. Sundaramorrthy',
      content: `Crowdbetatesters was of great help in evaluating our Mobile website,
      IOS & Android Applications. The best thing that I liked about Crowd beta testers
      is their reporting system. They provided us with multiple reports across many
       parameters.`,
      designation: 'Business Head',
      organisation: 'CapGemini',
      imgURL: 'https://inc42.com/wp-content/uploads/2019/07/Feature-sajan-pillai-1200x900.jpg'
    }
  ];

}

