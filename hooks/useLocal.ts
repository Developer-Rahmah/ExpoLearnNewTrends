import Colors from '../constants/Colors'
import Locale from '../constants/Locale'
import useColorScheme from '../hooks/useColorScheme'
import useDeviceLocale from './useDeviceLocale'

export function useLocal (
  props: { en?: string; ar?: string },
  stringName: keyof typeof Locale.en & keyof typeof Locale.ar
) {
  const locale = useDeviceLocale()
  const stringFromLocale = props[locale]

  if (stringFromLocale) {
    return stringFromLocale
  } else {
    return Locale[locale][stringName]
  }
}
