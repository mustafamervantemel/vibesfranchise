import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Bu değerleri EmailJS hesabınızdan almanız gerekiyor:
// 1. https://www.emailjs.com adresine gidin
// 2. Hesap oluşturun (ücretsiz)
// 3. Email Services > Add New Service > Gmail veya diğer
// 4. Email Templates > Create New Template
// 5. Account > General > Public Key

export const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';  // Email Services'dan alın
export const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Email Templates'dan alın
export const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // Account > General'dan alın

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
  const templateParams = {
    to_email: 'info@vibessandwich.com', // Başvuruların gönderileceği mail adresi
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

  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_PUBLIC_KEY
  );
};
