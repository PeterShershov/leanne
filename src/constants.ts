export const PHONE = "0504489911";
export const EMAIL = "geyer.leanne@gmail.com";

const WHATSAPP_NUMBER = "972504489811";

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
