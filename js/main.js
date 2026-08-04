(function () {
  "use strict";

  var REVIEWS_CONFIG = {
    repo: "chimo95188/thebestboatpainting",
    token: "",
    marker: "[REVIEW]"
  };

  var I18N = {
    es: {
      "topbar.hours": "Lun–Vie 11 AM–7 PM · Sáb–Dom 11 AM–5 PM",
      brand: "The Best Boat Painting",
      "nav.home": "Inicio",
      "nav.services": "Servicios",
      "nav.about": "Nosotros",
      "nav.gallery": "Galería",
      "nav.testimonials": "Testimonios",
      "nav.contact": "Contacto",
      "nav.cta": "Cotiza gratis",
      "hero.badge": "Pintura y remodelación profesional",
      "hero.title1": "Damos vida a tu hogar",
      "hero.title2": "pintura y remodelación de casas",
      "hero.sub": "Acabados de alta calidad y larga duración para interiores, exteriores y remodelaciones. Transformamos tu casa con colores y diseños que te encantarán.",
      "hero.call": "Llama ahora",
      "hero.quote": "Cotización gratis",
      "hero.stat1": "años de experiencia",
      "hero.stat2": "proyectos terminados",
      "hero.stat3": "garantía de trabajo",
      "services.tag": "Nuestros servicios",
      "services.title": "Todo lo que tu casa necesita",
      "services.sub": "Desde un retoque hasta una remodelación completa. Trabajamos con pinturas de primera calidad y prácticas amigables con el medio ambiente.",
      "services.s1.title": "Pintura interior",
      "services.s1.text": "Renovamos paredes y techos con nuevas capas de pintura, eligiendo entre una amplia variedad de colores y acabados.",
      "services.s2.title": "Pintura exterior",
      "services.s2.text": "Pintamos madera, vinilo, ladrillo y otros tipos de fachadas para protegerlas de la intemperie y mejorar su apariencia.",
      "services.s3.title": "Remodelación",
      "services.s3.text": "Reformamos cocinas, baños y espacios completos para darle a tu casa una nueva vida, con acabados modernos y duraderos.",
      "services.s4.title": "Comercial",
      "services.s4.text": "Pintamos oficinas y espacios comerciales, incluyendo paredes, techos y molduras, para crear un ambiente profesional y acogedor.",
      "media.about": "Foto del equipo o de un proyecto",
      "media.badgeTitle": "Luinis Avila",
      "media.badgeSub": "CEO · The Best Boat Painting",
      "about.tag": "Sobre nosotros",
      "about.title": "Pasión por transformar espacios",
      "about.sub": "Somos un equipo dedicado a transformar espacios con acabados hermosos y duraderos. Usamos solo pinturas de la más alta calidad y prácticas ecológicas para garantizar un resultado superior y sostenible.",
      "about.l1": "Pinturas de primera calidad y ecológicas",
      "about.l2": "Acabados limpios, precisos y de larga duración",
      "about.l3": "Precios justos y cotizaciones sin compromiso",
      "about.l4": "Atención personalizada del CEO Luinis Avila",
      "about.cta": "Conoce más",
      "gallery.tag": "Nuestro trabajo",
      "gallery.title": "Proyectos recientes",
      "gallery.sub": "Algunos ejemplos del trabajo que hacemos. Reemplaza estas fotos por las tuyas.",
      "gallery.c1": "Pintura interior · Sala de estar",
      "gallery.c2": "Pintura exterior · Fachada",
      "gallery.c3": "Remodelación · Cocina",
      "gallery.c4": "Remodelación · Baño",
      "gallery.c5": "Pintura interior · Dormitorio",
      "gallery.c6": "Pintura comercial · Oficina",
      "testimonials.tag": "Testimonios",
      "testimonials.title": "Lo que dicen nuestros clientes",
      "testimonials.t1": "“Pintaron toda mi sala en un día y quedó impecable. Muy profesionales y precios justos.”",
      "testimonials.t2": "“Remodelaron mi cocina por completo. Llegaron a tiempo, cuidaron la casa y el resultado superó mis expectativas.”",
      "testimonials.t3": "“Pintaron las oficinas de mi negocio sin interrumpir el trabajo. Quedaron perfectas y muy limpias.”",
      "testimonials.n1": "María G.",
      "testimonials.n2": "Carlos R.",
      "testimonials.n3": "Ana M.",
      "testimonials.p1": "Fort Collins, CO",
      "testimonials.p2": "Loveland, CO",
      "testimonials.p3": "Greeley, CO",
      "review.tag": "Deja tu reseña",
      "review.title": "¿Trabajamos contigo? Cuéntanos tu experiencia",
      "review.name": "Tu nombre *",
      "review.namePh": "Tu nombre",
      "review.location": "Ciudad / Ubicación",
      "review.locationPh": "Fort Collins, CO",
      "review.rating": "Tu calificación *",
      "review.msg": "Tu reseña *",
      "review.msgPh": "Cuéntanos cómo fue tu experiencia...",
      "review.send": "Publicar reseña",
      "review.hint": "Tu reseña se guarda y queda publicada en esta página para que todos la vean.",
      "review.success": "¡Gracias! Tu reseña fue publicada.",
      "contact.tag": "Contacto",
      "contact.title": "¿Listo para hablar de color?",
      "contact.sub": "Conecta con nuestros expertos. Cotizamos gratis y sin compromiso.",
      "contact.fn": "Nombre *",
      "contact.fnPh": "Tu nombre",
      "contact.ln": "Apellido *",
      "contact.lnPh": "Tu apellido",
      "contact.em": "Correo electrónico *",
      "contact.emPh": "tucorreo@ejemplo.com",
      "contact.ph": "Teléfono *",
      "contact.phPh": "(970) 000-0000",
      "contact.msg": "Mensaje *",
      "contact.msgPh": "Cuéntanos sobre tu proyecto...",
      "contact.send": "Enviar mensaje",
      "contact.hint": "También puedes llamarnos o escribirnos por WhatsApp para una respuesta más rápida.",
      "contact.tel": "Teléfono",
      "contact.mail": "Correo",
      "contact.addr": "Ubicación",
      "contact.hours": "Horario",
      "contact.hoursVal": "Lun–Vie: 11 AM – 7 PM · Sáb–Dom: 11 AM – 5 PM",
      "contact.callBtn": "Llamar ahora",
      "contact.wa": "WhatsApp",
      "footer.tag": "Pintura y remodelación de casas con acabados de calidad."
    },

    en: {
      "topbar.hours": "Mon–Fri 11 AM–7 PM · Sat–Sun 11 AM–5 PM",
      brand: "The Best Boat Painting",
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.gallery": "Gallery",
      "nav.testimonials": "Testimonials",
      "nav.contact": "Contact",
      "nav.cta": "Free quote",
      "hero.badge": "Professional painting & remodeling",
      "hero.title1": "Giving life to your home",
      "hero.title2": "house painting and remodeling",
      "hero.sub": "High-quality, long-lasting finishes for interiors, exteriors and remodels. We transform your home with colors and designs you will love.",
      "hero.call": "Call now",
      "hero.quote": "Free quote",
      "hero.stat1": "years of experience",
      "hero.stat2": "completed projects",
      "hero.stat3": "workmanship guarantee",
      "services.tag": "Our services",
      "services.title": "Everything your home needs",
      "services.sub": "From a touch-up to a full remodel. We work with premium paints and environmentally friendly practices.",
      "services.s1.title": "Interior painting",
      "services.s1.text": "We refresh walls and ceilings with new coats of paint, choosing from a wide variety of colors and finishes.",
      "services.s2.title": "Exterior painting",
      "services.s2.text": "We paint wood, vinyl, brick and other siding types to protect them from the elements and improve their look.",
      "services.s3.title": "Remodeling",
      "services.s3.text": "We remodel kitchens, bathrooms and whole spaces to give your home a new life with modern, durable finishes.",
      "services.s4.title": "Commercial",
      "services.s4.text": "We paint offices and commercial spaces, including walls, ceilings and trim, for a professional and welcoming environment.",
      "media.about": "Team or project photo",
      "media.badgeTitle": "Luinis Avila",
      "media.badgeSub": "CEO · The Best Boat Painting",
      "about.tag": "About us",
      "about.title": "Passionate about transforming spaces",
      "about.sub": "We are a team dedicated to transforming spaces with beautiful, long-lasting finishes. We use only the highest quality paints and eco-friendly practices for a superior, sustainable result.",
      "about.l1": "Premium and eco-friendly paints",
      "about.l2": "Clean, precise, long-lasting finishes",
      "about.l3": "Fair prices and free quotes",
      "about.l4": "Personal attention from CEO Luinis Avila",
      "about.cta": "Learn more",
      "gallery.tag": "Our work",
      "gallery.title": "Recent projects",
      "gallery.sub": "Examples of our work. Replace these photos with your own.",
      "gallery.c1": "Interior painting · Living room",
      "gallery.c2": "Exterior painting · Facade",
      "gallery.c3": "Remodeling · Kitchen",
      "gallery.c4": "Remodeling · Bathroom",
      "gallery.c5": "Interior painting · Bedroom",
      "gallery.c6": "Commercial painting · Office",
      "testimonials.tag": "Testimonials",
      "testimonials.title": "What our clients say",
      "testimonials.t1": "“They painted my whole living room in one day and it looks flawless. Very professional and fair prices.”",
      "testimonials.t2": "“They completely remodeled my kitchen. They arrived on time, took care of the house and the result exceeded my expectations.”",
      "testimonials.t3": "“They painted my business offices without interrupting work. Perfect and very clean.”",
      "testimonials.n1": "Maria G.",
      "testimonials.n2": "Carlos R.",
      "testimonials.n3": "Ana M.",
      "testimonials.p1": "Fort Collins, CO",
      "testimonials.p2": "Loveland, CO",
      "testimonials.p3": "Greeley, CO",
      "review.tag": "Leave a review",
      "review.title": "Worked with us? Tell us about your experience",
      "review.name": "Your name *",
      "review.namePh": "Your name",
      "review.location": "City / Location",
      "review.locationPh": "Fort Collins, CO",
      "review.rating": "Your rating *",
      "review.msg": "Your review *",
      "review.msgPh": "Tell us how your experience went...",
      "review.send": "Publish review",
      "review.hint": "Your review is saved and published on this page for everyone to see.",
      "review.success": "Thank you! Your review was published.",
      "contact.tag": "Contact",
      "contact.title": "Ready to talk about color?",
      "contact.sub": "Connect with our experts. We quote for free, no strings attached.",
      "contact.fn": "First name *",
      "contact.fnPh": "Your first name",
      "contact.ln": "Last name *",
      "contact.lnPh": "Your last name",
      "contact.em": "Email address *",
      "contact.emPh": "you@example.com",
      "contact.ph": "Phone *",
      "contact.phPh": "(970) 000-0000",
      "contact.msg": "Message *",
      "contact.msgPh": "Tell us about your project...",
      "contact.send": "Send message",
      "contact.hint": "You can also call or message us on WhatsApp for a faster reply.",
      "contact.tel": "Phone",
      "contact.mail": "Email",
      "contact.addr": "Location",
      "contact.hours": "Hours",
      "contact.hoursVal": "Mon–Fri: 11 AM – 7 PM · Sat–Sun: 11 AM – 5 PM",
      "contact.callBtn": "Call now",
      "contact.wa": "WhatsApp",
      "footer.tag": "House painting and remodeling with quality finishes."
    }
  };

  var currentLang = "es";

  function applyLang(lang) {
    currentLang = lang;
    var dict = I18N[lang];
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key]) nodes[i].textContent = dict[key];
    }
    var phs = document.querySelectorAll("[data-i18n-ph]");
    for (var j = 0; j < phs.length; j++) {
      var pkey = phs[j].getAttribute("data-i18n-ph");
      if (dict[pkey]) phs[j].setAttribute("placeholder", dict[pkey]);
    }
    var btns = document.querySelectorAll(".lang__btn");
    for (var k = 0; k < btns.length; k++) {
      btns[k].classList.toggle("is-active", btns[k].getAttribute("data-lang") === lang);
    }
    try { localStorage.setItem("tbpp-lang", lang); } catch (e) {}
  }

  var langToggle = document.getElementById("langToggle");
  langToggle.addEventListener("click", function (e) {
    var btn = e.target.closest(".lang__btn");
    if (btn) applyLang(btn.getAttribute("data-lang"));
  });

  try {
    var saved = localStorage.getItem("tbpp-lang");
    if (saved && I18N[saved]) applyLang(saved);
  } catch (e) {}

  var nav = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    nav.classList.toggle("is-scrolled", window.scrollY > 10);
  });

  var burger = document.getElementById("navBurger");
  var links = document.getElementById("navLinks");
  burger.addEventListener("click", function () {
    var open = links.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      links.classList.remove("is-open");
      burger.classList.remove("is-open");
    }
  });

  var backTop = document.getElementById("backTop");
  window.addEventListener("scroll", function () {
    backTop.classList.toggle("is-visible", window.scrollY > 600);
  });
  backTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  var form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements;
    var subject = "Solicitud de cotización - " + (f.firstName.value + " " + f.lastName.value).trim();
    var body =
      "Nombre: " + f.firstName.value + " " + f.lastName.value + "\n" +
      "Correo: " + f.email.value + "\n" +
      "Teléfono: " + f.phone.value + "\n\n" +
      "Mensaje:\n" + f.message.value;
    var href =
      "mailto:info@bestboatpainting.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
    window.location.href = href;
  });

  var ratingBox = document.getElementById("rating");
  var revStars = document.getElementById("revStars");
  var starBtns = ratingBox.querySelectorAll(".rating__star");

  function setRating(value) {
    revStars.value = value;
    for (var i = 0; i < starBtns.length; i++) {
      starBtns[i].classList.toggle(
        "is-active",
        parseInt(starBtns[i].getAttribute("data-value"), 10) <= value
      );
    }
  }

  ratingBox.addEventListener("click", function (e) {
    var star = e.target.closest(".rating__star");
    if (star) setRating(parseInt(star.getAttribute("data-value"), 10));
  });

  ratingBox.addEventListener("mouseover", function (e) {
    var star = e.target.closest(".rating__star");
    if (!star) return;
    var v = parseInt(star.getAttribute("data-value"), 10);
    for (var i = 0; i < starBtns.length; i++) {
      starBtns[i].classList.toggle(
        "is-hover",
        parseInt(starBtns[i].getAttribute("data-value"), 10) <= v
      );
    }
  });

  ratingBox.addEventListener("mouseleave", function () {
    for (var i = 0; i < starBtns.length; i++) {
      starBtns[i].classList.remove("is-hover");
    }
  });

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function starSvg(count) {
    var star =
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>';
    var out = "";
    for (var i = 0; i < count; i++) out += star;
    return out;
  }

  function addReviewCard(name, location, rating, text) {
    var card = document.createElement("article");
    card.className = "card card--testimonial";
    var who = location
      ? '<footer class="card__who"><strong>' + escapeHtml(name) + '</strong><span>' + escapeHtml(location) + "</span></footer>"
      : '<footer class="card__who"><strong>' + escapeHtml(name) + "</strong></footer>";
    card.innerHTML =
      '<div class="stars">' + starSvg(rating) + "</div>" +
      '<p class="card__text">"' + escapeHtml(text) + '"</p>' + who;
    document.getElementById("testimonialsGrid").prepend(card);
  }

  function postReview(name, location, rating, text) {
    var title = REVIEWS_CONFIG.marker + " " + name + (location ? " | " + location : "");
    var body = "Calificación: " + rating + "/5\n\n" + text;
    return fetch("https://api.github.com/repos/" + REVIEWS_CONFIG.repo + "/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + REVIEWS_CONFIG.token
      },
      body: JSON.stringify({ title: title, body: body })
    });
  }

  function parseReviewTitle(title) {
    var rest = title.substring(REVIEWS_CONFIG.marker.length).trim();
    var sep = rest.indexOf("|");
    if (sep !== -1) {
      return { name: rest.substring(0, sep).trim(), location: rest.substring(sep + 1).trim() };
    }
    return { name: rest, location: "" };
  }

  function loadReviews() {
    fetch("https://api.github.com/repos/" + REVIEWS_CONFIG.repo + "/issues?state=all&per_page=100")
      .then(function (res) { return res.json(); })
      .then(function (issues) {
        if (!Array.isArray(issues)) return;
        for (var i = issues.length - 1; i >= 0; i--) {
          var issue = issues[i];
          if (!issue.title || issue.title.indexOf(REVIEWS_CONFIG.marker) !== 0) continue;
          var who = parseReviewTitle(issue.title);
          var lines = String(issue.body || "").split("\n");
          var rating = 5;
          var match = lines.length ? /Calificación:\s*(\d+)\s*\/\s*5/i.exec(lines[0]) : null;
          if (match) rating = parseInt(match[1], 10);
          if (rating < 1 || rating > 5) rating = 5;
          var text = lines.slice(1).join("\n").trim() || lines.join("\n").trim();
          addReviewCard(who.name, who.location, rating, text);
        }
      })
      .catch(function () {});
  }

  var reviewForm = document.getElementById("reviewForm");
  var reviewSuccess = document.getElementById("reviewSuccess");

  reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = reviewForm.elements.revName.value.trim();
    var location = reviewForm.elements.revLocation.value.trim();
    var text = reviewForm.elements.revText.value.trim();
    var ratingVal = parseInt(reviewForm.elements.revStars.value, 10) || 5;
    if (!name || !text) return;

    function done() {
      reviewSuccess.hidden = false;
      setTimeout(function () { reviewSuccess.hidden = true; }, 6000);
      reviewForm.reset();
      setRating(5);
    }

    if (REVIEWS_CONFIG.token) {
      addReviewCard(name, location, ratingVal, text);
      postReview(name, location, ratingVal, text)
        .then(function (res) {
          if (!res.ok) throw new Error(res.status);
          done();
        })
        .catch(function () {
          document.getElementById("testimonialsGrid").removeChild(document.getElementById("testimonialsGrid").firstChild);
          alert("No se pudo guardar la reseña. Intenta de nuevo.");
          reviewForm.reset();
          setRating(5);
        });
    } else {
      addReviewCard(name, location, ratingVal, text);
      done();
      var subject = "Nueva reseña - " + name;
      var body =
        "Nombre: " + name + "\n" +
        "Ubicación: " + (location || "-") + "\n" +
        "Calificación: " + ratingVal + "/5\n\n" +
        "Reseña:\n" + text;
      window.location.href =
        "mailto:info@bestboatpainting.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    }
  });

  loadReviews();
})();
