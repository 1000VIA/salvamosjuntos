import cookie from 'cookie'
import { FAUNA_SECRET_COOKIE } from './fauna-auth'

export const getCookies = (secret: string) => {
  const cookies = cookie.parse(secret)
  const faunaSecret = cookies[FAUNA_SECRET_COOKIE]

  return faunaSecret
}
