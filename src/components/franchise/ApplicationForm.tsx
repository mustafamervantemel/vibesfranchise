import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Sparkles, Send } from 'lucide-react';
import { sendApplicationEmail, FormData } from '../../lib/emailjs';
import { TURKIYE_ILLER, IL_LISTESI } from '../../data/turkiye-iller';

const formatPhoneNumber = (value: string): string => {
  let numbers = value.replace(/\D/g, '');

  // Başındaki 0'ı kaldır (biz ekleyeceğiz)
  if (numbers.startsWith('0')) {
    numbers = numbers.slice(1);
  }

  const limited = numbers.slice(0, 10);

  if (limited.length === 0) return '';
  if (limited.length <= 3) return `0${limited}`;
  if (limited.length <= 6) return `0${limited.slice(0, 3)} ${limited.slice(3)}`;
  if (limited.length <= 8) return `0${limited.slice(0, 3)} ${limited.slice(3, 6)} ${limited.slice(6)}`;
  return `0${limited.slice(0, 3)} ${limited.slice(3, 6)} ${limited.slice(6, 8)} ${limited.slice(8)}`;
};

export default function ApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [selectedIl, setSelectedIl] = useState('');
  const [phoneDisplay, setPhoneDisplay] = useState('');
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log('Form submitted:', data);

    try {
      await sendApplicationEmail(data);
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
      <section id="application" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 text-center shadow-xl">
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/30">
              <CheckCircle2 className="text-white" size={56} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
              🎉 Başvurunuz Alındı!
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Başvurunuz başarıyla alındı! Ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>
            <div className="mt-8 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="text-[#E62429] animate-bounce-subtle"
                  size={24}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const inputClasses = (fieldName: string, hasError: boolean) => `
    w-full px-5 py-4 border-2 rounded-2xl transition-all duration-300
    bg-gray-50 text-[#1A1A1A] placeholder-gray-400
    ${hasError
      ? 'border-red-500/50 bg-red-500/10'
      : focusedField === fieldName
        ? 'border-[#E62429] shadow-lg shadow-red-500/20'
        : 'border-gray-200 hover:border-gray-300'
    }
    focus:outline-none focus:border-[#E62429] focus:shadow-lg focus:shadow-red-500/20
  `;

  return (
    <section id="application" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/10 to-red-900/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-red-400/10 to-red-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#C41E22]/10 text-[#E62429] px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[#C41E22]/20">
            <Send size={16} />
            <span>Hemen Başvurun</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Franchise <span className="text-[#E62429]">Başvuru Formu</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Formu doldurarak Vibes Sandwich franchise fırsatından yararlanın
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border border-gray-200 rounded-[2rem] shadow-2xl p-6 sm:p-10"
        >
          <div className="space-y-6">
            {/* Ad Soyad */}
            <div className="group">
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-600 mb-2 transition-colors group-focus-within:text-[#E62429]">
                Ad Soyad *
              </label>
              <input
                id="fullName"
                type="text"
                {...register('fullName', { required: 'Ad Soyad gereklidir' })}
                onFocus={() => setFocusedField('fullName')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('fullName', !!errors.fullName)}
                placeholder="Adınız ve soyadınız"
              />
              {errors.fullName && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <span>⚠️</span> {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Phone & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-600 mb-2 transition-colors group-focus-within:text-[#E62429]">
                  Telefon *
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phoneDisplay}
                  onChange={(e) => {
                    const formatted = formatPhoneNumber(e.target.value);
                    setPhoneDisplay(formatted);
                    setValue('phone', formatted);
                  }}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('phone', !!errors.phone)}
                  placeholder="0555 123 45 67"
                />
                <input type="hidden" {...register('phone', { required: 'Telefon numarası gereklidir' })} />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span>⚠️</span> {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2 transition-colors group-focus-within:text-[#E62429]">
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
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('email', !!errors.email)}
                  placeholder="ornek@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span>⚠️</span> {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Location & Budget Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="group">
                <label htmlFor="il" className="block text-sm font-semibold text-gray-600 mb-2 transition-colors group-focus-within:text-[#E62429]">
                  İl *
                </label>
                <select
                  id="il"
                  value={selectedIl}
                  onChange={(e) => {
                    setSelectedIl(e.target.value);
                    setValue('location', '');
                  }}
                  onFocus={() => setFocusedField('il')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('il', !selectedIl && !!errors.location)}
                >
                  <option value="" className="bg-white">İl Seçiniz</option>
                  {IL_LISTESI.map((il) => (
                    <option key={il} value={il} className="bg-white">
                      {il}
                    </option>
                  ))}
                </select>
              </div>

              <div className="group">
                <label htmlFor="location" className="block text-sm font-semibold text-gray-600 mb-2 transition-colors group-focus-within:text-[#E62429]">
                  İlçe *
                </label>
                <select
                  id="location"
                  {...register('location', { required: 'İlçe seçimi gereklidir' })}
                  disabled={!selectedIl}
                  onFocus={() => setFocusedField('location')}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClasses('location', !!errors.location)} ${!selectedIl ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <option value="" className="bg-white">
                    {selectedIl ? 'İlçe Seçiniz' : 'Önce il seçiniz'}
                  </option>
                  {selectedIl && TURKIYE_ILLER[selectedIl]?.map((ilce) => (
                    <option key={ilce} value={`${selectedIl} / ${ilce}`} className="bg-white">
                      {ilce}
                    </option>
                  ))}
                </select>
                {errors.location && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span>⚠️</span> {errors.location.message}
                  </p>
                )}
              </div>

              <div className="group">
                <label htmlFor="investmentBudget" className="block text-sm font-semibold text-gray-600 mb-2 transition-colors group-focus-within:text-[#E62429]">
                  Yatırım Bütçesi *
                </label>
                <select
                  id="investmentBudget"
                  {...register('investmentBudget', { required: 'Yatırım bütçesi seçimi gereklidir' })}
                  onFocus={() => setFocusedField('investmentBudget')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('investmentBudget', !!errors.investmentBudget)}
                >
                  <option value="" className="bg-white">Seçiniz</option>
                  <option value="500.000TL - 1M TL" className="bg-white">500.000TL - 1M TL</option>
                  <option value="1M - 2M TL" className="bg-white">1M - 2M TL</option>
                  <option value="2M TL+" className="bg-white">2M TL+</option>
                </select>
                {errors.investmentBudget && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span>⚠️</span> {errors.investmentBudget.message}
                  </p>
                )}
              </div>
            </div>

            {/* Business Experience */}
            <div className="group">
              <label htmlFor="businessExperience" className="block text-sm font-semibold text-gray-600 mb-2 transition-colors group-focus-within:text-[#E62429]">
                İş Tecrübesi
              </label>
              <textarea
                id="businessExperience"
                {...register('businessExperience')}
                onFocus={() => setFocusedField('businessExperience')}
                onBlur={() => setFocusedField(null)}
                rows={3}
                className={inputClasses('businessExperience', false)}
                placeholder="İş tecrübeniz hakkında kısa bir açıklama yazın..."
              />
            </div>

            {/* Additional Notes */}
            <div className="group">
              <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-600 mb-2 transition-colors group-focus-within:text-[#E62429]">
                Eklemek İstedikleriniz
              </label>
              <textarea
                id="additionalNotes"
                {...register('additionalNotes')}
                onFocus={() => setFocusedField('additionalNotes')}
                onBlur={() => setFocusedField(null)}
                rows={3}
                className={inputClasses('additionalNotes', false)}
                placeholder="Bize iletmek istediğiniz ek bilgiler..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-5 text-lg font-bold disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <div className="spinner" />
                  Gönderiliyor...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send size={22} />
                  Başvuruyu Gönder
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
