import sarayImg from '../media/saray.png';
import etfestaImg from '../media/etfesta.png';
import oburImg from '../media/obur.png';
import sandoImg from '../media/sando.png';
import citirimImg from '../media/citirim.png';
import istinyeImg from '../media/istinye.png';
import cokcokImg from '../media/cokcok.png';
import capreseImg from '../media/caprese.png';
import cheeseImg from '../media/cheese.png';
import sefimsiImg from '../media/sefimsi.png';
import vibesImg from '../media/vibes.png';
import fuzeImg from '../media/fuze.png';
import anasandImg from '../media/anasand.jpeg';

export interface Product {
    id: number;
    name: string;
    description: string;
    category: string;
    image: string;
    badge?: string;
    tag: string;
}

export const categories = [
    { id: 'all', name: 'Tüm Menü' },
    { id: 'cold', name: 'Soğuk Sandviçler' },
    { id: 'hot', name: 'Sıcak Sandviçler' },
    { id: 'drinks', name: 'İçecekler' },
    { id: 'desserts', name: 'Tatlılar' },
];

export const products: Product[] = [
    {
        id: 1,
        name: 'Saray Sandviç',
        description: 'Francala ekmek arasına; közlenmiş patlıcan sos, pastırma, kaşar peyniri, haşlanmış yumurta, çeşnili sucuk, göbek, roka, soslu zetin, kapya biber.',
        category: 'cold',
        image: sarayImg,
        badge: '30 cm',
        tag: 'Gurme'
    },
    {
        id: 2,
        name: 'Etfesta Sandviç',
        description: 'Francala ekmek arasına; avokado sos, krem peynir, dana macar salam, hindi füme, kavurma, salatalık, domates, göbek, roka, kapya biber, tane mısır.',
        category: 'cold',
        image: etfestaImg,
        badge: '30 cm',
        tag: 'Doyurucu'
    },
    {
        id: 3,
        name: 'Obur Sandviç',
        description: 'Francala ekmek arasına; amerikan salatası, hindi füme, dana macar salam, soslu zeytin, göbek, roka, salatalık, domates.',
        category: 'cold',
        image: oburImg,
        badge: '30 cm',
        tag: 'Klasik'
    },
    {
        id: 4,
        name: 'SandoPesto Sandviç',
        description: 'Francala ekmek arasına; pestolu mayonez sos, kaşar peyniri, dana macar salam, soslu zeytin, haşlanmış yumurta, göbek, roka.',
        category: 'cold',
        image: sandoImg,
        badge: '30 cm',
        tag: 'Pesto Severlere'
    },
    {
        id: 5,
        name: 'Çıtırım Sandviç',
        description: 'Francala ekmek arasına; organik kahvaltılık sos, haşlanmış yumurta, dana macar salam, kaşar peyniri, soslu zeytin, beyaz peynir, kapya biber, labne, salatalık, domates.',
        category: 'cold',
        image: citirimImg,
        badge: '30 cm',
        tag: 'Zengin'
    },
    {
        id: 6,
        name: 'İstinye Sandviç',
        description: 'Francala ekmek arasına; közlenmiş patlıcan sos, dana cotto, jalapeno, beyaz peynir, göbek, kornişon, kapya biber, siyah zeytin.',
        category: 'cold',
        image: istinyeImg,
        badge: '30 cm',
        tag: 'Özel Soslu'
    },
    {
        id: 7,
        name: 'ÇokÇok Sandviç',
        description: 'Francala ekmek arasına; dana macar salam, hindi füme, beyaz peynir, siyah zeytin, göbek, salatalık, domates, kapya biber.',
        category: 'cold',
        image: cokcokImg,
        badge: '30 cm',
        tag: 'Bol Malzemeli'
    },
    {
        id: 8,
        name: 'Caprese Sandviç',
        description: 'Francala ekmek arasına; çeçil peyniri, domates, taze fesleğen, zeytinyağı, pesto sos.',
        category: 'cold',
        image: capreseImg,
        badge: '30 cm',
        tag: 'Vejetaryen'
    },
    {
        id: 9,
        name: 'Cheeses Sandviç',
        description: 'Francalan ekmek arasına; beyaz peynir, cheddar peynir, kaşar peynir, soslu zeytin, göbek, kapya biber.',
        category: 'cold',
        image: cheeseImg,
        badge: '30 cm',
        tag: 'Peynir Sever'
    },
    {
        id: 10,
        name: 'Şefimsi Sandviç',
        description: 'Francala ekmek arasına; dana macar salam, krem peynir, soslu zeytin, baharatlı sos, beyaz peynir, kaşar peynir, domates, salatalık, patates kızartması.',
        category: 'hot',
        image: sefimsiImg,
        badge: '30 cm',
        tag: 'Şefin Spesiyali'
    },
    {
        id: 11,
        name: 'Vibes Klasik Tost',
        description: '200 gr. bazlama ekmeğine; köy biberi, kaşar peyniri, sucuk, organik kahvaltılık sos. (İsteğe göre ketçap, mayonez)',
        category: 'hot',
        image: vibesImg,
        tag: 'Sıcak Tost'
    },
    {
        id: 12,
        name: 'Füze Sandviç',
        description: 'Francala ekmek arasına; çikolatalı fındık ezmesi, organik bal, kaymak, muz.',
        category: 'desserts',
        image: fuzeImg,
        tag: 'Tatlı Kaçamak'
    },
    {
        id: 13,
        name: 'Vibes Special Tost',
        description: '200 gr. bazlama ekmeğine; 50 gr. dana kavurma, sucuk, kaşar peyniri. (İsteğe göre ketçap, mayonez)',
        category: 'hot',
        image: anasandImg,
        tag: 'Special'
    }
];
