// Central site config — no database, no env vars required.

export const TELEGRAM_URL = "https://t.me/Apforuzbekistan";

export const CONTACT = {
  phone: "+998 55 701 01 06",
  phoneHref: "tel:+998557010106",
  email: "ap@innovativecentre.org",
  emailHref: "mailto:ap@innovativecentre.org",
} as const;

// AP exam centre identity + test venue.
export const CENTRE = {
  code: "788001",
  city: "Samarkand",
  addressLine: "Gagarin street 95A",
  fullAddress: "Gagarin street 95A, Samarkand city, Uzbekistan",
  mapsUrl: "https://maps.google.com/?q=Gagarin+street+95A+Samarkand",
} as const;
