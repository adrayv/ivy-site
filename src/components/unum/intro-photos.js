import React from "react"
import styled from "styled-components"

const IntroPhotoLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 12vh;
  padding-left: 6vw;
  padding-right: 6vw;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template: 1fr / 1fr 1fr 1fr;
  grid-gap: 20px;
`

const IntroPhoto = styled.img`
  max-width: 100%;
`

export default () => {
  return (
    <IntroPhotoLayout>
      <IntroPhoto src="https://dl.airtable.com/.attachmentThumbnails/bb2033f31053c832bb69830b7b12c299/b31e6acd" />
      <IntroPhoto src="https://dl.airtable.com/.attachmentThumbnails/c9087db6876ed94579b2012786e927a4/4b58cc18" />
      <IntroPhoto src="https://dl.airtable.com/.attachmentThumbnails/482fc59b24493b72817db8e519c54c57/83a9bbd8" />
    </IntroPhotoLayout>
  )
}