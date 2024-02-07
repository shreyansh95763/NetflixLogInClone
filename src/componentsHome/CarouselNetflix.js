import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselMiddle() {
    return (
        <div style={{ display: 'block', width: '100%', padding: 30, margin:"2rem auto"}}>  
            <Carousel>
                <Carousel.Item interval={1000}>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img alt="img1" style={{display:"block",width:"80%",height:"50vh",margin:"2rem auto"}}
                     src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/11/2-17.jpg?ssl=1" />
                    <Carousel.Caption>
                        <h1>Fighter</h1>
                        <p className='container'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img alt="img1" style={{display:"block",width:"80%",height:"50vh",margin:"2rem auto"}}
                     src="https://s.yimg.com/ny/api/res/1.2/SgnOhy5tGTnxjg75lei_ww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/mmail.com.my/2d86acfc2731cb9b98669a1522824dba" />
                    <Carousel.Caption>
                        <h1>RRR</h1>
                        <p className='container'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img alt="img1" style={{display:"block",width:"80%",height:"50vh",margin:"2rem auto"}}
                    src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/11/ghayal-once-again-movie-poster-3.jpg" />
                    <Carousel.Caption>
                        <h1>Ghayal Once Again</h1>
                        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img alt="img1" style={{display:"block",width:"80%",height:"50vh",margin:"2rem auto"}}
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWQb44s4RNDw4OTfmbvvrwLtXhFdvNZCBUPaaMdB9QXgkDk6Xf7mXhU3KiNvNextP7LzhvdeFGP7oyBwFPeQGpiy_INvyQsendeRWdP2PRSIqAyqL4soqQdiTJUeArR1jvU8DiKyi_f8mt3jpYGNyILEgqOrFFAB5HDl7YRXrj8bkHd7P-t4-eO0cp/s1080/1686557057871.jpg" />
                    <Carousel.Caption>
                        <h1>Animal</h1>
                        <p className='container'>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img alt="img1" style={{display:"block",width:"80%",height:"50vh",margin:"2rem auto"}}
                    src="https://cdn.siasat.com/wp-content/uploads/2023/03/pathaan-1.jpg" />
                    <Carousel.Caption>
                        <h1>Pathaan</h1>
                        <p className='container'>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img alt="img1" style={{display:"block",width:"80%",height:"50vh",margin:"2rem auto"}}
                    src="https://www.jansatta.com/wp-content/uploads/2023/03/Bholaa-Advance-Booking.jpg" />
                    <Carousel.Caption>
                        <h1>Bholaa</h1>
                        <p className='container'>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
    );
}  