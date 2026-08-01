export type QuoteFormState = {
  name: string
  businessType: string
  projectNeed: string
  budgetRange: string
  timeline: string
  websiteUrl?: string
}

export const validateQuoteForm = (form: QuoteFormState) => {
  const errors: Partial<Record<keyof QuoteFormState, string>> = {}

  if (!form.name.trim()) errors.name = 'Nama wajib diisi.'
  if (!form.businessType.trim()) errors.businessType = 'Tipe bisnis wajib diisi.'
  if (!form.projectNeed.trim()) errors.projectNeed = 'Kebutuhan website wajib diisi.'
  if (!form.budgetRange.trim()) errors.budgetRange = 'Estimasi budget wajib dipilih.'
  if (!form.timeline.trim()) errors.timeline = 'Timeline wajib dipilih.'

  return errors
}

export const buildQuoteMessage = (form: QuoteFormState) => [
  'Halo Anam Web Studio, saya ingin konsultasi kebutuhan website.',
  '',
  `Nama: ${form.name.trim()}`,
  `Tipe bisnis: ${form.businessType.trim()}`,
  `Kebutuhan: ${form.projectNeed.trim()}`,
  `Budget: ${form.budgetRange.trim()}`,
  `Timeline: ${form.timeline.trim()}`,
  form.websiteUrl?.trim() ? `Website saat ini: ${form.websiteUrl.trim()}` : 'Website saat ini: belum ada / belum diisi'
].join('\n')

export const buildWhatsAppHref = (phoneNumber: string, message: string) => {
  const normalizedPhone = phoneNumber.replace(/[^\d]/g, '')

  if (!normalizedPhone) return ''

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`
}
