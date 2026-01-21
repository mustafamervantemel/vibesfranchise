import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Sparkles, Send } from 'lucide-react';
import { sendApplicationEmail, FormData } from '../lib/emailjs';

export default function ApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
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
      <section id="application" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] transition-colors duration-300">
        <div className="max-w-2xl mx-auto">
          <div className="gradient-border bg-[var(--bg-card)] rounded-3xl p-8 sm:p-12 text-center animate-scale-in">
            <div className="success-checkmark bg-gradient-to-br from-green-400 to-emerald-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/30">
              <CheckCircle2 className="text-white" size={56} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              🎉 Başvurunuz Alındı!
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
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
    w-full px-5 py-4 border-2 rounded-xl transition-all duration-300
    bg-[var(--bg-tertiary)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)]
    ${hasError
      ? 'border-red-500/50 bg-red-500/10 animate-wiggle'
      : focusedField === fieldName
        ? 'border-[#E62429] shadow-lg shadow-red-500/20'
        : 'border-[var(--border-color)] hover:border-[var(--text-tertiary)]'
    }
    focus:outline-none focus:border-[#E62429] focus:shadow-lg focus:shadow-red-500/20
  `;

  return (
    <section id="application" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-300">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/10 to-red-900/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-red-400/10 to-red-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-12 clip-reveal-up">
          <div className="inline-flex items-center gap-2 gradient-border bg-[var(--bg-card)] text-[#E62429] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Send size={16} />
            <span>Hemen Başvurun</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Franchise <span className="gradient-text">Başvuru Formu</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            Formu doldurarak Vibes Sandwich franchise fırsatından yararlanın
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="gradient-border bg-[var(--bg-card)] rounded-3xl shadow-2xl p-6 sm:p-10 clip-reveal-up stagger-2"
        >
          <div className="space-y-6">
            {/* Ad Soyad */}
            <div className="group">
              <label htmlFor="fullName" className="block text-sm font-semibold text-[var(--text-secondary)] mb-2 transition-colors group-focus-within:text-[#E62429]">
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
                <label htmlFor="phone" className="block text-sm font-semibold text-[var(--text-secondary)] mb-2 transition-colors group-focus-within:text-[#E62429]">
                  Telefon *
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', { required: 'Telefon numarası gereklidir' })}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('phone', !!errors.phone)}
                  placeholder="0555 123 4567"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span>⚠️</span> {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-secondary)] mb-2 transition-colors group-focus-within:text-[#E62429]">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="location" className="block text-sm font-semibold text-[var(--text-secondary)] mb-2 transition-colors group-focus-within:text-[#E62429]">
                  İl / İlçe *
                </label>
                <input
                  id="location"
                  type="text"
                  {...register('location', { required: 'Hedef lokasyon gereklidir' })}
                  onFocus={() => setFocusedField('location')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('location', !!errors.location)}
                  placeholder="İstanbul / Kadıköy"
                />
                {errors.location && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span>⚠️</span> {errors.location.message}
                  </p>
                )}
              </div>

              <div className="group">
                <label htmlFor="investmentBudget" className="block text-sm font-semibold text-[var(--text-secondary)] mb-2 transition-colors group-focus-within:text-[#E62429]">
                  Yatırım Bütçesi *
                </label>
                <select
                  id="investmentBudget"
                  {...register('investmentBudget', { required: 'Yatırım bütçesi seçimi gereklidir' })}
                  onFocus={() => setFocusedField('investmentBudget')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('investmentBudget', !!errors.investmentBudget)}
                >
                  <option value="" className="bg-[var(--bg-tertiary)]">Seçiniz</option>
                  <option value="500.000TL - 1M TL" className="bg-[var(--bg-tertiary)]">500.000TL - 1M TL</option>
                  <option value="1M - 2M TL" className="bg-[var(--bg-tertiary)]">1M - 2M TL</option>
                  <option value="2M TL+" className="bg-[var(--bg-tertiary)]">2M TL+</option>
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
              <label htmlFor="businessExperience" className="block text-sm font-semibold text-[var(--text-secondary)] mb-2 transition-colors group-focus-within:text-[#E62429]">
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
              <label htmlFor="additionalNotes" className="block text-sm font-semibold text-[var(--text-secondary)] mb-2 transition-colors group-focus-within:text-[#E62429]">
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
