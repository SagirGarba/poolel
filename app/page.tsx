export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center p-6">
      <main className="w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-xl shadow-md p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
        <aside className="w-full flex justify-center md:w-36 md:shrink-0 md:justify-start">
          <img
            src="/hajja.jpeg"
            alt="Zainab Bobboi"
            className="w-36 h-36 rounded-full ring-2 ring-white dark:ring-zinc-900 object-cover shadow-sm mb-4 md:mb-0"
          />
        </aside>

        <div className="flex-1">
          <header className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground dark:text-zinc-50">
              Zainab Gidado Bobbo
            </h1>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              Economics — Finance Professional
            </p>
            <div className="mt-3 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="mailto:zainab@example.com"
                className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
              >
                Email
              </a>
              <a
                href="zbobbo96@gmail.com"
                className="px-3 py-2 rounded-md border border-zinc-200 dark:border-zinc-700 text-sm text-foreground dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/in/zainab-bobbo-b84057259/"
                className="px-3 py-2 rounded-md border border-zinc-200 dark:border-zinc-700 text-sm text-foreground dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                Download Resume
              </a>
            </div>
          </header>

          <section className="mt-6">
            <h2 className="text-lg font-medium text-foreground dark:text-zinc-50">
              About
            </h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I am an Economics graduate working in Finance with experience in
              financial analysis, forecasting, budgeting, and stakeholder
              reporting. I translate data into clear recommendations that help
              teams make informed decisions.
            </p>
          </section>

          <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-foreground dark:text-zinc-50">
                Core Skills
              </h3>
              <ul className="mt-2 text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Financial modeling & valuation</li>
                <li>Budgeting & forecasting</li>
                <li>Data analysis (Excel)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-foreground dark:text-zinc-50">
                Experience Snapshot
              </h3>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                Worked on cross-functional finance projects, monthly reporting,
                and KPI tracking.
              </p>
            </div>
          </section>

          <footer className="mt-6 border-t border-zinc-100 dark:border-zinc-800 pt-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Available for freelance and full-time opportunities.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
