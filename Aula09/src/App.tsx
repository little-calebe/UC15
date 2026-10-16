import { useState } from 'react'

const lessons = [
  {
    title: 'Processador',
    short: 'CPU',
    subtitle: 'O cérebro do computador.',
    description: 'O processador executa instruções e coordena as tarefas do computador. Ele trabalha quando você abre um programa, navega na internet ou faz um cálculo.',
    example: 'Ao abrir um aplicativo, o processador executa as instruções para que ele funcione.',
    takeaway: 'Mais núcleos podem ajudar a realizar várias tarefas ao mesmo tempo.',
  },
  {
    title: 'Placa de vídeo',
    short: 'GPU',
    subtitle: 'Transforma dados em imagens.',
    description: 'A placa de vídeo processa as imagens que aparecem na tela. Ela é especialmente importante para jogos, edição de vídeo e trabalhos em 3D. Também pode estar integrada ao processador.',
    example: 'Em um jogo, ela ajuda a criar os cenários, as luzes e os movimentos que você vê.',
    takeaway: 'Quanto mais complexas as imagens, mais trabalho a GPU precisa realizar.',
  },
  {
    title: 'Memória RAM',
    short: 'RAM',
    subtitle: 'O espaço das tarefas em uso.',
    description: 'A memória RAM guarda temporariamente os dados dos programas abertos. Ela permite que o computador acesse essas informações rapidamente. Seu conteúdo é apagado ao desligar o computador.',
    example: 'As abas abertas do navegador usam RAM para manter o conteúdo disponível.',
    takeaway: 'RAM não é espaço para guardar arquivos: é memória temporária.',
  },
  {
    title: 'Armazenamento',
    short: 'SSD',
    subtitle: 'O lugar dos seus arquivos.',
    description: 'O armazenamento guarda o sistema, os programas, as fotos e outros arquivos, mesmo com o computador desligado. Os tipos mais comuns são o HD e o SSD.',
    example: 'Quando você salva uma foto, ela fica no armazenamento até você apagá-la.',
    takeaway: 'O SSD costuma abrir arquivos e iniciar o sistema mais rápido que um HD.',
  },
]

function Arrow({ back = false }: { back?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={back ? 'M19 12H5m6-6-6 6 6 6' : 'M5 12h14m-6-6 6 6-6 6'} /></svg>
}

function PartIcon({ index }: { index: number }) {
  return <svg width="76" height="76" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {index === 0 && <><rect x="19" y="19" width="42" height="42" rx="7" /><rect x="29" y="29" width="22" height="22" rx="3" />{[28, 40, 52].map(n => <path key={n} d={`M${n} 11v8m0 42v8M11 ${n}h8m42 0h8`} />)}</>}
    {index === 1 && <><rect x="9" y="22" width="62" height="37" rx="5" /><circle cx="30" cy="40" r="12" /><circle cx="30" cy="40" r="4" /><path d="M52 31v18m8-18v18M18 59v9m10-9v9M30 28v8m12 4h-8m-4 12v-8m-12-4h8" /></>}
    {index === 2 && <><rect x="7" y="25" width="66" height="29" rx="4" />{[16, 30, 44, 58].map(n => <rect key={n} x={n} y="32" width="7" height="14" rx="1" />)}<path d="M15 54v7m10-7v7m10-7v7m10-7v7m10-7v7m10-7v7" /></>}
    {index === 3 && <><rect x="18" y="11" width="44" height="58" rx="6" /><rect x="26" y="22" width="28" height="24" rx="3" /><path d="M28 57h12m8 0h4M30 17h20" /></>}
  </svg>
}

export default function App() {
  const [page, setPage] = useState(0)
  const lesson = lessons[page - 1]
  const goTo = (next: number) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <div className="app">
    <header className="topbar">
      <button className="logo" onClick={() => goTo(0)} aria-label="Voltar ao cadastro">nexo<span>.</span></button>
      <span className="header-caption">HARDWARE, SEM COMPLICAÇÃO.</span>
    </header>

    <main className="main">
      {page === 0 ? <section className="welcome">
        <span className="eyebrow">BEM-VINDO À NEXO</span>
        <h1>Entenda seu<br />computador<span>.</span></h1>
        <p className="intro">Conheça as principais peças do computador.<br />De um jeito simples, no seu ritmo.</p>
        <form className="signup" onSubmit={event => { event.preventDefault(); goTo(1) }}>
          <h2>Cadastre-se para começar</h2>
          <label>Nome<input name="name" autoComplete="name" placeholder="Seu nome" required minLength={2} /></label>
          <label>E-mail<input name="email" autoComplete="email" type="email" placeholder="voce@exemplo.com" required /></label>
          <button className="primary" type="submit">Começar a aprender <Arrow /></button>
          <p className="privacy">Cadastro demonstrativo. Seus dados não são salvos nem enviados.</p>
        </form>
        <div className="welcome-bottom"><span className="small-line" />4 peças. Explicações simples. Sem complicação.</div>
      </section> : <section className="lesson" key={page}>
        <nav className="lesson-tabs" aria-label="Peças do computador">
          {lessons.map((item, index) => <button key={item.short} className={page === index + 1 ? 'tab active' : 'tab'} aria-current={page === index + 1 ? 'page' : undefined} onClick={() => goTo(index + 1)}>{item.short}</button>)}
        </nav>
        <div className="lesson-heading"><span className="eyebrow">CONHEÇA AS PEÇAS</span><span className="page-count">0{page} / 04</span></div>
        <div className="part-illustration"><PartIcon index={page - 1} /><span>{lesson.short}</span></div>
        <h1>{lesson.title}<span>.</span></h1>
        <p className="subtitle">{lesson.subtitle}</p>
        <p className="description">{lesson.description}</p>
        <div className="example"><span>NA PRÁTICA</span><p>{lesson.example}</p></div>
        <p className="takeaway"><span>Lembre-se</span>{lesson.takeaway}</p>
        <div className="lesson-navigation">
          <button className="back" onClick={() => goTo(page - 1)}><Arrow back />{page === 1 ? 'Cadastro' : 'Anterior'}</button>
          <button className="primary" onClick={() => goTo(page === 4 ? 1 : page + 1)}>{page === 4 ? 'Rever as peças' : 'Próxima peça'}<Arrow /></button>
        </div>
      </section>}
    </main>
    <footer>nexo · Um começo simples para entender hardware.</footer>
  </div>
}
