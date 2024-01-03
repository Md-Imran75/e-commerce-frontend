import React from 'react'
import Wrapper from '../components/Wrapper'
import { useTranslation } from 'react-i18next';

const ConditionPage = () => {
  const { t } = useTranslation()

  return (
    <div className='my-10 '>
      <Wrapper>
      <div className='p-10 border text-black-500 border-background-500'>
        <div className='text-lg font-bold text-secondary-400 mb-5'>{t('conditions')}: </div>
        <div>{t('condition1')} </div>
        <div>{t('condition2')} </div>
        <div>{t('condition3')} </div>
        <div>{t('condition4')} </div>
        <div>{t('condition5')} </div>
        <div>{t('condition6')} </div>
        <div>{t('condition7')} </div>
        <div>{t('condition8')} </div>
        <div>{t('condition9')} </div>
        <div>{t('condition10')} </div>
        <div>{t('condition11')} </div>
        <div>{t('condition12')} </div>
        <div>{t('condition13')} </div>
        <div>{t('condition14')} </div>
        <div className='mt-5 text-secondary-400 font-bold'>{t('condition15')} </div>


      </div>
      </Wrapper>
    </div>
  )
}

export default ConditionPage
