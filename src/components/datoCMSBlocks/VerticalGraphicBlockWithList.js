import React from 'react'
import styled from 'styled-components'
import {
    SectionWrapper,
    ContentWrapper,
    Title
} from './common/components'
import { GatsbyImage } from 'gatsby-plugin-image'


const Container = styled.div`
    padding: 80px 40px;
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
`

const STitle = styled(Title)`
    text-align: left;
`

const List = styled.ul`
    margin: 15px 0 60px 0 !important;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 30px;
    list-style: none;

    li{
        display: flex;
        flex-direction: column;

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
        }
    }
`

const VerticalGraphickBlockWithList = ({ data }) => {
    return (
        <Container>
            <Wrapper>
                <ContentWrapper>
                    <GatsbyImage className='imgPart' image={data.verticalGraphic.gatsbyImageData} />
                </ContentWrapper>
                <ContentWrapper>
                    <STitle as='h2'>{data.blockTitle}</STitle>
                    <SubTitle>{data.blockText}</SubTitle>
                    <List>
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