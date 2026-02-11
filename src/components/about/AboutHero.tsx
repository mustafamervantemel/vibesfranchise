import React from 'react';

export default function AboutHero() {
    return (
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3xYBUSqvErHXrsxeV2D-2soTqklf-gYgBJ8dhBfH74SjiNhhYx4F6QJrLH3tg5a8wJGMaUkglS2fKQbfsPTg8rF3nTDaa14SU_QY6ykYFmQKTqKB9JkUCE015HdPOExPzr2gdVach5WAoo3vp-DtQUmHsD-6BbvFU_UEgiS3msKexzWTm467gjyCYjWbeqo1Uy5ejGje2rWaqX334SCgc70NKodVNc9b13-sPjycxupu_hT1sdjV1kxQ8t8qk351fiKWZvUcRKU6q')" }}
            >
            </div>
            {/* Red Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#e5242a]/80 to-black/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 z-10 bg-black/20"></div> {/* Extra dim for text legibility */}

            {/* Hero Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6 drop-shadow-md">
                    İyi Hisset,<br />Her Isırıkta
                </h1>
                <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                    Biz sadece bir sandviç dükkanı değiliz; biz bir hareketiz. Öğle yemeğinizi günün en güzel anı yapan ekiple tanışın.
                </p>
            </div>
        </section>
    );
}
