import React from 'react';

const ServiceCard = ({ image, title, description }) => (
  <div className="flex-shrink-0 w-96 snap-start">
    <div className="w-96">
      <img className="object-cover w-1/2" src={image} alt="" />
      <h2 className="text-white text-xl font-semibold">{title}</h2>
      <div className="w-10 mt-5 h-0.5 bg-emerald-400"></div>
      <p className="text-white tracking-normal py-4 leading-loose text-wrap">{description}</p>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      image: "/images/design.png",
      title: "Web Design and Development",
      description: "Agencia specializes in crafting visually stunning and functionally robust websites. Our web design and development services ensure that your online presence not only captures attention but also provides a seamless and engaging user experience. From responsive design to custom development, we bring your digital vision to life."
    },
    {
      image: "/images/strategy.png",
      title: "Consultation and Strategy",
      description: "Success in the digital realm begins with a solid strategy. Agentic provides consultation services to help you navigate the complexities of the online landscape. Whether you're starting a new project, rebranding, or seeking to optimize your existing digital presence, our experts offer strategic insights and guidance to align your goals with effective solutions."
    },
    {
      image: "/images/cro.svg",
      title: "Digital Marketing",
      description: "Agencia goes beyond design and development to boost your online presence through digital marketing strategies. From SEO and social media marketing to content creation and online advertising, we tailor digital marketing solutions to enhance your visibility, drive traffic, and convert visitors into loyal customers."
    },
    {
      image: "/images/design.png",
      title: "UI/UX Design",
      description: "Our UI/UX design services focus on creating intuitive, user-friendly interfaces that enhance user engagement and satisfaction. We combine aesthetics with functionality to deliver designs that not only look great but also provide an optimal user experience across all devices and platforms."
    },
    {
        image: "/images/design.png",
        title: "UI/UX Design",
        description: "Our UI/UX design services focus on creating intuitive, user-friendly interfaces that enhance user engagement and satisfaction. We combine aesthetics with functionality to deliver designs that not only look great but also provide an optimal user experience across all devices and platforms."
      }
  ];

  return (
    <div className='py-10 px-20 mb-10'>
      <div className='text-6xl py-10 text-white font-semibold tracking-wide'>
        <h1>Our</h1> 
        <h1 className='text-emerald-500'>Services</h1>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex overflow-x-auto gap-10 snap-x snap-mandatory no-scrollbar">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;