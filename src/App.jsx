import { useState } from "react";
import {
  Mail, Phone, MapPin, Linkedin, Download, ExternalLink, BookOpen, Megaphone,
  LayoutGrid, PenTool, FileText, Newspaper
} from "lucide-react";
// L'importation du fichier CSS a été retirée pour résoudre le problème de compilation.
// Le style est géré uniquement par les classes Tailwind.


// NOTE IMPORTANTE : Ce code est une application React complète, prête à être déployée.
// Les composants manquants (Card, Badge, Button) ont été recréés ici
// pour que le projet soit 100% autonome et fonctionnel.

// Le composant principal de l'application.
export default function App() {
  // ----------
  // DONNÉES DU PROFIL (utilisées dans toute l'application)
  // ----------
  const PROFILE = {
    name: "Manon Sobczyk",
    title: "Conceptrice-rédactrice freelance — Communication & Médiation culturelle",
    location: "Île-de-France",
    email: "manon.sobczyk@live.fr",
    phone: "+33 6 15 33 90 92",
    linkedin: "https://sh1.sendinblue.com/afhx1hqgslpfe.html?t=1687256789",
    summary:
      "Je crée des contenus qui donnent du sens aux projets : articles, newsletters, supports print et recommandations culturelles. Mon objectif : rendre l’information claire, engageante et inspirante.",
  };

  const KEY_SKILLS = [
    "Rédaction & storytelling",
    "Interviews & articles",
    "Newsletters",
    "Réseaux sociaux",
    "Création print",
    "Mise en page (InDesign, Canva)",
    "Communication interne",
  ];

  const HIGHLIGHTS = [
    {
      icon: <Megaphone className="w-5 h-5" />,
      title: "Chœur à l’ouvrage — Newsletter & articles",
      text: "Conception éditoriale, rédaction d’articles de fond et interviews pour valoriser les projets soutenus.",
    },
    {
      icon: <LayoutGrid className="w-5 h-5" />,
      title: "Communication territoriale",
      text: "Articles pour sites web, réseaux sociaux, création de supports print (affiches, plaquettes, journaux municipaux).",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Médiathèque",
      text: "Rédaction de coups de cœur littéraires pour valoriser les collections et fidéliser les lecteurs.",
    },
  ];

  const SERVICES = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Rédaction & storytelling",
      desc: "Articles, interviews, newsletters, dossiers et contenus institutionnels ou culturels.",
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      title: "Création print",
      desc: "Affiches, flyers, plaquettes, journaux municipaux, mise en page et suivi de fabrication.",
    },
    {
      icon: <Newspaper className="w-5 h-5" />,
      title: "Stratégie éditoriale",
      desc: "Accompagnement dans la structuration et la diffusion de messages adaptés aux publics.",
    },
  ];

  const PROJECTS = [
    {
      title: "Newsletter — Chœur à l’ouvrage",
      desc: "Conception éditoriale, rédaction d’articles et interviews (ex. Christophe Loiseau).",
      link: "#",
    },
    {
      title: "Articles & fiches projets — Chœur à l’ouvrage",
      desc: "Valorisation de projets sur le site (ex. Haut-parleurs, Maison du Geste et de l’Image).",
      link: "#",
    },
    {
      title: "Communication territoriale — Print",
      desc: "Création d’affiches, flyers, plaquettes culturelles, journaux municipaux.",
      link: "#",
    },
    {
      title: "Communication territoriale — Web & réseaux sociaux",
      desc: "Articles pour site municipal, publications Facebook/Instagram/LinkedIn.",
      link: "#",
    },
    {
      title: "Médiathèque — Coups de cœur littéraires",
      desc: "Rédaction de recommandations pour romans, BD et jeunesse.",
    },
  ];

  const EDUCATION = [
    {
      school: "Master Communication interculturelle et ingénierie de projets",
      place: "Université Sorbonne Nouvelle | 2022 – 2023",
    },
    {
      school: "Master 1 Information - Communication (mémoire sur l’écoute musicale)",
      place: "Université Sorbonne Nouvelle | 2021 – 2022",
    },
    {
      school: "Licence Médiation culturelle (création du fanzine Le 48 Pages)",
      place: "Université Sorbonne Nouvelle | 2019 – 2021",
    },
    {
      school: "DEUG LLCE anglais",
      place: "Université Sorbonne Nouvelle | 2017 – 2019",
    },
  ];

  const [active, setActive] = useState("about");

  const navItems = [
    { id: "about", label: "Profil" },
    { id: "skills", label: "Compétences" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projets" },
    { id: "education", label: "Formation" },
    { id: "contact", label: "Contact" },
  ];

  // Fonction pour faire défiler la page vers une section
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800 font-sans">
      {/* En-tête de navigation */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white grid place-items-center font-semibold">MS</div>
            <div>
              <div className="font-semibold">{PROFILE.name}</div>
              <div className="text-sm text-slate-500">{PROFILE.title}</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-2">
            {navItems.map((it) => (
              // Bouton recréé
              <button
                key={it.id}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2
                  ${active === it.id ? 'bg-slate-900 text-white shadow hover:bg-slate-800' : 'hover:bg-accent hover:text-accent-foreground'}`
                }
                onClick={() => scrollTo(it.id)}
              >
                {it.label}
              </button>
            ))}
          </nav>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-slate-900 text-white shadow hover:bg-slate-800">
              <a href="#" download>
                <Download className="w-4 h-4 mr-2" /> Télécharger le CV
              </a>
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </a>
            </button>
          </div>
        </div>
      </header>

      {/* Section Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-6" id="about">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* Carte recréée */}
          <div className="md:col-span-2 rounded-2xl border bg-white text-slate-800 shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-2xl font-semibold leading-none tracking-tight">
                {PROFILE.title}
              </h2>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <p className="leading-relaxed">{PROFILE.summary}</p>
              <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> {PROFILE.location}</span>
                <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${PROFILE.email}`}><Mail className="w-4 h-4" /> {PROFILE.email}</a>
                <a className="inline-flex items-center gap-1 hover:underline" href={`tel:${PROFILE.phone}`}><Phone className="w-4 h-4" /> {PROFILE.phone}</a>
              </div>
            </div>
          </div>

          {/* Carte recréée */}
          <div className="rounded-2xl border bg-white text-slate-800 shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-xl font-semibold leading-none tracking-tight">
                En un coup d'œil
              </h2>
            </div>
            <div className="p-6 pt-0 space-y-4">
              {HIGHLIGHTS.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100">{h.icon}</div>
                  <div>
                    <div className="font-medium">{h.title}</div>
                    <div className="text-sm text-slate-600">{h.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section className="max-w-6xl mx-auto px-4 py-6" id="skills">
        {/* Carte recréée */}
        <div className="rounded-2xl border bg-white text-slate-800 shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-xl font-semibold leading-none tracking-tight">
              Compétences clés
            </h2>
          </div>
          <div className="p-6 pt-0 flex flex-wrap gap-2">
            {KEY_SKILLS.map((s, i) => (
              // Badge recréé
              <span key={i} className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-slate-900 text-white hover:bg-slate-800 text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="max-w-6xl mx-auto px-4 py-6" id="services">
        {/* Carte recréée */}
        <div className="rounded-2xl border bg-white text-slate-800 shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-xl font-semibold leading-none tracking-tight">
              Services proposés
            </h2>
          </div>
          <div className="p-6 pt-0 grid md:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <div key={i} className="p-4 rounded-2xl border hover:shadow-md transition group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-xl bg-slate-100">{s.icon}</div>
                  <div className="font-medium">{s.title}</div>
                </div>
                <div className="text-sm text-slate-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section className="max-w-6xl mx-auto px-4 py-6" id="projects">
        {/* Carte recréée */}
        <div className="rounded-2xl border bg-white text-slate-800 shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-xl font-semibold leading-none tracking-tight">
              Projets sélectionnés
            </h2>
          </div>
          <div className="p-6 pt-0 grid md:grid-cols-2 gap-4">
            {PROJECTS.map((p, i) => (
              <div key={i} className="p-4 rounded-2xl border hover:shadow-md transition group">
                <div className="font-medium mb-1">{p.title}</div>
                <div className="text-sm text-slate-600 mb-3">{p.desc}</div>
                <a href={p.link} className="inline-flex items-center gap-1 text-sm hover:underline" target="_blank" rel="noreferrer">
                  Voir le projet <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Formation */}
      <section className="max-w-6xl mx-auto px-4 py-6" id="education">
        {/* Carte recréée */}
        <div className="rounded-2xl border bg-white text-slate-800 shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-xl font-semibold leading-none tracking-tight">
              Formation
            </h2>
          </div>
          <div className="p-6 pt-0 space-y-3">
            {EDUCATION.map((ed, i) => (
              <div key={i}>
                <div className="font-medium">{ed.school}</div>
                <div className="text-sm text-slate-600">{ed.place}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="max-w-6xl mx-auto px-4 py-10" id="contact">
        {/* Carte recréée */}
        <div className="rounded-2xl border bg-white text-slate-800 shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-xl font-semibold leading-none tracking-tight">
              Contact
            </h2>
          </div>
          <div className="p-6 pt-0 grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-slate-700"><Mail className="w-4 h-4" /> {PROFILE.email}</div>
            <div className="flex items-center gap-2 text-slate-700"><Phone className="w-4 h-4" /> {PROFILE.phone}</div>
            <a className="flex items-center gap-2 hover:underline" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4" /> LinkedIn</a>
          </div>
        </div>
        <footer className="text-center text-xs text-slate-500 py-6">
          © {new Date().getFullYear()} {PROFILE.name} — Portfolio.
        </footer>
      </section>
    </div>
  );
}
