import { t } from '@lingui/macro'
import { atom, useAtom } from 'jotai'
// import { atomWithStorage } from 'jotai/utils'

import { SettingsToggle } from './SettingsToggle'

// export const showTestnetsAtom = atomWithStorage<boolean>('showTestnets', false)
export const showTestnetsAtom = atom<boolean>(false)

export function TestnetsToggle() {
  const [showTestnets, updateShowTestnets] = useAtom(showTestnetsAtom)

  return (
    <SettingsToggle
      title={t`Show testnets`}
      dataid="testnets-toggle"
      isActive={showTestnets}
      toggle={() => void updateShowTestnets((value) => !value)}
    />
  )
}
