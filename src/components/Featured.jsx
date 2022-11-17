import React from 'react'
import { MenuOption } from '../styledComponents/Carousel.styled'
import { FHeading, Hr, ImageDesc, Row } from '../styledComponents/Heading.style'
import Carousel from './Carousel'

const Featured = ({posts}) => {
  return (
    <>
        <Row><FHeading><h1>Featured</h1></FHeading></Row>
        <Carousel posts={posts}/>
        <ImageDesc><p>places</p><i className="fa-solid fa-share-nodes"></i></ImageDesc>     
    </>
  )
}

export default Featured
