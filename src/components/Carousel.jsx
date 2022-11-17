import React, { useEffect, useState } from 'react'

import { Carousell, FeaturedDesc, MenuOption, Slide, Title, Ul } from '../styledComponents/Carousel.styled'



const Carousel = ({ posts }) => {

    const [slide, setSlide] = useState(0);
    const [newBlog, setNewBlog] = useState([]);
    const randomIndex = Math.floor(Math.random() * posts.length);


    useEffect(() => {
        setNewBlog(posts.splice(randomIndex, 5));
        console.log(posts);
    }, [posts])

    const increaseSlide = () => {
        if (slide === newBlog.length - 1) {
            setSlide(0);
            return;
        }
        setSlide((slide) => {
            return slide + 1;
        })
    }

    const decreaseSlide = () => {
        if (slide === 0) {
            setSlide(newBlog.length - 1);
            return;
        }
        setSlide((slide) => {
            return slide - 1;
        })
    }


    return (
        <>
            {newBlog.length &&
                <>
                    <Carousell>
                        <button className="carousel-button prev" onClick={decreaseSlide}><i className="fa fa-arrow-left"></i></button>
                        <button className="carousel-button next" onClick={increaseSlide}><i className="fa fa-arrow-right"></i></button>
                        <Ul>
                            <Slide>
                                <img src={newBlog[slide].featuredImage.link}
                                    alt={newBlog[slide].featuredImage.altText} />
                            </Slide>
                        </Ul>

                    </Carousell>
                    <Title>{newBlog[slide].title}</Title>
                    <FeaturedDesc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam mollitia nihil maiores rem atque, nesciunt, sed itaque qui laudantium officiis laboriosam est accusantium! Eos, porro! Doloribus maiores neque officiis esse rerum iusto provident? Quibusdam ratione quam dolorum alias beatae eveniet vero voluptas repellendus. Impedit, ullam. Reiciendis esse saepe ipsa assumenda repudiandae veritatis. At modi, laboriosam quas nobis officiis vero delectus ipsam soluta et doloremque facere rerum rem? Consequuntur, rerum beatae.</FeaturedDesc>
                    <MenuOption><button>New Year Celebration...</button><button>New Year Celebration...</button></MenuOption> 
                </>
            }

        </>
    )
}

export default Carousel
