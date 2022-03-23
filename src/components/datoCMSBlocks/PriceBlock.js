import React from 'react'
import styled from 'styled-components'
import {
    SectionWrapper,
    ContentWrapper,
    Title
} from './common/components'
import { Paragraph } from '../typography'
import { BUTTON_VARIANTS } from "../../utils/constants"
import Button from '../Button'
import Ok from './../../assets/ok.svg'
import OkWhite from './../../assets/okWhite.svg'

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
            color: transparent;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            z-index: 2;

            &::before{
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                background: #fff;
                border-radius: 0.3125rem;
                z-index: -1;
            }
        }

        background: -webkit-linear-gradient(
          45deg,
        var(--primary-red),
        var(--primary-navy)
      );
    }
`

export const PriceBlock = ({ data }) => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Title>{data.title}</Title>
                <SubTitle>{data.text}</SubTitle>
                <PriceGrid>
                    {data.priceItem.map((el, index) => (
                        <PriceItem key={el.title}>
                            <h3>{el.title}</h3>
                            <ul>
                                {el.list.map(inEl => (
                                    <li className={inEl.isactive ? '' : 'disabled'}>
                                        {inEl.text}
                                    </li>
                                ))}
                            </ul>
                            <span>do <b>{el.cennik}</b></span>
                            {index === 1
                                ? <Button variant={BUTTON_VARIANTS.OUTLINED} to={el.linkUrl.unitSlug}>{el.linkText}</Button>
                                : <Button variant={BUTTON_VARIANTS.FILLED} to={el.linkUrl.unitSlug}>{el.linkText}</Button>
                            }

                        </PriceItem>
                    ))}
                </PriceGrid>
            </ContentWrapper>
        </Wrapper>
    )
}

export default PriceBlock
