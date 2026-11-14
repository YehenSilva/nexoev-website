// Set the official store URLs here when they are available.
export const STORE_URLS = { play: '', apple: '' };
export const CONTACT_EMAIL = 'nexoev12@gmail.com';

// Official NexoEV Social Media Handles
export const SOCIAL_LINKS = {
  tiktok: 'https://www.tiktok.com/@nexo.ev',
  facebook: 'https://www.facebook.com/profile.php?id=61596396120439',
  instagram: 'https://www.instagram.com/nexo.ev/',
};

// Formspree configuration:
// Replace with your Formspree Form ID (from https://formspree.io/forms)
// You can also provide it via .env with VITE_FORMSPREE_FORM_ID=your_form_id
export const FORMSPREE_FORM_ID = import.meta.env?.VITE_FORMSPREE_FORM_ID || 'xkjjllpj';
export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

