import React, { Fragment } from 'react'

import { useTranslation } from 'react-i18next'

const SwitchLanguageButton = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (event) => {
    const { value } = event.target
    i18n.changeLanguage(value)
  }

  return (
    <Fragment>
      <form className="switch-language">
        <span>{t('Switch Language')}</span>
        <span>{t('test.new')}</span>
        {/* <label htmlFor=""></label> */}
        <input className="switch-language-input" type="button" onClick={changeLanguage} value="en" />
        <input className="switch-language-input" type="button" onClick={changeLanguage} value="pt" />
      </form>
    </Fragment>
  )
}

export default SwitchLanguageButton