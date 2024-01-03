import React from 'react'
import Wrapper from '../Wrapper'
import Design from '../modelandbranddesign/Design'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';

const ModelDesign = () => {
  const { t } = useTranslation()

  const { models } = useSelector(state => state.home)

  return (
    <div className='lg:px-10 py-5 lg:py-10 bg-background-200'>
      <Wrapper>
        <div className='lg:py-10 border bg-white-100 border-black-100 px-3 py-3 lg:px-10'>
          <div className='pb-5 text-lg md:text-xl  font-semibold'>           
          {t('allBikeModel')}
          </div>
          <Design data={models} route={'bikes'} name={'model'} />
        </div>
      </Wrapper>
    </div>
  )
}

export default ModelDesign
