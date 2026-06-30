import { useMemo, useState } from 'react'

const navItems = [
  { id: 'home', label: 'HOME' },
  { id: 'service', label: 'SERVICE' },
  { id: 'works', label: 'WORKS' },
  { id: 'company', label: 'COMPANY' },
  { id: 'recruit', label: 'RECRUIT' },
  { id: 'contact', label: 'CONTACT' },
]

const stats = [
  { value: '47年', label: '創業からの歴史' },
  { value: '100%', label: '技術者の有資格率' },
  { value: '120件', label: '年間の施工件数' },
  { value: '0件', label: '重大事故 発生件数' },
]

const services = [
  {
    no: '01',
    title: '電気設備工事',
    body: '高圧受電設備から屋内配線、照明・動力設備まで。新築・改修を問わず、設計から施工・試験までを一貫して担います。',
    tags: ['新築', '改修', '設計施工'],
  },
  {
    no: '02',
    title: '受変電・キュービクル',
    body: '高圧受電設備の新設・更新・移設。無停電切替の計画立案で、稼働を止めずに設備を更新します。',
    tags: ['高圧受電', '無停電切替', '更新'],
  },
  {
    no: '03',
    title: 'LED・省エネ改修',
    body: '照明のLED化、デマンド制御、省エネ診断。ランニングコストと環境負荷を同時に削減する改修をご提案します。',
    tags: ['LED化', '省エネ診断', 'デマンド'],
  },
  {
    no: '04',
    title: '保守・点検',
    body: '定期点検・緊急対応・更新提案まで。設備の生涯にわたり伴走する保守契約で、止まらない安心を支えます。',
    tags: ['定期点検', '緊急対応', '保守契約'],
  },
]

const works = [
  {
    tag: 'Airport',
    year: '2024',
    title: '高知龍馬空港 灯火設備 更新',
    scope: '滑走路灯・誘導路灯のLED化および監視制御盤の更新。社会機能を止めない夜間施工。',
    scale: '灯火 1,200灯',
    image:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    tag: 'Tunnel',
    year: '2023',
    title: '第二〇〇トンネル 照明改修',
    scope: 'トンネル照明のLED全面化と防災電源・非常用設備の改修工事。',
    scale: '延長 2.4km',
    image:
      'https://images.pexels.com/photos/17842843/pexels-photo-17842843.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    tag: 'Substation',
    year: '2023',
    title: '〇〇浄水場 受変電更新',
    scope: '高圧受変電設備の増設・更新。停電を伴わない切替計画を立案・実施。',
    scale: '受電 3,000kVA',
    image:
      'https://images.pexels.com/photos/5767595/pexels-photo-5767595.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

const profile = [
  ['商号', '株式会社オークボデンキ'],
  ['設立', '1978年（昭和53年）'],
  ['所在地', '高知県高知市〇〇町 1-2-3'],
  ['事業内容', '電気設備工事 / 受変電設備 / LED・省エネ改修 / 保守点検'],
  ['建設業許可', '高知県知事許可（電気工事業）第〇〇号'],
]

const benefits = [
  ['技術の幅が広がる', '元請現場を一貫して担うため、設計から施工管理まで幅広く経験できます。'],
  ['資格取得を支援', '電気工事士・施工管理技士など、取得費用を会社が支援します。'],
  ['働き方を整える', '報告・図面を電子化し、現場に集中できる環境づくりを進めています。'],
]

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-8 text-slate-300">{children}</p>
      ) : null}
    </div>
  )
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">
      {children}
    </span>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [sent, setSent] = useState(false)

  const visibleSections = useMemo(() => {
    if (activeTab === 'home') {
      return ['home', 'service', 'works', 'company', 'contact']
    }

    return [activeTab]
  }, [activeTab])

  function goTo(tab) {
    setActiveTab(tab)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function onSubmit(event) {
    event.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 3600)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080d14] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d14]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <button
            className="min-w-0 text-left"
            type="button"
            onClick={() => goTo('home')}
          >
            <span className="block text-sm font-bold tracking-[0.24em] text-white">
              OKUBO DENKI
            </span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-slate-500">
              Electric Works
            </span>
          </button>
          <nav className="hide-scrollbar -mr-2 flex max-w-[56vw] gap-1 overflow-x-auto sm:max-w-none">
            {navItems.map((item) => (
              <button
                className={`shrink-0 whitespace-nowrap border-b px-3 py-2 text-xs font-semibold tracking-[0.16em] transition ${
                  activeTab === item.id
                    ? 'border-cyan-300 text-white'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {visibleSections.includes('home') ? (
          <section className="relative isolate min-h-[calc(100vh-58px)] overflow-hidden">
            <img
              alt="電気設備工事の現場"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
              src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1800"
            />
            <div className="absolute inset-0 -z-10 bg-[#080d14]/80" />
            <div className="mx-auto grid min-h-[calc(100vh-58px)] max-w-7xl content-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-cyan-300">
                  Kochi Electric Works
                </p>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                  社会を止めない、
                  <span className="block text-cyan-200">電気設備の現場力。</span>
                </h1>
                <p className="mt-7 max-w-xl text-sm leading-8 text-slate-200 sm:text-lg">
                  <span className="block">オークボデンキは、高知を拠点に</span>
                  <span className="block">
                    公共インフラ、商業施設、民間工事の
                  </span>
                  <span className="block">
                    電気設備を支える少数精鋭の技術者チームです。
                  </span>
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <button
                    className="rounded-sm bg-cyan-300 px-5 py-3 text-sm font-bold tracking-wide text-slate-950 transition hover:bg-cyan-200"
                    type="button"
                    onClick={() => goTo('works')}
                  >
                    施工実績を見る
                  </button>
                  <button
                    className="rounded-sm border border-white/20 px-5 py-3 text-sm font-bold tracking-wide text-white transition hover:border-cyan-300"
                    type="button"
                    onClick={() => goTo('contact')}
                  >
                    相談する
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 self-end sm:grid-cols-2 sm:gap-4">
                {stats.map((item) => (
                  <div
                    className="border border-white/10 bg-white/[0.04] p-4 sm:p-5"
                    key={item.label}
                  >
                    <div className="text-3xl font-bold text-white sm:text-4xl">
                      {item.value}
                    </div>
                    <div className="mt-2 text-xs leading-5 text-slate-400">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {visibleSections.includes('service') ? (
          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <SectionTitle eyebrow="Service — 01" title="対応領域">
              受変電設備、屋内配線、照明、省エネ、保守点検まで、電気設備のライフサイクルをまとめて支えます。
            </SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  className="border border-white/10 bg-white/[0.03] p-5"
                  key={service.no}
                >
                  <div className="mb-8 text-xs font-semibold tracking-[0.28em] text-cyan-300">
                    {service.no}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {service.body}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {visibleSections.includes('works') ? (
          <section className="border-y border-white/10 bg-white/[0.02]">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
              <SectionTitle eyebrow="Works — 02" title="施工実績">
                公共インフラから商業施設まで、止められない現場で品質と工程を両立します。
              </SectionTitle>
              <div className="grid gap-5 lg:grid-cols-3">
                {works.map((work) => (
                  <article
                    className="overflow-hidden border border-white/10 bg-[#0d141f]"
                    key={work.title}
                  >
                    <img
                      alt={work.title}
                      className="h-56 w-full object-cover sm:h-64"
                      src={work.image}
                    />
                    <div className="p-5">
                      <div className="mb-4 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.22em] text-slate-500">
                        <span>{work.tag}</span>
                        <span>{work.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {work.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {work.scope}
                      </p>
                      <div className="mt-5 text-sm font-semibold text-cyan-200">
                        {work.scale}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {visibleSections.includes('company') ? (
          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <SectionTitle eyebrow="Company — 03" title="会社情報">
              地域の電気インフラを支え続けるため、確かな資格と現場判断を積み上げています。
            </SectionTitle>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="border-l-2 border-cyan-300 pl-6">
                <p className="text-4xl font-bold text-white">1978</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  創業以来、公共性の高い設備と日々の暮らしに欠かせない電気工事に向き合ってきました。
                </p>
              </div>
              <div className="divide-y divide-white/10 border-y border-white/10">
                {profile.map(([label, value]) => (
                  <div
                    className="grid gap-2 py-4 sm:grid-cols-[160px_1fr]"
                    key={label}
                  >
                    <dt className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                      {label}
                    </dt>
                    <dd className="text-sm leading-7 text-slate-200">
                      {value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {visibleSections.includes('recruit') ? (
          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <SectionTitle eyebrow="Recruit — 04" title="採用情報">
              少人数だからこそ、現場全体を見渡しながら技術を伸ばせます。
            </SectionTitle>
            <div className="grid gap-4 md:grid-cols-3">
              {benefits.map(([title, body]) => (
                <article
                  className="border border-white/10 bg-white/[0.03] p-5"
                  key={title}
                >
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {visibleSections.includes('contact') ? (
          <section className="border-t border-white/10 bg-[#0b111a]">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
              <div>
                <SectionTitle eyebrow="Contact — 05" title="お問い合わせ">
                  設備のご相談・お見積り、協業のご相談、採用エントリーまでお気軽にご連絡ください。
                </SectionTitle>
                <div className="space-y-5 text-sm text-slate-300">
                  <p>
                    <span className="mr-3 text-slate-500">Tel</span>
                    088-XXX-XXXX
                  </p>
                  <p className="break-all">
                    <span className="mr-3 text-slate-500">Mail</span>
                    info@okubo-denki.example
                  </p>
                  <p>
                    <span className="mr-3 text-slate-500">Office</span>
                    高知県高知市〇〇町 1-2-3
                  </p>
                </div>
              </div>

              <form
                className="grid gap-4 border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-2 sm:p-7"
                onSubmit={onSubmit}
              >
                <label className="grid gap-2 text-sm text-slate-300">
                  会社名 / 学校名
                  <input className="field" placeholder="株式会社〇〇" />
                </label>
                <label className="grid gap-2 text-sm text-slate-300">
                  お名前
                  <input className="field" placeholder="高知 太郎" required />
                </label>
                <label className="grid gap-2 text-sm text-slate-300">
                  メール
                  <input
                    className="field"
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                </label>
                <label className="grid gap-2 text-sm text-slate-300">
                  電話番号
                  <input className="field" placeholder="090-0000-0000" />
                </label>
                <label className="grid gap-2 text-sm text-slate-300 sm:col-span-2">
                  お問い合わせ種別
                  <select className="field" defaultValue="工事・お見積りのご相談">
                    <option>工事・お見積りのご相談</option>
                    <option>保守・点検のご相談</option>
                    <option>協業・取引のご相談</option>
                    <option>採用について</option>
                    <option>その他</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm text-slate-300 sm:col-span-2">
                  内容
                  <textarea
                    className="field min-h-32"
                    placeholder="ご相談内容をご記入ください"
                    required
                  />
                </label>
                <button
                  className="rounded-sm bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 sm:col-span-2"
                  type="submit"
                >
                  内容を送信する
                </button>
                {sent ? (
                  <p className="rounded-sm border border-cyan-300/50 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100 sm:col-span-2">
                    送信が完了しました。担当より折り返しご連絡します。
                  </p>
                ) : null}
              </form>
            </div>
          </section>
        ) : null}
      </main>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-xs tracking-[0.18em] text-slate-500">
        OKUBO DENKI CO. / KOCHI JAPAN / DEMO
      </footer>
    </div>
  )
}
