import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import { Select, FormField } from 'grommet'

const SwitchLanguageButton = () => {
  const { t, i18n } = useTranslation()
  const [value, setValue] = useState(i18n.fallbackLng)

  useEffect(() => {
    i18n.changeLanguage(value)
  }, [value])

  return (
    <Fragment>
      <FormField label={t('Switch Language')} className="switch-language">
        <Select
          options={['pt', 'en']}
          value={value}
          onChange={({ option }) => setValue(option)}
        />
      </FormField>
    </Fragment>
  )
}

export default SwitchLanguageButton