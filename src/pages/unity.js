import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"

const HeroContainer = styled.section`
  --container-horizontal-padding: ${80 / 16}rem;
  --container-max-width: calc(
    var(--container-max-size) -
      var(--container-horizontal-padding)
  );
  max-width: var(--container-max-width);
  padding: ${28 / 16}rem ${40 / 16}rem ${24 / 16}rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const AboutTitle = styled(Heading)`
  + .gatsby-image-wrapper {
    margin-top: ${12 / 16}rem;
  }
`
const AboutImage = styled(GatsbyImage)`
  border-radius: ${10 / 16}rem;
  width: 100%;
`


const UnityPage = () => {
    return (
        <>
            <HeroContainer>
                {title && (
                    <AboutTitle color={COLORS.GRADIENT}>
                        {title}
                    </AboutTitle>
                )}
                {img && img.gatsbyImageData && (
                    <AboutImage image={img.gatsbyImageData} />
                )}
            </HeroContainer>
            <StructuredText
                data={''}
                renderBlock={({ record }) => {

                }}
            />
        </>
    )
}

export default UnityPage

// export const unityPageQuery = graphql`
//     query{

//     }
// `