import { motion } from 'framer-motion'
import { image, link } from 'framer-motion/client'

export default function Portfolio() {
  const projetos = [
    {
      titulo: 'Cyber Skills',
      descricao: 'Sistema de aprendizagem sobre cybersegurança.',
      tecnologia: 'HTML • CSS • JavaScript',
      link: 'https://cyber-skills-dun.vercel.app/',
      imagem: 'public/projeto1.png'
    },
    {
      titulo: 'Casamento moderno',
      descricao: 'Página profissional para casamentos,podendoser feita alterações.',
      tecnologia: 'React • Vite • Framer Motion',
      link: 'https://casamento-dev.vercel.app/',
      imagem: 'public/projeto2.png'
    },
    {
      titulo: 'Dashboard Financeiro',
      descricao: 'Painel completo para controle financeiro e métricas (Ainda em desenvolvimento).',
      tecnologia: 'React • Chart.js • API',
      link: '',
      imagem: 'public/projeto3.png'
    },
  ]

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind',
    'Node.js',
    'Git',
    'C#',
  ]

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-7 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            Arthur Leal<span className="text-purple-500"> PORTIFÓLIO</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm">
            <div className="md:hidden text-sm text-gray-300">
              Menu
            </div>
            <a href="#inicio" className="hover:text-purple-400 transition">
              Início
            </a>
            <a href="#sobre" className="hover:text-purple-400 transition">
              Sobre
            </a>
            <a href="#projetos" className="hover:text-purple-400 transition">
              Projetos
            </a>
            <a href="#contato" className="hover:text-purple-400 transition">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        id="inicio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center px-6 relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute w-72 h-72 bg-purple-700/30 blur-[120px] rounded-full top-20 left-10"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8 }}
          className="absolute w-72 h-72 bg-blue-700/30 blur-[120px] rounded-full bottom-20 right-10"
        ></motion.div>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-purple-400 mb-4 text-lg animate-pulse">
              Desenvolvedor Full-Stack
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6"
            >
              Criando experiências digitais modernas.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-xl"
            >
              Desenvolvo interfaces modernas, rápidas e responsivas utilizando
              todas as tecnologias atuais do mercado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projetos"
                className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-purple-500/20"
              >
                Ver Projetos
              </a>

              <a
                href="#contato"
                className="border border-purple-500/40 hover:bg-purple-500/10 transition px-8 py-4 rounded-2xl font-semibold"
              >
                Contato
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            whileHover={{
              rotateX: 8,
              rotateY: -8,
              scale: 1.04,
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="flex justify-center perspective-[1200px] cursor-pointer"
          >
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-[40px] bg-gradient-to-br from-purple-600 to-blue-600 p-[2px] shadow-2xl shadow-purple-500/30 animate-pulse transition duration-300">
              <div className="w-[320px] h-[320px] rounded-[40px] bg-gradient-to-br from-purple-600 to-blue-600 p-[2px] shadow-2xl shadow-purple-500/30 animate-pulse">
            <div className="w-full h-full rounded-[38px] bg-zinc-950 overflow-hidden">
                <img
                  src="public/FotoArthur.png"
                  alt="Arthur"
                  className="w-full h-full object-cover"
                />
                </div>
            </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sobre */}
      <section id="sobre" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Sobre <span className="text-purple-500">Mim</span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              Sou um desenvolvedor apaixonado por tecnologia, design e pela criação de experiências digitais modernas. Atualmente, venho me dedicando ao desenvolvimento full-stack e à construção de interfaces que unem estética, desempenho e funcionalidade. Tenho grande interesse em transformar ideias em projetos reais, sempre buscando evoluir minhas habilidades e aprender novas tecnologias.
              </p>

              <p className="text-gray-400 leading-relaxed text-lg mb-6">
              Além da programação, também gosto da parte visual dos projetos, trabalhando com conceitos de UX/UI para criar interfaces intuitivas, responsivas e agradáveis para o usuário. Tenho experiência com criação de protótipos, identidade visual e desenvolvimento de layouts modernos, focando sempre em detalhes que fazem diferença na experiência final.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
             Fora do desenvolvimento, também valorizo criatividade, organização e atenção aos detalhes — características que levo para cada projeto que construo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-white/5 rounded-2xl p-6 text-center hover:border-purple-500/30 hover:-translate-y-1 transition"
              >
                <h3 className="font-semibold text-lg">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section
        id="projetos"
        className="py-28 px-6 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Meus <span className="text-purple-500">Projetos</span>
            </h2>

            <p className="text-gray-400 text-lg">
              Alguns projetos modernos desenvolvidos por mim.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/30 hover:-translate-y-2 transition duration-300"
              >
                <div className="h-52 overflow-hidden">
                <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"/>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {projeto.titulo}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {projeto.descricao}
                  </p>

                  <p className="text-sm text-purple-400 mb-6">
                    {projeto.tecnologia}
                  </p>

                  <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-purple-600 hover:bg-purple-700 transition py-3 rounded-xl font-semibold">
                    Ver Projeto
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="py-28 px-6 border-t border-white/5"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Vamos Trabalhar <span className="text-purple-500">Juntos</span>
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato para desenvolver projetos modernos e profissionais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/ArthurLeal-07"
              target="_blank"
              className="bg-zinc-900 border border-white/5 hover:border-purple-500/30 px-8 py-4 rounded-2xl transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/arthur-leal-991bb4323/"
              target="_blank"
              className="bg-zinc-900 border border-white/5 hover:border-purple-500/30 px-8 py-4 rounded-2xl transition"
            >
              LinkedIn
            </a>

            <a
              href="https://wa.me/5531980211279"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl transition font-semibold"
            >
              Enviar Mensagem
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm">
        © 2026 Arthur Leal DEV — Todos os direitos reservados.
      </footer>
    </div>
  )
}
