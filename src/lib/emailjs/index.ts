import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUPLIC_KEY = import.meta.env.VITE_EMAILJS_KEY;

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = (formData: FormData) => {
  const config = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, config, PUPLIC_KEY);
};
