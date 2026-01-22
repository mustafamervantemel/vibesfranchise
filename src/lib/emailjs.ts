import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_SERVICE_ID = 'service_o7fxcmv';
export const EMAILJS_ADMIN_TEMPLATE_ID = 'template_c585dqq';  // Admin bildirim template'i
export const EMAILJS_USER_TEMPLATE_ID = 'template_z401kgn';   // Kullanıcı onay template'i
export const EMAILJS_PUBLIC_KEY = 'r1dzQpZMdBK7gRWyF';

// EmailJS'i initialize et
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface FormData {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  investmentBudget: string;
  businessExperience: string;
  additionalNotes: string;
}

export const sendApplicationEmail = async (data: FormData): Promise<void> => {
  // Admin'e bildirim gönder
  const adminParams = {
    name: data.fullName,
    email: data.email,
    phone: data.phone,
    location: data.location,
    budget: data.investmentBudget,
    experience: data.businessExperience || 'Belirtilmedi',
    notes: data.additionalNotes || 'Belirtilmedi',
  };

  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_ADMIN_TEMPLATE_ID,
    adminParams,
    EMAILJS_PUBLIC_KEY
  );

  // Kullanıcıya onay maili gönder
  const userParams = {
    to_email: data.email,
    name: data.fullName,
  };

  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_USER_TEMPLATE_ID,
    userParams,
    EMAILJS_PUBLIC_KEY
  );
};
