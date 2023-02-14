import React, { useEffect, useState }  from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Card from './Card';
import useWindowDimensions from '../CustomHooks/useWindowDimensions';
import pic1 from '../img/pic1.jpg'
import pic2 from '../img/pic2.jpg'
import pic3 from '../img/pic3.jpg'
import pic4 from '../img/pic4.jpg'
import pic5 from '../img/pic5.jpeg'

const CardCarousel = () => {
    const { height, width } = useWindowDimensions();

    const [visbleSlides, setVisibleSlides] = useState(3);
  
    const [dimensions, setDimensions] = useState({
      h: 700,
      w: 500,
    });
  
    useEffect(() => {
      if (width > 1300) {
        setVisibleSlides(4);
        setDimensions({
          h: 500,
          w: 400,
        });
      } else if (width < 1300 && width > 1024) {
        setVisibleSlides(3);
        setDimensions({
          h: 600,
          w: 400,
        });
      }else if (width < 1024 && width > 768) {
        setVisibleSlides(2);
        setDimensions({
          h: 500,
          w: 400,
        });
      } else {
        setVisibleSlides(1);
        setDimensions({
          h: 300,
          w: 400,
        });
      }
    }, [height, width]);

    return (
<div className="container mx-auto p-5">
<CarouselProvider
       naturalSlideWidth={dimensions.w}
       naturalSlideHeight={dimensions.h}
       infinite 
       step={1}
       totalSlides={5}
       visibleSlides={visbleSlides}
     >

    <Slider>
        <Slide index={0}>
            <Card course="Maths" teacher= "Dr. PS Kumar Singh" about="i have helped a dozen of students with their problem solving in mathematics , my speciality is integration and differentiation" img = {pic1}/>
        </Slide>
        <Slide index={1}>
            <Card course="Chemistry" teacher= "Dr. Priyanka Gupta" about="I have been tutoring 11th, 12th and College students since 25 years now.My motive has always been working hard with students." img = {pic2}/>
        </Slide>
        <Slide index={2}>
            <Card course="Physics" teacher= "Alakh Pandey" about="My goal is to increase your JEE score 100+ by pinpointing your weakness and creating a custom plan for you " img = {pic3}/>
        </Slide>
        <Slide index={3}>
            <Card course="PE" teacher= "Neeraj Dubey" about="I have always been physically fit and help people reach their fitness goal " img = {pic4}/>
        </Slide>
        <Slide index={4}>
            <Card course="English" teacher= "Seema Sinha" about="I have taught in private , public and even in deaf schools" img = {pic5}/>
        </Slide>
    </Slider>
<div className="flex ">
<div className=" mx-auto mt-2">
<ButtonBack className="  text-gray-900 bg-gray-100 border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
</ButtonBack>
<ButtonNext className="  text-gray-900 bg-gray-100 border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
</ButtonNext>
</div>
</div>

</CarouselProvider>
</div>
    );
  }


export default CardCarousel;