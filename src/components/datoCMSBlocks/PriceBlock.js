import React from 'react'
import styled from 'styled-components'
import {
    SectionWrapper,
    ContentWrapper,
    Title,
    UnityContainer
} from './common/components'
import { Paragraph } from '../typography'
import { BUTTON_VARIANTS } from "../../utils/constants"
import Button from '../Button'
import Ok from './../../assets/ok.svg'
import OkWhite from './../../assets/okWhite.svg'
import { Link } from 'gatsby'

const Wrapper = styled(SectionWrapper)`
    grid-template-columns: 1fr;
    text-align: center;
    padding-bottom: 60px;
`

const SubTitle = styled(Paragraph)`
    text-align: center;
    margin: 18px auto 32px !important;
    font-weight: 700 !important;
    font-size: 18px !important;
    color: var(--primary-navy) !important;
    text-transform: uppercase;
    max-width: 700px;
    letter-spacing: unset !important;

`

const PriceGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-radius: 10px;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.05);

    margin-top: 64px;

    @media (max-width: 1044px) {
        grid-template-columns: 1fr;
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
    }
`

const PriceItem = styled.div`
    padding: 20px 30px 45px 30px;
    border-radius: 10px;

    h3{
        font-weight: 600;
        font-size: 48px;
        line-height: 62px;
        color: var(--primary-navy);
        margin-bottom: 37px;
        text-align: left;
    }

    ul{
        display: grid;
        grid-row-gap: 30px;
        margin-bottom: 30px;

        li{
            padding-left: 50px;
            position: relative;

            del{
                text-decoration: unset;
                opacity: var(--opacity);
                position: relative;
            }

            &::before{
                content: url(${Ok});
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }

            &.disabled{
                opacity: .3;
            }
        }
    }

    p{
        color: var(--primary-navy);

    }

    span{
        font-size: 24px;
        display: block;
        margin-bottom: 30px;
        color: var(--primary-red);

        b{
            font-size: 48px;

            @media (max-width: 500px) {
                font-size: 40px;
            }
        }
    }

    

    *{
        text-align: left;
    }

    :nth-child(2){
        transform: translateY(-64px);

        ul{

            li{

                &::before{
                    content: url(${OkWhite})
                }
            }
        }

        *{
            color: #fff;
        }

        a{
            color: var(--primary-navy);

            &:hover{
                
                color: var(--primary-red);
            }
        }

        background: -webkit-linear-gradient(
          45deg,
        var(--primary-red),
        var(--primary-navy)
      );
    }

    @media (max-width: 1044px){
        :nth-child(2){
            transform: unset;
        }
    }
`



export const PriceBlock = ({ data }) => {
    return (

        <Wrapper>
            <UnityContainer>
                <ContentWrapper>
                    <Title>{data.title}</Title>
                    <SubTitle><p>{data.text}</p></SubTitle>
                    <PriceGrid>
                        {data.priceItem.map((el, index) => (
                            <PriceItem key={el.title}>
                                <h3>{el.title}</h3>
                                <ul>
                                    {el.list.map(inEl => (
                                        <li className={inEl.isactive ? '' : 'disabled'}>
                                            <p>{inEl.text}</p>
                                        </li>
                                    ))}
                                </ul>
                                <span>do <b>{el.cennik}</b></span>
                                {index === 1
                                    ? <Button as={Link} variant={BUTTON_VARIANTS.EMPTY} to={'/unit/' + el.linkUrl.unitSlug + '/'}>{el.linkText}</Button>
                                    : <Button as={Link} variant={BUTTON_VARIANTS.FILLED} to={'/unit/' + el.linkUrl.unitSlug + '/'}>{el.linkText}</Button>
                                }

                            </PriceItem>
                        ))}
                    </PriceGrid>
                </ContentWrapper>
            </UnityContainer>
        </Wrapper>
    )
}

export default PriceBlock
