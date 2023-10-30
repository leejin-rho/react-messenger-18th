import styled from 'styled-components'
import { colors } from '../style/colors'
import { useState } from 'react'
import { imgPath } from '../style/imgPath'
import { ReactComponent as ArrowIcon } from '../assets/svgs/arrow.svg'

export const FriendList = () => {
  return (
    <FriendContainer>
      <FriendBox>
        <Profile src={imgPath.profile[1]} />
        <FriendName>얼음땡만하는사람</FriendName>
        <ArrowIcon />
      </FriendBox>
    </FriendContainer>
  )
}

const FriendContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 54.2rem;
  background-color: ${colors.grey_50};
  overflow: auto;
`

const FriendBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0.75rem 0rem 1.25rem;
  width: 100%;
  height: 4.375rem;
  background-color: ${colors.grey_50};
`
const Profile = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 3.125rem;
  margin-right: 0.63rem;
`
const FriendName = styled.span`
  color: ${colors.grey_700};
  font-family: 'Pretendard-Medium';
  font-size: 1.125rem;
  line-height: 1.575rem;
  width: 16.5rem;
`
