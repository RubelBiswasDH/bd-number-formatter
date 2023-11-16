interface IOptions {
  nDecimalPoints?: number
}

export default function formatNumber(number: number = 0, options: IOptions = { }) {
  const bdFormatter = new Intl.NumberFormat('en-IN', { currency: 'BDT', minimumFractionDigits: options?.nDecimalPoints ?? 0, maximumFractionDigits: options?.nDecimalPoints ?? 0 })

  if (typeof number === 'number') {
    return bdFormatter?.format(number)
  }

  if (!number) {
    return number
  }
  
  if (isNaN(Number(number))) {
    return number
  }
  
  return bdFormatter?.format(number)
}

export { formatNumber }
