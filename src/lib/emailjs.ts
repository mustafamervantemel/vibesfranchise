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
  const adminParams = {
    to_email: 'info@vibessandwich.com',
    from_name: data.fullName,
    from_email: data.email,
    phone: data.phone,
    location: data.location,
    investment_budget: data.investmentBudget,
    business_experience: data.businessExperience || 'Belirtilmedi',
    additional_notes: data.additionalNotes || 'Belirtilmedi',
    message: `
      Yeni Franchise Başvurusu:

      Ad Soyad: ${data.fullName}
      Telefon: ${data.phone}
      E-posta: ${data.email}
      Lokasyon: ${data.location}
      Yatırım Bütçesi: ${data.investmentBudget}
      İş Tecrübesi: ${data.businessExperience || 'Belirtilmedi'}
      Ek Notlar: ${data.additionalNotes || 'Belirtilmedi'}
    `,
  };

  const userParams = {
    to_email: data.email,
    to_name: data.fullName,
  };

  // Admin'e bildirim gönder
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_ADMIN_TEMPLATE_ID,
    adminParams,
    EMAILJS_PUBLIC_KEY
  );

  // Kullanıcıya onay maili gönder
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_USER_TEMPLATE_ID,
    userParams,
    EMAILJS_PUBLIC_KEY
  );
};
