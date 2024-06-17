/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Temp fix added for tailwind styles not applying
  safelist: [
    // Google Fonts import URL
    'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap',

    // General styles
    'max-w-[1440px]',
    'mx-auto',
    'sm:px-16',
    'px-6',
    'py-4',
    'flex',
    'items-center',
    'justify-center',
    'justify-between',
    'flex-row',
    'relative',
    'bg-primary-blue',
    'text-white',
    'rounded-full',
    'mt-10',

    // Hero styles
    'hero',
    'xl:flex-row',
    'flex-col',
    'gap-5',
    'z-0',
    'xl:h-screen',
    'w-[90%]',
    'xl:h-full',
    'h-[590px]',
    'bg-hero-bg',
    'bg-repeat-round',

    // Home styles
    'home__text-container',
    'flex-col',
    'items-start',
    'justify-start',
    'gap-y-2.5',
    'text-black-100',
    'home__filters',
    'flex-between',
    'home__filter-container',
    'home__cars-wrapper',
    'grid-cols-4',
    'xl:grid-cols-3',
    'md:grid-cols-2',
    'grid-cols-1',
    'w-full',
    'gap-8',
    'pt-14',
    'home__error-container',

    // Car Card styles
    'car-card',
    'hover:bg-white',
    'hover:shadow-md',
    'rounded-3xl',
    'car-card__content',
    'car-card__content-title',
    'capitalize',
    'car-card__price',
    'leading-[38px]',
    'font-extrabold',
    'car-card__price-dollar',
    'self-start',
    'leading-[17px]',
    'font-semibold',
    'car-card__price-day',
    'self-end',
    'font-medium',
    'car-card__image',
    'my-3',
    'object-contain',
    'car-card__icon-container',
    'group-hover:invisible',
    'text-grey',
    'car-card__icon',
    'car-card__icon-text',
    'car-card__btn-container',

    // Car Details styles
    'car-details__dialog-panel',
    'max-w-lg',
    'max-h-[90vh]',
    'overflow-y-auto',
    'transform',
    'rounded-2xl',
    'bg-white',
    'p-6',
    'text-left',
    'shadow-xl',
    'transition-all',
    'car-details__close-btn',
    'w-fit',
    'p-2',
    'rounded-full',
    'car-details__main-image',
    'bg-pattern',
    'bg-cover',
    'bg-center',
    'rounded-lg',

    // Custom Filter styles
    'custom-filter__btn',
    'min-w-[127px]',
    'cursor-default',
    'rounded-lg',
    'custom-filter__options',
    'max-h-60',
    'overflow-auto',
    'rounded-md',
    'ring-1',
    'ring-black',
    'ring-opacity-5',
    'focus:outline-none',

    // Footer styles
    'footer',
    'footer__links-container',
    'max-md:flex-col',
    'flex-wrap',
    'footer__rights',
    'footer__links',
    'footer__link',
    'footer__copyrights',
    'searchbar',
    'searchbar__item',
    'searchbar__input',
    'search-manufacturer',
    'search-manufacturer__input',
    'search-manufacturer__options',
    'search-manufacturer__option',
    // Add other custom classes as needed
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      }
    },
  },
  plugins: [],
};