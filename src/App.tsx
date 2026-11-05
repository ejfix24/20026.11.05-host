import { useEffect, useState } from "react"

const logoPath = "/assets/20c3e.svg"

const navigation = [
  { label: "병원소개", href: "#about" },
  { label: "진료안내", href: "#services" },
  { label: "치료클리닉", href: "#clinics" },
  { label: "한방건강정보", href: "#information" },
  { label: "커뮤니티", href: "#community" },
]

const slides = [
  {
    eyebrow: "몸과 마음이 다시, 편안해지는 곳",
    title: (
      <>
        일상의 건강을
        <br />
        되찾는 한방의 힘
      </>
    ),
    description: (
      <>
        사람을 먼저 생각하는 다온한방병원이
        <br />
        건강한 하루를 함께 만들어갑니다.
      </>
    ),
    variant: "reception",
  },
  {
    eyebrow: "세심한 진료로 시작하는 건강한 변화",
    title: (
      <>
        내 몸에 꼭 맞는
        <br />
        정직한 한방 진료
      </>
    ),
    description: (
      <>
        충분한 상담과 정확한 진단을 바탕으로
        <br />한 분 한 분을 위한 치료를 제안합니다.
      </>
    ),
    variant: "herbal",
  },
  {
    eyebrow: "전통의 지혜를 오늘의 일상으로",
    title: (
      <>
        편안한 회복을
        <br />
        함께하는 다온
      </>
    ),
    description: (
      <>
        몸의 균형과 마음의 안정을 살피며
        <br />
        건강한 내일을 함께 만들어갑니다.
      </>
    ),
    variant: "calm",
  },
]

const signatureServices = [
  {
    icon: "✦",
    title: "맞춤 한방치료",
    description: (
      <>
        개인별 체질과 상태에 맞춘
        <br />
        1:1 맞춤 치료
      </>
    ),
  },
  {
    icon: "✿",
    title: "안전한 한약 처방",
    description: (
      <>
        믿을 수 있는
        <br />
        청정 한약재 사용
      </>
    ),
  },
  {
    icon: "⌁",
    title: "통증 클리닉",
    description: (
      <>
        허리·목·관절 등<br />
        만성 통증 치료
      </>
    ),
  },
  {
    icon: "♧",
    title: "생활질환 클리닉",
    description: (
      <>
        소화기·호흡기·여성질환 등<br />
        생활 속 건강 관리
      </>
    ),
  },
  {
    icon: "✧",
    title: "면역·보약 클리닉",
    description: (
      <>
        체질 개선과
        <br />
        면역력 증진
      </>
    ),
  },
]

const clinics = [
  {
    title: "통증·척추 클리닉",
    detail: "허리, 목, 어깨, 무릎 등",
    tone: "#cfc7ba",
  },
  { title: "소화기 클리닉", detail: "소화불량, 위장장애 등", tone: "#e0d1bf" },
  {
    title: "교통사고 후유증 클리닉",
    detail: "사고 후 통증, 재활 치료",
    tone: "#c2c4ba",
  },
  {
    title: "여성건강 클리닉",
    detail: "생리통, 갱년기, 여성질환 등",
    tone: "#dec9c2",
  },
  {
    title: "소아·성장 클리닉",
    detail: "성장, 면역, 체질 개선",
    tone: "#ccd1bf",
  },
  {
    title: "보약·면역 클리닉",
    detail: "체질 개선, 기력 회복",
    tone: "#c4ccc2",
  },
]

const rooms = ["진료실", "추나요법실", "한약조제실", "입원실"]

type ModalKind = "reservation" | "consultation" | "video" | "search" | "gallery" | null

interface ModalProps {
  kind: ModalKind
  onClose: () => void
}

// 원본 디자인의 기하학적인 사진 표현을 재사용하는 장식 컴포넌트입니다.
function AbstractInterior({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`abstract-interior ${compact ? "is-compact" : ""}`}
      aria-hidden="true"
    >
      <span className="interior-light" />
      <span className="interior-shadow" />
      <span className="interior-highlight" />
      <span className="interior-floor" />
      <span className="interior-furniture" />
      <span className="interior-base" />
    </div>
  )
}

function Header({ onOpen }: { onOpen: (kind: ModalKind) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="다온한방병원 홈">
        <img src={logoPath} alt="" />
        <span>
          <strong>다온한방병원</strong>
          <small>DAON KOREAN MEDICINE HOSPITAL</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={menuOpen ? "main-nav is-open" : "main-nav"}
        aria-label="주요 메뉴"
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <div className="mobile-nav-actions">
          <button type="button" onClick={() => onOpen("consultation")}>
            온라인 상담
          </button>
          <button type="button" onClick={() => onOpen("reservation")}>
            예약하기
          </button>
        </div>
      </nav>

      <div className="header-actions">
        <button
          className="search-button"
          type="button"
          aria-label="검색"
          onClick={() => onOpen("search")}
        >
          ⌕
        </button>
        <button
          className="text-button"
          type="button"
          onClick={() => onOpen("consultation")}
        >
          온라인 상담
        </button>
        <button
          className="primary-button"
          type="button"
          onClick={() => onOpen("reservation")}
        >
          예약하기
        </button>
      </div>
    </header>
  )
}

function Hero({ onOpen }: { onOpen: (kind: ModalKind) => void }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = slides[activeSlide]
  const moveSlide = (direction: number) => {
    setActiveSlide(
      (current) => (current + direction + slides.length) % slides.length,
    )
  }

  return (
    <section className="hero" id="home" aria-label="다온한방병원 소개 슬라이드">
      <div className="hero-copy" key={activeSlide}>
        <p className="eyebrow">{slide.eyebrow}</p>
        <h1>{slide.title}</h1>
        <p className="hero-description">{slide.description}</p>
        <div className="hero-actions">
          <button
            className="primary-button wide"
            type="button"
            onClick={() => onOpen("reservation")}
          >
            진료 예약하기&nbsp; →
          </button>
          <a className="light-button" href="#about">
            병원 소개 보기
          </a>
        </div>
        <div
          className="slide-progress"
          aria-label={`전체 3개 중 ${activeSlide + 1}번째 슬라이드`}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === activeSlide ? "active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`${index + 1}번 슬라이드`}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
      <div className={`hero-visual ${slide.variant}`}>
        <AbstractInterior />
      </div>
      <div className="slider-controls">
        <button
          type="button"
          onClick={() => moveSlide(-1)}
          aria-label="이전 슬라이드"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => moveSlide(1)}
          aria-label="다음 슬라이드"
        >
          ›
        </button>
      </div>
    </section>
  )
}

function SignatureServices() {
  return (
    <section
      className="signature-services"
      id="services"
      aria-label="다온한방병원의 진료 강점"
    >
      {signatureServices.map((service) => (
        <article key={service.title}>
          <span className="service-icon" aria-hidden="true">
            {service.icon}
          </span>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </article>
      ))}
    </section>
  )
}

function Philosophy({ onOpen }: { onOpen: (kind: ModalKind) => void }) {
  return (
    <section className="philosophy" id="about">
      <div className="philosophy-visual">
        <AbstractInterior />
      </div>
      <div className="philosophy-copy">
        <p className="section-kicker">━ &nbsp;전통의 지혜, 오늘의 건강으로</p>
        <h2>
          사람을 위한
          <br />
          올바른 한방치료
        </h2>
        <p className="section-description">
          다온한방병원은 전통의 가치를 바탕으로
          <br />
          현대인의 건강 고민을 함께 해결합니다.
        </p>
        <div className="care-values">
          <span>
            <b>♡</b>환자 중심 진료
          </span>
          <span>
            <b>♧</b>안전한 의료 시스템
          </span>
          <span>
            <b>♙</b>풍부한 임상 경험
          </span>
        </div>
      </div>
      <button
        className="video-button"
        type="button"
        onClick={() => onOpen("video")}
      >
        <span>▶</span>
        <b>
          다온한방병원
          <br />
          소개 영상 보기
        </b>
      </button>
    </section>
  )
}

function Clinics() {
  return (
    <section className="clinics" id="clinics">
      <div className="section-heading">
        <h2>주요 진료 클리닉</h2>
        <p>
          다양한 한방 진료로
          <br />
          일상의 건강을 지켜드립니다.
        </p>
        <a href="#services">전체 진료 보기&nbsp; →</a>
      </div>
      <div className="clinic-grid">
        {clinics.map((clinic) => (
          <a className="clinic-card" href="#information" key={clinic.title}>
            <span
              className="clinic-image"
              style={{ backgroundColor: clinic.tone }}
            >
              <i />
              <i />
            </span>
            <strong>{clinic.title}</strong>
            <small>{clinic.detail}</small>
          </a>
        ))}
      </div>
    </section>
  )
}

function HealingGallery({ onOpen }: { onOpen: (kind: ModalKind) => void }) {
  return (
    <section className="healing-gallery" id="community">
      <div className="gallery-copy">
        <h2>
          편안함이 머무는
          <br />
          치료 공간
        </h2>
        <p>
          몸과 마음이 모두 편안할 수 있는
          <br />
          쾌적한 진료 환경을 제공합니다.
        </p>
        <button
          className="light-button"
          type="button"
          onClick={() => onOpen("gallery")}
        >
          병원 둘러보기&nbsp; →
        </button>
      </div>
      <div className="room-grid">
        {rooms.map((room) => (
          <button type="button" key={room} onClick={() => onOpen("gallery")}>
            <AbstractInterior compact />
            <span>{room}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function Information({ onOpen }: { onOpen: (kind: ModalKind) => void }) {
  const notices = [
    ["추석 연휴 진료 일정 안내", "2024.09.10"],
    ["특강 해열 한약 프로그램 안내", "2024.09.05"],
    ["진료 예약 시스템 오픈 안내", "2024.08.28"],
  ]

  return (
    <section className="information" id="information">
      <div className="notice-panel">
        <div className="info-title">
          <h2>공지사항</h2>
          <a href="#community">더보기&nbsp; +</a>
        </div>
        <ul>
          {notices.map(([title, date]) => (
            <li key={title}>
              <a href="#community">{title}</a>
              <time>{date}</time>
            </li>
          ))}
        </ul>
      </div>
      <div className="testimonial-panel">
        <h2>환자분들의 이야기</h2>
        <blockquote>
          “꾸준한 치료로 허리 통증이 많이 좋아졌어요.
          <br />
          친절하고 세심한 진료에 늘 감사합니다.”
        </blockquote>
        <p>김○○ 님&nbsp; | &nbsp;허리 통증 치료</p>
      </div>
      <div className="location-panel">
        <h2>오시는 길</h2>
        <div className="map" aria-hidden="true">
          <span>●</span>
        </div>
        <address>
          경상남도 진주시 진주대로 123
          <br />
          다온한방병원
        </address>
        <a
          className="outline-button"
          href="https://maps.google.com/?q=경상남도+진주시+진주대로+123"
          target="_blank"
          rel="noreferrer"
        >
          지도에서 보기&nbsp; →
        </a>
      </div>
      <div className="contact-panel">
        <h2>진료 예약 및 상담</h2>
        <a className="phone" href="tel:0551234567">
          ☎&nbsp; 055-123-4567
        </a>
        <p>
          평일&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00 - 18:00
          <br />
          토요일&nbsp;&nbsp;&nbsp;09:00 - 13:00
          <br />
          점심시간&nbsp; 12:30 - 13:30
        </p>
        <div>
          <button
            className="light-button"
            type="button"
            onClick={() => onOpen("reservation")}
          >
            진료 예약하기 →
          </button>
          <button
            className="contact-link"
            type="button"
            onClick={() => onOpen("consultation")}
          >
            온라인
            <br />
            상담 →
          </button>
        </div>
      </div>
    </section>
  )
}

function Modal({ kind, onClose }: ModalProps) {
  useEffect(() => {
    if (!kind) return
    const closeOnEscape = (event: KeyboardEvent) =>
      event.key === "Escape" && onClose()
    document.addEventListener("keydown", closeOnEscape)
    document.body.classList.add("modal-open")
    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      document.body.classList.remove("modal-open")
    }
  }, [kind, onClose])

  if (!kind) return null

  const content = {
    reservation: {
      title: "진료 예약하기",
      body: (
        <>
          <p>전화로 빠르게 진료 예약을 도와드립니다.</p>
          <a className="modal-action" href="tel:0551234567">
            055-123-4567 전화하기
          </a>
        </>
      ),
    },
    consultation: {
      title: "온라인 상담",
      body: (
        <>
          <p>상담 가능 시간은 평일 09:00 - 18:00입니다.</p>
          <a className="modal-action" href="mailto:care@daon-hospital.kr">
            이메일로 상담하기
          </a>
        </>
      ),
    },
    search: {
      title: "사이트 검색",
      body: (
        <form
          className="search-form"
          onSubmit={(event) => {
            event.preventDefault()
            document.querySelector("#clinics")?.scrollIntoView()
            onClose()
          }}
        >
          <label htmlFor="site-search">찾고 싶은 진료명을 입력해 주세요.</label>
          <div>
            <input id="site-search" autoFocus placeholder="예: 통증 클리닉" />
            <button type="submit">검색</button>
          </div>
        </form>
      ),
    },
    video: {
      title: "다온한방병원 소개",
      body: (
        <div className="video-placeholder">
          <span>▶</span>
          <p>
            몸과 마음이 다시 편안해지는 곳,
            <br />
            다온한방병원입니다.
          </p>
        </div>
      ),
    },
    gallery: {
      title: "다온한방병원 공간",
      body: (
        <div className="modal-gallery">
          {rooms.map((room) => (
            <div key={room}>
              <AbstractInterior compact />
              <span>{room}</span>
            </div>
          ))}
        </div>
      ),
    },
  }[kind]

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className={`modal-card modal-${kind}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="팝업 닫기"
        >
          ×
        </button>
        <h2 id="modal-title">{content.title}</h2>
        <div className="modal-body">{content.body}</div>
      </section>
    </div>
  )
}

export default function App() {
  const [modal, setModal] = useState<ModalKind>(null)

  return (
    <>
      <div className="site-shell">
        <Header onOpen={setModal} />
        <main>
          <Hero onOpen={setModal} />
          <SignatureServices />
          <Philosophy onOpen={setModal} />
          <Clinics />
          <HealingGallery onOpen={setModal} />
          <Information onOpen={setModal} />
        </main>
      </div>
      <Modal kind={modal} onClose={() => setModal(null)} />
    </>
  )
}
