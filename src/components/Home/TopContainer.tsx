import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import BannerContent from './BannerContent'

interface Props {
    isHide: boolean;
}
interface ContainerProps {
    isHide: boolean
}

const BannerContainer = styled.div<ContainerProps>`
    width: 94%;
    // background: linear-gradient(254.71deg, rgba(${colors.gradDark}) 1.92%, rgba(${colors.gradLight}) 101.29%);
    background: #1b2150;
    border: 2px solid rgba(${colors.border});
    margin: 0 auto;
    border-radius: 25px;
    padding: 2em;
    min-height: 490px;
    backdrop-filter: blur(4px);
    margin-top: ${props => props.isHide ? 0 : '180px'};
    transition: all 0.2s ease-in-out;
`


const TopContainer: React.FC<Props> = ({ isHide }) => {
    return (
        <BannerContainer isHide={isHide}>
            <BannerContent />
        </BannerContainer>
    )
}

export default TopContainer
