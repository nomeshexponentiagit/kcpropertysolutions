/**
 * Format INR amounts with Indian number formatting.
 */
export function formatPrice(price: string): string {
  return price;
}

/**
 * Build a WhatsApp deep link URL.
 */
export function whatsappLink(phone: string, message: string): string {
  const cleaned = phone.replace(/[\s+()-]/g, '');
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}

/**
 * Format a phone number for tel: links.
 */
export function telLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`;
}

/**
 * Format a date string for display.
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
