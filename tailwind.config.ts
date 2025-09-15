import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Modern Design Custom Colors
        "warm-orange": "hsl(var(--warm-orange))",
        "soft-orange": "hsl(var(--soft-orange))",
        "light-orange": "hsl(var(--light-orange))",
        "dark-gray": "hsl(var(--dark-gray))",
        "medium-gray": "hsl(var(--medium-gray))",
        "light-gray": "hsl(var(--light-gray))",
        "warm-white": "hsl(var(--warm-white))",
        // Neon colors for tags
        "neon-green": "hsl(var(--neon-green))",
        "neon-pink": "hsl(var(--neon-pink))",
        "neon-cyan": "hsl(var(--neon-cyan))",
        "neon-yellow": "hsl(var(--neon-yellow))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
         "slide-up": {
           "0%": {
             opacity: "0",
             transform: "translateY(60px)"
           },
           "100%": {
             opacity: "1",
             transform: "translateY(0)"
           }
         },
         "slide-down": {
           "0%": {
             opacity: "0",
             transform: "translateY(-60px)"
           },
           "100%": {
             opacity: "1",
             transform: "translateY(0)"
           }
         },
         "smooth-slide-up": {
           "0%": {
             opacity: "0",
             transform: "translateY(80px)"
           },
           "100%": {
             opacity: "1",
             transform: "translateY(0)"
           }
         },
         "gentle-fade-up": {
           "0%": {
             opacity: "0",
             transform: "translateY(40px)"
           },
           "100%": {
             opacity: "1",
             transform: "translateY(0)"
           }
         },
         "section-reveal": {
           "0%": {
             opacity: "0",
             transform: "translateY(100px) scale(0.95)"
           },
           "100%": {
             opacity: "1",
             transform: "translateY(0) scale(1)"
           }
         }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "fade-in-left": "fade-in-left 0.6s ease-out forwards",
        "fade-in-right": "fade-in-right 0.6s ease-out forwards",
         "scale-in": "scale-in 0.5s ease-out forwards",
         "slide-up": "slide-up 0.8s ease-out forwards",
         "slide-down": "slide-down 0.8s ease-out forwards",
         "smooth-slide-up": "smooth-slide-up 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
         "gentle-fade-up": "gentle-fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
         "section-reveal": "section-reveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
