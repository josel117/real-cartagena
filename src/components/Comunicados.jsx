import { useTheme } from '../context/ThemeContext'
import Reveal from './Reveal'

const tweets = [
  {
    id: 1,
    fecha: '27 dic. 2025',
    texto: '🟡 FIXTURE 2️⃣0️⃣2️⃣6️⃣ DEFINIDO ✅\n\n#TorneoBetplay2026 🏆📅 #RealEsCartagena',
    imagen: '/images/tweets/tweet-fixture.png',
    rt: 3, likes: 41, replies: 2, views: '8 mil',
  },
  {
    id: 2,
    fecha: '28 feb. 2025',
    texto: '🟡 Sé Real y destapa la felicidad con @CocaCola 😄',
    imagen: '/images/tweets/tweet-cocacola.png',
    rt: 19, likes: 317, replies: 3, views: '11 mil',
  },
  {
    id: 3,
    fecha: '26 dic. 2024',
    texto: '🟡 Bienvenido a tu nueva casa, Fredy 😄\n\nEn la ciudad más linda de Colombia serás feliz y harás feliz a la mejor hinchada del Torneo 🤝',
    imagen: '/images/tweets/tweet-fredy.png',
    rt: 25, likes: 217, replies: 15, views: '12 mil',
  },
]

function TweetCard({ tweet, dark }) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5
                    ${dark ? 'bg-black border-white/10 hover:border-white/20' : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <div className="flex items-center gap-2">
          {/* Avatar */}
          <img src="/images/logo.png" alt="Real Cartagena"
               className="w-10 h-10 rounded-full object-contain border-2 border-yellow/30 bg-dark p-0.5" />
          <div>
            <div className="flex items-center gap-1">
              <span className={`font-bold text-[0.9rem] leading-none ${dark ? 'text-white' : 'text-gray-900'}`}>
                Real Cartagena
              </span>
              {/* Verified badge */}
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
              </svg>
            </div>
            <span className={`text-[0.8rem] ${dark ? 'text-white/40' : 'text-gray-400'}`}>
              @RealCartagena · {tweet.fecha}
            </span>
          </div>
        </div>
        {/* X logo */}
        <svg className={`w-5 h-5 ${dark ? 'text-white' : 'text-gray-900'}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </div>

      {/* Texto */}
      <div className="px-4 pb-3">
        {tweet.texto.split('\n').map((line, i) => (
          <p key={i} className={`text-[0.92rem] leading-relaxed ${dark ? 'text-white/90' : 'text-gray-800'} ${i > 0 && line === '' ? 'mt-1' : ''}`}>
            {line}
          </p>
        ))}
      </div>

      {/* Imagen */}
      <div className="mx-4 mb-3 rounded-xl overflow-hidden">
        <img src={tweet.imagen} alt="" className="w-full object-cover max-h-[180px]" />
      </div>

      {/* Stats */}
      <div className={`flex items-center gap-5 px-4 py-2.5 border-t text-[0.82rem]
                      ${dark ? 'border-white/6 text-white/35' : 'border-gray-100 text-gray-400'}`}>
        <span className="flex items-center gap-1.5 hover:text-blue-400 cursor-pointer transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          {tweet.replies}
        </span>
        <span className="flex items-center gap-1.5 hover:text-green-400 cursor-pointer transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          {tweet.rt}
        </span>
        <span className="flex items-center gap-1.5 hover:text-pink-400 cursor-pointer transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {tweet.likes}
        </span>
        <span className={`ml-auto flex items-center gap-1 text-[0.78rem] ${dark ? 'text-white/20' : 'text-gray-300'}`}>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          {tweet.views}
        </span>
      </div>
    </div>
  )
}

export default function Comunicados() {
  const { dark } = useTheme()

  return (
    <section id="comunicados"
      className={`px-6 lg:px-16 py-20 lg:py-28 ${dark ? 'bg-dark' : 'bg-cream'}`}>

      {/* Header */}
      <Reveal direction="up">
        <div className="text-center mb-12 lg:mb-14">
          <div className={`inline-flex items-center gap-3 font-barlow text-[11px] tracking-[3px] uppercase mb-3
                          ${dark ? 'text-yellow' : 'text-green'}`}>
            <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
            Redes Oficiales
            <span className={`w-8 h-0.5 ${dark ? 'bg-yellow' : 'bg-green'}`} />
          </div>
          <h2 className={`font-bebas tracking-[1px] ${dark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            ÚLTIMAS NOTICIAS
          </h2>
          <p className={`font-barlow text-[1rem] mt-1 ${dark ? 'text-white/40' : 'text-gray-400'}`}>
            Comunicados oficiales · @RealCartagena
          </p>
        </div>
      </Reveal>

      {/* Tweets */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {tweets.map((tweet, i) => (
          <Reveal key={tweet.id} direction="up" delay={`${i * 0.1}s`}>
            <a href="https://twitter.com/RealCartagena" target="_blank" rel="noopener noreferrer"
               className="no-underline block">
              <TweetCard tweet={tweet} dark={dark} />
            </a>
          </Reveal>
        ))}
      </div>

      {/* CTA */}
      <Reveal direction="up" delay="0.3s">
        <div className="text-center mt-10">
          <a href="https://twitter.com/RealCartagena" target="_blank" rel="noopener noreferrer"
             className={`inline-flex items-center gap-3 btn-skew px-10 py-3.5
                         font-barlow font-black text-[13px] tracking-[2px] uppercase
                         no-underline transition-all duration-200 hover:-translate-y-1
                         ${dark
                           ? 'border-2 border-yellow/40 text-yellow hover:bg-yellow/6 hover:border-yellow'
                           : 'border-2 border-green/60 text-green hover:bg-green/6 hover:border-green'
                         }`}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Seguir en X / Twitter
          </a>
        </div>
      </Reveal>

    </section>
  )
}