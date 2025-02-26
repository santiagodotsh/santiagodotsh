export interface FormatDate {
  totalYearsString: string
  totalMonthsString: string
  totalString: string
}

export type Time = {
  year: string
  month: string
}

export function formatDate(start: Time, end?: Time): FormatDate {
  const startNumeric = new Date(+start.year, +start.month - 1).getTime()
  const endNumeric = !!end ? new Date(+end.year, +end.month - 1).getTime() : new Date().getTime()

  const total = Math.floor((endNumeric - startNumeric) / (86_400_000 * (304_375 / 10_000)))

  const totalYears = Math.floor(total / 12)
  const totalMonths = total % 12

  const totalYearsString = (totalYears > 0) ? `${totalYears} ${(totalYears === 1) ? 'año' : 'años'}` : ''
  const totalMonthsString = (totalMonths > 0) ? `${totalMonths} ${(totalMonths === 1) ? 'mes' : 'meses'}` : ''

  const totalString = `${totalYearsString} ${((totalYears > 0) && (totalMonths > 0) ? ' | ' : '')} ${totalMonthsString}`

  return {
    totalYearsString,
    totalMonthsString,
    totalString
  }
}
