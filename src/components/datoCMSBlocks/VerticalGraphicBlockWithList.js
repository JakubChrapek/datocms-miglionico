import React from 'react'
import styled from 'styled-components'
import {
    SectionWrapper,
    ContentWrapper,
    Title
} from './common/components'
import { GatsbyImage } from 'gatsby-plugin-image'


const Container = styled.div`
    padding: 80px 40px 60px 40px;
    
    @media (max-width: 640px) {
        padding: 68px 20px;
    }
`

const Wrapper = styled(SectionWrapper)`
    grid-column-gap: 80px;
    text-align: center;
    padding: 0 100px;
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    position: relative;
    width: calc(100% - 6px);
    left: 3px;
    top: 6px;
    background-color: #fff;
    overflow: visible;
    grid-template-columns: 340px 1fr;
    margin: 0 auto;

    &::before{
        content: '';
        position: absolute;
        background: -webkit-linear-gradient(
          45deg,
        var(--primary-red),
        var(--primary-navy)
        );
        left: -3px;
        right: -3px;
        bottom: -3px;
        top: -3px;
        z-index: -1;
    border-radius: 10px;
    }

    .imgPart{
        width: 340px;
        aspect-ratio: 0.95/1;
        border-radius: 10px;
    }

    @media (max-width: 1192px) {
        padding: 0 50px;
        grid-column-gap: 50px;
        max-width: 100% !important;
    }
    
    @media (max-width: 1044px){
        display: flex;
        flex-direction: column-reverse;
        max-width: 800px !important;
        padding: 0 30px;
        grid-gap: 0;

        .imgPart{
            margin: 10px auto 0 auto;
        }
    }

    @media (max-width: 500px){
        .imgPart{
            width: 100%;
        }
    }
`

const SubTitle = styled.p`
    text-align: center;
    font-weight: 300 !important;
    font-size: 18px !important;
    line-height: 23px !important;
    max-width: 723px;
    letter-spacing: unset  !important;
    text-align: left;
    margin-top: 30px !important;
    @media (max-width: 1044px){
        text-align: center;
        margin-bottom: 20px;
    }
`

const STitle = styled(Title)`
    text-align: left;
    @media (max-width: 1044px){
        text-align: center;
        max-width: 600px;
        margin: 10px auto 0 auto;
    }
`

const List = styled.ul`
    margin: 25px 0 60px 0 !important;
    list-style: none;
    display: ${props => props.mobile ? 'none' : 'flex'};
    justify-content: space-between;

    li{
        display: flex;
        flex-direction: column;
        max-width: 138px;

        p{
            color: var(--primary-red);
            font-weight: 400;
            font-size: 48px;
            line-height: 62px;
            margin-bottom: 20px;
        }

        h3{
            font-weight: 400;
            font-size: 24px;
            line-height: 31px;
            text-align: center;
            color: var(--primary-navy);        }
    }

    @media (max-width: 1100px){
        display: ${props => props.mobile ? 'none' : 'grid'};
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 50px;

        li{
            margin: 0 auto;
        }
    }

    @media (max-width: 1044px) {
        display: ${props => props.desctop ? 'none' : 'grid'};
        width: 100%;
    }

    @media(max-width: 500px){
        grid-template-columns: 1fr;

    }
`

const VerticalGraphickBlockWithList = ({ data }) => {
    return (
        <Container>
            <Wrapper>
                <ContentWrapper>
                    <GatsbyImage className='imgPart' image={data.verticalGraphic.gatsbyImageData} />
                    <List mobile>
                        {data.list.map(el => (
                            <li>
                                <p>{el.number}</p>
                                <h3>{el.description}</h3>
                            </li>
                        ))}
                    </List>
                </ContentWrapper>
                <ContentWrapper>
                    <STitle as='h2'>{data.blockTitle}</STitle>
                    <SubTitle>{data.blockText}</SubTitle>
                    <List desctop>
                        {data.list.map(el => (
                            <li>
                                <p>{el.number}</p>
                                <h3>{el.description}</h3>
                            </li>
                        ))}
                    </List>
                </ContentWrapper>
            </Wrapper>
        </Container>
    )
}

export default VerticalGraphickBlockWithList