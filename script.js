// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden")
})

// Navbar Scroll Effect
const navbar = document.getElementById("navbar")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.classList.add("shadow-lg")
  } else {
    navbar.classList.remove("shadow-lg")
  }

  lastScroll = currentScroll
})

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Close mobile menu if open
      mobileMenu.classList.add("hidden")
    }
  })
})

// Program Tabs Functionality
const programTabs = document.querySelectorAll(".program-tab")
const programContent = document.getElementById("program-content")

const programData = {
  kindergarten: {
    title: "KINDERGARTEN",
    description1:
      "Our kindergarten program provides a nurturing environment where young learners develop fundamental skills through play-based learning, creative activities, and social interaction.",
    description2:
      "We focus on building strong foundations in literacy, numeracy, and social-emotional development while fostering curiosity and a love for learning.",
    features: [
      "Play-based learning approach",
      "Bilingual instruction",
      "Social skills development",
      "Creative arts and music",
    ],
  },
  elementary: {
    title: "ELEMENTARY SCHOOL",
    description1:
      "Our elementary program builds upon foundational skills with a comprehensive curriculum that challenges students academically while nurturing their individual talents and interests.",
    description2:
      "Students engage in project-based learning, STEM activities, and cultural enrichment programs that prepare them for future academic success.",
    features: [
      "Core curriculum excellence",
      "STEM integration",
      "Arts and athletics programs",
      "Character development",
    ],
  },
  middle: {
    title: "MIDDLE SCHOOL",
    description1:
      "Our middle school program prepares students for high school and beyond with rigorous academics, leadership opportunities, and personalized support during these critical developmental years.",
    description2:
      "Students explore advanced topics, participate in competitive programs, and develop the critical thinking skills necessary for success in secondary education.",
    features: ["Advanced curriculum", "Leadership programs", "College preparation", "Extracurricular activities"],
  },
}

programTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    programTabs.forEach((t) => {
      t.classList.remove("active", "bg-primary", "text-white")
      t.classList.add("bg-white", "text-gray-700")
    })

    // Add active class to clicked tab
    tab.classList.add("active", "bg-primary", "text-white")
    tab.classList.remove("bg-white", "text-gray-700")

    // Get program data
    const program = tab.dataset.program
    const data = programData[program]

    // Update content with animation
    programContent.style.opacity = "0"

    setTimeout(() => {
      programContent.querySelector("h3").textContent = data.title
      const paragraphs = programContent.querySelectorAll("p")
      paragraphs[0].textContent = data.description1
      paragraphs[1].textContent = data.description2

      const features = programContent.querySelectorAll("li")
      features.forEach((feature, index) => {
        feature.querySelector(".fas").nextSibling.textContent = " " + data.features[index]
      })

      programContent.style.opacity = "1"
    }, 300)
  })
})

// Calendar Month Selection
const monthButtons = document.querySelectorAll(".month-btn")

monthButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    monthButtons.forEach((btn) => {
      btn.classList.remove("bg-white/20")
    })

    // Add active class to clicked button
    button.classList.add("bg-white/20")

    // Update calendar (in production, this would fetch real data)
    console.log("Selected month:", button.dataset.month)
  })
})

// Calendar Day Click
const calendarDays = document.querySelectorAll('.grid > div[class*="cursor-pointer"]')

calendarDays.forEach((day) => {
  day.addEventListener("click", () => {
    // Remove highlight from all days
    calendarDays.forEach((d) => {
      d.classList.remove("bg-primary", "text-white", "font-bold")
    })

    // Highlight clicked day
    day.classList.add("bg-primary", "text-white", "font-bold")

    console.log("Selected day:", day.textContent)
  })
})

// Quick Link Cards Click Animation
const quickLinkCards = document.querySelectorAll("#admissions .card-hover")

quickLinkCards.forEach((card) => {
  const button = card.querySelector("button")

  button.addEventListener("click", (e) => {
    e.stopPropagation()

    // Add ripple effect
    const ripple = document.createElement("span")
    ripple.style.position = "absolute"
    ripple.style.borderRadius = "50%"
    ripple.style.backgroundColor = "rgba(227, 30, 36, 0.3)"
    ripple.style.width = "100px"
    ripple.style.height = "100px"
    ripple.style.left = e.clientX - card.getBoundingClientRect().left - 50 + "px"
    ripple.style.top = e.clientY - card.getBoundingClientRect().top - 50 + "px"
    ripple.style.animation = "ripple 0.6s ease-out"

    card.style.position = "relative"
    card.style.overflow = "hidden"
    card.appendChild(ripple)

    setTimeout(() => ripple.remove(), 600)

    console.log("Card clicked:", button.textContent)
  })
})

// Add ripple animation
const style = document.createElement("style")
style.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Why Learn With Us Cards Click
const whyLearnCards = document.querySelectorAll("#programs .card-hover")

whyLearnCards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").textContent
    console.log("Feature clicked:", title)

    // Add pulse animation
    card.style.animation = "pulse 0.5s ease"
    setTimeout(() => {
      card.style.animation = ""
    }, 500)
  })
})

// Newsletter Form Submission
const newsletterForm = document.querySelector("footer form")

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = newsletterForm.querySelector('input[type="email"]').value

    if (email) {
      // Show success message
      const button = newsletterForm.querySelector("button")
      const originalText = button.textContent
      button.textContent = "SUBSCRIBED!"
      button.classList.add("bg-green-600")

      setTimeout(() => {
        button.textContent = originalText
        button.classList.remove("bg-green-600")
        newsletterForm.reset()
      }, 2000)

      console.log("Newsletter subscription:", email)
    }
  })
}

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTop")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.remove("hidden")
  } else {
    scrollTopBtn.classList.add("hidden")
  }
})

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Intersection Observer for Fade-in Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
})

// CTA Button Clicks
const ctaButtons = document.querySelectorAll(".btn-primary")

ctaButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("CTA clicked:", button.textContent)

    // Add click animation
    button.style.transform = "scale(0.95)"
    setTimeout(() => {
      button.style.transform = ""
    }, 150)
  })
})

// Testimonial Navigation
const prevTestimonial = document.querySelector(".fa-chevron-left").closest("button")
const nextTestimonial = document.querySelector(".fa-chevron-right").closest("button")

const testimonials = [
  {
    quote:
      "We are so happy we chose CBS for our children's education. The bilingual program has given them such an advantage, and the teachers genuinely care about each student's success. The staff goes above and beyond to create a nurturing environment where children thrive academically and socially.",
    name: "SARAH MILLER",
    role: "Parent of Two Students",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
  {
    quote:
      "The quality of education at CBS is exceptional. Our daughter has grown so much academically and socially. The bilingual curriculum has opened up so many opportunities for her future. We couldn't be happier with our choice.",
    name: "MICHAEL CHEN",
    role: "Parent of Grade 3 Student",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  },
  {
    quote:
      "CBS has exceeded all our expectations. The teachers are passionate, the facilities are top-notch, and our son loves going to school every day. The bilingual program is truly impressive and well-structured.",
    name: "JENNIFER PATEL",
    role: "Parent of Kindergarten Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
  },
]

let currentTestimonial = 0

function updateTestimonial() {
  const testimonialSection = document.querySelector("#testimonial-content")
  if (!testimonialSection) return

  const data = testimonials[currentTestimonial]
  const quote = document.querySelector(".fa-quote-left").nextElementSibling
  const name = quote.parentElement.nextElementSibling.querySelector("h4")
  const role = quote.parentElement.nextElementSibling.querySelector("p")
  const image = quote.parentElement.nextElementSibling.querySelector("img")

  // Fade out
  quote.style.opacity = "0"

  setTimeout(() => {
    quote.textContent = data.quote
    name.textContent = data.name
    role.textContent = data.role
    image.src = data.image

    // Fade in
    quote.style.opacity = "1"
  }, 300)

  // Update dots
  const dots = document.querySelectorAll(".flex.justify-center.mt-8 button")
  dots.forEach((dot, index) => {
    if (index === currentTestimonial) {
      dot.classList.add("bg-primary")
      dot.classList.remove("bg-gray-300")
    } else {
      dot.classList.remove("bg-primary")
      dot.classList.add("bg-gray-300")
    }
  })
}

if (prevTestimonial && nextTestimonial) {
  prevTestimonial.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length
    updateTestimonial()
  })

  nextTestimonial.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length
    updateTestimonial()
  })
}

// Testimonial Dots Navigation
const testimonialDots = document.querySelectorAll(".flex.justify-center.mt-8 button")

testimonialDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentTestimonial = index
    updateTestimonial()
  })
})

// Add transition for smooth changes
document.querySelectorAll(".fa-quote-left").forEach((quote) => {
  if (quote.nextElementSibling) {
    quote.nextElementSibling.style.transition = "opacity 0.3s ease"
  }
})

// Auto-play testimonials (optional)
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length
  updateTestimonial()
}, 8000)

// Log page load
console.log("Canadian Bilingual School website loaded successfully!")
console.log("All interactive components are ready.")
