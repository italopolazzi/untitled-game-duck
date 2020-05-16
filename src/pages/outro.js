import React, { Fragment } from 'react'

import { useTranslation } from 'react-i18next'

const OutroPage = () => {
  const { t, i18n } = useTranslation()

  return (
    <Fragment>
      This is the outro page content
      <div className="translated">{t('Welcome to React')}</div>
    </Fragment>
  )
}

export default OutroPage