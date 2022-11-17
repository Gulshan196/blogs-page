import React, { useState } from 'react'
import { FeatureTitle, NavButton, Row1 } from '../styledComponents/Featured.style';
import { Moon1, RowH } from '../styledComponents/HoneyMoon.style';
import { LeftContainer, LImage, Row3 } from '../styledComponents/Latest.style'
import { Button, NavButton2, Row4, Section } from '../styledComponents/Pagination.style';

const Moon= ({posts}) => {
    const data = posts.sort((a, b) => new Date(b) - new Date(a)).slice(0, 20);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(2);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);

    const Pagination = () => {
        const decrement = () => {
            setPostPerPage(2);
            setCurrentPage(currentPage - 1);
        }
        const increment = () => {
            setPostPerPage(2);
            setCurrentPage(currentPage + 1);
        }
        const seeMore = () => setPostPerPage((prev) => prev + 2);
        return (<>
           <Section>  <Button disabled={currentPage === 1 ? true : false} onClick={decrement}><i className="fa fa-arrow-left"></i> </Button>
           <Button disabled={currentPage === 10 ? true : false} onClick={increment}><i className="fa fa-arrow-right" /> </Button>
           </Section>
           <Row4>
                <NavButton2 >See More</NavButton2>
            </Row4> 
        </>
        )
    }
  return (
    <div>
        <Moon1><h1>Honeymoon</h1></Moon1>
        <RowH spaceBetween>
        {currentPosts.length && currentPosts.map((post,index) => {
                    return (<>
                            <LeftContainer key={post.id}>
                                <LImage src={post.featuredImage.link} />
                                <Row1><p>Places</p> <p></p></Row1>
                                <FeatureTitle>{post.title}</FeatureTitle>
                                <p>{post.meta.description}</p>
                                <Row3>
                                    <NavButton>New year celebration...</NavButton>
                                    <NavButton marginleft>New year celebration...</NavButton>
                                </Row3>
                                <Row1><p>{post.date}</p> <p><i class="fa-solid fa-eye"></i> 10k Viewers</p></Row1>
                            </LeftContainer>
                          
                             </>
                    )
                })}
               <Pagination />
        </RowH>
        
    </div>
  )
}

export default Moon