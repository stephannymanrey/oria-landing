// Número del asesor comercial de ORIA. Nota: para wa.me los números
// mexicanos NO llevan el "1" que sí se usa para marcar desde el
// extranjero (+52 1 221 414 5086 -> 522214145086).
const WHATSAPP_NUMBER = '522214145086'
const DEFAULT_MESSAGE = 'Hola, quiero saber más sobre ORIA y cómo puede ayudar a mi negocio.'

export function getWhatsAppUrl(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
