/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        newAmsterdam: ['New Amsterdam', 'sans-serif'],
        bungeeTint: ['Bungee Tint', 'sans-serif'],
        matemasie: ['Matemasie', 'sans-serif'],
      },
      colors: {
        // Elegant Pastels
        'soft-pink': '#F7C6C7',
        'light-lavender': '#E2C6F2',
        'mint-green': '#B5F2E6',
        'cream': '#F9F5E8',
        'soft-peach': '#FCE2C6',

        // Vibrant Sunset
        'sunset-orange': '#FF6F61',
        'golden-yellow': '#FFD700',
        'fiery-red': '#FF4C4C',
        'coral-pink': '#FF8C8C',
        'warm-taupe': '#D1B5A5',

        // Cool Blues
        'ocean-blue': '#00B4DB',
        'sky-blue': '#7EC8E3',
        'deep-navy': '#003B5C',
        'icy-blue': '#D0F4F7',
        'steel-gray': '#6C7A8D',

        // Bold Neon
        'neon-pink': '#FF00B5',
        'electric-blue': '#00A3E0',
        'lime-green': '#A8E200',
        'purple-haze': '#9B59B6',
        'bright-yellow': '#F7E03C',

        // Earthy Tones
        'forest-green': '#2C6B4F',
        'earth-brown': '#A67C52',
        'sand-beige': '#F0E2D1',
        'slate-gray': '#6C757D',
        'brick-red': '#C75C4A',
        // Modern Color Palette
        'deep-space-blue': '#2A2A72',
        'vivid-violet': '#6D28D9',
        'tropical-teal': '#1E3A8A',
        'rose-quartz': '#F7D4D4',
        'electric-cyan': '#00B2FF',
        'sunset-coral': '#FF6B6B',
        'muted-gold': '#FFD700',
        'slate-charcoal': '#2D2D2D',
        'seafoam-green': '#9CDBD4',
        'plum-purple': '#9B6D9B',
        // Expanded Modern Color Palette
        'midnight-blue': '#003366',
        'turquoise-blue': '#40E0D0',
        'deep-pink': '#FF1493',
        'charcoal-black': '#333333',
        'mint-cream': '#F5FFFA',
        'warm-sand': '#D2B48C',
        'electric-lime': '#CCFF00',
        'grape-purple': '#6F42C1',
        'ash-gray': '#B2BEB5',
        'light-coral': '#F08080',
        // Expanded Modern Color Palette
        'electric-purple': '#BF00FF',
        'crimson-red': '#DC143C',
        'bright-teal': '#00FFCC',
        'royal-blue': '#4169E1',
        'burnt-orange': '#FF4500',
        'soft-lilac': '#D8BFD8',
        'peach-puff': '#FFDAB9',
        'steel-blue': '#4682B4',
        'golden-rod': '#DAA520',
        // Further Expanded Modern Color Palette
        'neon-orange': '#FF5E00',
        'candy-pink': '#FF7F7F',
        'deep-burgundy': '#800020',
        'pastel-peach': '#FFDAB9',
        'sunflower-yellow': '#FFC107',
        'teal-blue': '#008080',
        'bright-magenta': '#FF00FF',
      },
      backgroundImage: {
        'sunset-overdrive': 'linear-gradient(135deg, #FF6B6B, #FFD700)',
        'oceanic-bliss': 'linear-gradient(135deg, #00B2FF, #1E3A8A)',
        'purple-haze': 'linear-gradient(135deg, #6D28D9, #9B6D9B)',
        'tropical-sunrise': 'linear-gradient(135deg, #F7D4D4, #FF6B6B)',
        'cyber-space': 'linear-gradient(135deg, #2A2A72, #00B2FF)',
         // Expanded Modern Gradients
        'neon-glow': 'linear-gradient(135deg, #FF1493, #CCFF00)',
        'tropical-lagoon': 'linear-gradient(135deg, #40E0D0, #003366)',
        'blush-dawn': 'linear-gradient(135deg, #F08080, #FFD700)',
        'urban-twilight': 'linear-gradient(135deg, #333333, #B2BEB5)',
        'vintage-rose': 'linear-gradient(135deg, #D2B48C, #F5FFFA)',
        // Expanded Modern Gradients
        'cosmic-vibe': 'linear-gradient(135deg, #BF00FF, #00FFCC)',
        'crimson-sunset': 'linear-gradient(135deg, #DC143C, #FF4500)',
        'tropical-forest': 'linear-gradient(135deg, #32CD32, #4682B4)',
        'soft-lilac-glow': 'linear-gradient(135deg, #D8BFD8, #FFDAB9)',
        'royal-elegance': 'linear-gradient(135deg, #4169E1, #DAA520)',
         // Further Expanded Modern Gradients
         'neon-pulse': 'linear-gradient(135deg, #FF5E00, #FF7F7F)',
         'electric-dream': 'linear-gradient(135deg, #007BFF, #00B2FF)',
         'forest-sunrise': 'linear-gradient(135deg, #228B22, #FFDAB9)',
         'deep-twilight': 'linear-gradient(135deg, #800020, #FFC107)',
         'teal-mist': 'linear-gradient(135deg, #008080, #00FFFF)',
         'magenta-breeze': 'linear-gradient(135deg, #FF00FF, #FFC0CB)',
      },
    },
  },
  plugins: [require('daisyui')],
}
