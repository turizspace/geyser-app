import { ExternalAccountType } from '../../pages/auth'
import { UserMeFragment } from '../../types/generated/graphql'

export const hasNostrAccount = (user: UserMeFragment) => {
  if (!user || !user.id) {
    return false
  }

  return (user.externalAccounts || []).some((account) => {
    return account?.accountType === ExternalAccountType.nostr
  })
}

export const hasTwitterAccount = (user: UserMeFragment) => {
  if (!user || !user.id) {
    return false
  }

  return (user.externalAccounts || []).some((account) => {
    return account?.accountType === ExternalAccountType.twitter
  })
}

export const hasFacebookAccount = (user: UserMeFragment) => {
  if (!user || !user.id) {
    return false
  }

  return (user.externalAccounts || []).some((account) => {
    return account?.accountType === ExternalAccountType.facebook
  })
}

export const hasGoogleAccount = (user: UserMeFragment) => {
  if (!user || !user.id) {
    return false
  }

  return (user.externalAccounts || []).some((account) => {
    return account?.accountType === ExternalAccountType.google
  })
}

export const hasGithubAccount = (user: UserMeFragment) => {
  if (!user || !user.id) {
    return false
  }

  return (user.externalAccounts || []).some((account) => {
    return account?.accountType === ExternalAccountType.github
  })
}

export const hasLightningAccount = (user: UserMeFragment) => {
  if (!user || !user.id) {
    return false
  }

  return (user.externalAccounts || []).some((account) => {
    return account?.accountType === ExternalAccountType.lightning
  })
}
