'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, ChevronRight, Clock3, HeartHandshake, Menu, Search, Sparkles, X } from 'lucide-react';

const topics = ['Todo', 'Ansiedad', 'Relaciones', 'Autoestima', 'Estudios y trabajo'];
const articles = [
  { category: 'Ansiedad', title: 'Cuando tu cabeza no para: 5 formas de bajar el ruido mental', excerpt: 'Herramientas sencillas para volver al presente cuando los pensamientos se aceleran.', time: '6 min', color: 'bg-[#dcebe3]', motif: 'ondas' },
  { category: 'Relaciones', title: 'Poner límites sin sentir que estás decepcionando a todo el mundo', excerpt: 'Una guía práctica para cuidar tus vínculos sin dejarte siempre para después.', time: '8 min', color: 'bg-[#f7dfd5]', motif: 'puentes' },
  { category: 'Autoestima', title: 'No tienes que tener tu vida resuelta a los 25', excerpt: 'Cómo convivir con la incertidumbre y construir tu camino a tu propio ritmo.', time: '5 min', color: 'bg-[#ece3f1]', motif: 'caminos' },
];

function Motif({ type }: { type: string }) {
  return <div className="motif" aria-hidden="true"><span className={`motif-shape ${type}`} /><span className="motif-dot dot-one" /><span className="motif-dot dot-two" /></div>;
}

export default function Home() {
  const [activeTopic, setActiveTopic] = useState('Todo');
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const visibleArticles = useMemo(() => articles.filter((article) => (activeTopic === 'Todo' || article.category === activeTopic) && `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(query.toLowerCase())), [activeTopic, query]);

  return <main>
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Pausa, ir al inicio"><span className="brand-mark"><span /></span>pausa<span className="brand-dot">.</span></a>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal"><a href="#explora" onClick={() => setMenuOpen(false)}>Explora</a><a href="#recursos" onClick={() => setMenuOpen(false)}>Recursos</a><a href="#nosotros" onClick={() => setMenuOpen(false)}>Sobre pausa</a></nav>
      <a className="header-cta" href="#ayuda">Necesito ayuda</a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-copy"><span className="eyebrow"><Sparkles size={14} /> Psicología para la vida real</span><h1>Entender lo que te pasa también es <em>cuidarte.</em></h1><p>Un espacio cercano para conocer tu mente, ordenar lo que sientes y encontrar herramientas que de verdad puedas usar.</p><div className="hero-actions"><a className="primary-button" href="#explora">Empieza por aquí <ArrowRight size={17} /></a><a className="text-link" href="#recursos">Ver recursos gratuitos <ChevronRight size={16} /></a></div></div>
      <div className="hero-art" aria-label="Ilustración abstracta de una persona descansando entre formas naturales"><div className="sun" /><div className="arch arch-one" /><div className="arch arch-two" /><div className="person"><span className="head" /><span className="body" /></div><div className="leaf leaf-one" /><div className="leaf leaf-two" /><span className="art-note">Respira.<br />No tienes que<br />poder con todo.</span></div>
    </section>

    <section className="intro" id="explora"><div><span className="section-kicker">Explora a tu ritmo</span><h2>¿Qué tienes en mente hoy?</h2></div><label className="search-box"><Search size={18} /><span className="sr-only">Buscar artículos</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar un tema..." /></label></section>
    <div className="topic-list" aria-label="Filtrar por tema">{topics.map((topic) => <button key={topic} className={activeTopic === topic ? 'active' : ''} onClick={() => setActiveTopic(topic)}>{topic}</button>)}</div>
    <section className="article-grid" aria-live="polite">{visibleArticles.map((article) => <article className="article-card" key={article.title}><div className={`card-visual ${article.color}`}><Motif type={article.motif} /></div><div className="card-body"><div className="card-meta"><span>{article.category}</span><span><Clock3 size={14} /> {article.time}</span></div><h3>{article.title}</h3><p>{article.excerpt}</p><a href="#articulo" aria-label={`Leer ${article.title}`}>Leer artículo <ArrowRight size={16} /></a></div></article>)}{visibleArticles.length === 0 && <p className="empty-state">No hemos encontrado artículos con esos filtros. Prueba con otra búsqueda.</p>}</section>

    <section className="resource-strip" id="recursos"><div className="resource-icon"><BookOpen /></div><div><span className="section-kicker">Para guardar y volver</span><h2>Tu pequeña caja de herramientas</h2><p>Ejercicios breves, guías descargables y audios para esos días en los que necesitas algo concreto.</p></div><a className="secondary-button" href="#herramientas">Ver herramientas <ArrowRight size={17} /></a></section>
    <section className="newsletter" id="nosotros"><div><span className="section-kicker">Una pausa en tu bandeja</span><h2>Una idea útil, una vez por semana.</h2><p>Sin ruido ni fórmulas mágicas. Psicología cercana para acompañarte en el día a día.</p></div>{subscribed ? <div className="success-message"><HeartHandshake /> ¡Ya estás dentro! Nos leemos pronto.</div> : <form onSubmit={(event) => { event.preventDefault(); setSubscribed(true); }}><label><span className="sr-only">Tu correo electrónico</span><input required type="email" placeholder="tu@email.com" /></label><button type="submit">Quiero recibirla <ArrowRight size={17} /></button><small>Te puedes ir cuando quieras. Cero spam, palabra.</small></form>}</section>
    <section className="help-banner" id="ayuda"><HeartHandshake /><div><strong>Si ahora mismo lo estás pasando mal, no tienes que hacerlo a solas.</strong><span>Encuentra recursos de ayuda inmediata y apoyo profesional.</span></div><a href="#contacto">Ver opciones de ayuda <ArrowRight size={16} /></a></section>
    <footer><a className="brand" href="#inicio"><span className="brand-mark"><span /></span>pausa<span className="brand-dot">.</span></a><p>Información para entenderte mejor. Nunca sustituye la atención de un profesional.</p><div><a href="#privacidad">Privacidad</a><a href="#contacto">Contacto</a></div></footer>
  </main>;
}
