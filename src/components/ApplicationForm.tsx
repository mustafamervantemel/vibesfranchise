import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  investmentBudget: string;
  businessExperience: string;
  additionalNotes: string;
}

export default function ApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    console.log('Form submitted:', data);

    try {
      const { error } = await supabase.from('franchise_applications').insert([
        {
          full_name: data.fullName,
          phone: data.phone,
          email: data.email,
          location: data.location,
          investment_budget: data.investmentBudget,
          business_experience: data.businessExperience,
          additional_notes: data.additionalNotes,
        },
      ]);

      if (error) throw error;

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Başvuru gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="application" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 sm:p-12 text-center shadow-xl border-2 border-green-200">
            <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-white" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Başvurunuz Alındı!
            </h2>
            <p className="text-lg text-gray-700">
              Başvurunuz başarıyla alındı! Ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="application" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Franchise Başvuru Formu
          </h2>
          <p className="text-lg text-gray-600">
            Formu doldurarak Vibes Sandwich franchise fırsatından yararlanın
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Ad Soyad *
              </label>
              <input
                id="fullName"
                type="text"
                {...register('fullName', { required: 'Ad Soyad gereklidir' })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E62429] focus:border-transparent transition-all ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Adınız ve soyadınız"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Telefon *
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone', { required: 'Telefon numarası gereklidir' })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E62429] focus:border-transparent transition-all ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="0555 123 4567"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                E-posta *
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'E-posta adresi gereklidir',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Geçerli bir e-posta adresi girin',
                  },
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E62429] focus:border-transparent transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="ornek@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                İl / İlçe *
              </label>
              <input
                id="location"
                type="text"
                {...register('location', { required: 'Hedef lokasyon gereklidir' })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E62429] focus:border-transparent transition-all ${
                  errors.location ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="İstanbul / Kadıköy"
              />
              {errors.location && (
                <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="investmentBudget" className="block text-sm font-semibold text-gray-700 mb-2">
                Yatırım Bütçesi *
              </label>
              <select
                id="investmentBudget"
                {...register('investmentBudget', { required: 'Yatırım bütçesi seçimi gereklidir' })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E62429] focus:border-transparent transition-all ${
                  errors.investmentBudget ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Seçiniz</option>
                <option value="500.000TL - 1M TL">500.000TL - 1M TL</option>
                <option value="1M - 2M TL">1M - 2M TL</option>
                <option value="2M TL+">2M TL+</option>
              </select>
              {errors.investmentBudget && (
                <p className="mt-1 text-sm text-red-600">{errors.investmentBudget.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="businessExperience" className="block text-sm font-semibold text-gray-700 mb-2">
                İş Tecrübesi
              </label>
              <textarea
                id="businessExperience"
                {...register('businessExperience')}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E62429] focus:border-transparent transition-all"
                placeholder="İş tecrübeniz hakkında kısa bir açıklama yazın..."
              />
            </div>

            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-700 mb-2">
                Eklemek İstedikleriniz
              </label>
              <textarea
                id="additionalNotes"
                {...register('additionalNotes')}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E62429] focus:border-transparent transition-all"
                placeholder="Bize iletmek istediğiniz ek bilgiler..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#E62429] hover:bg-[#C41E22] text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Gönderiliyor...
                </>
              ) : (
                'Başvuruyu Gönder'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
