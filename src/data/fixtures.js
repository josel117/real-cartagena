// ─────────────────────────────────────────────────────────────
// src/data/fixtures.js
// Para actualizar después de cada partido:
//   Cambiar resultado: null  →  { local: X, visitante: Y }
// ─────────────────────────────────────────────────────────────

// En producción usa el proxy de Vercel para evitar bloqueo CORS de Sofascore
const isDev = typeof window !== 'undefined' && window.location.hostname === 'localhost'
const teamImg  = (id) => isDev
  ? `https://api.sofascore.com/api/v1/team/${id}/image`
  : `/api/sofa-image?type=team&id=${id}`

export const equipos = {
  RC:  { id: 6119,    nombre: 'Real Cartagena',          escudo: teamImg(6119)    },
  INT: { id: 39866,   nombre: 'Internacional de Palmira', escudo: teamImg(39866)  },
  QUI: { id: 6110,    nombre: 'Deportes Quindío',         escudo: teamImg(6110)   },
  UMA: { id: 89376,   nombre: 'Unión Magdalena',          escudo: teamImg(89376)  },
  ENV: { id: 6114,    nombre: 'Envigado FC',              escudo: teamImg(6114)   },
  YUM: { id: 1166437, nombre: 'Independiente Yumbo',      escudo: teamImg(1166437)},
  BOG: { id: 89352,   nombre: 'Bogotá FC',                escudo: teamImg(89352)  },
  PAT: { id: 61504,   nombre: 'Patriotas Boyacá',         escudo: teamImg(61504)  },
  TIG: { id: 89354,   nombre: 'Tigres FC',                escudo: teamImg(89354)  },
  RCU: { id: 484422,  nombre: 'Real Cundinamarca',        escudo: teamImg(484422) },
  BAR: { id: 89364,   nombre: 'Barranquilla FC',          escudo: teamImg(89364)  },
  ORS: { id: 213490,  nombre: 'Orsomarso SC',             escudo: teamImg(213490) },
  RSA: { id: 89358,   nombre: 'Real Santander',           escudo: teamImg(89358)  },
  BJC: { id: 89366,   nombre: 'Boca Juniors de Cali',     escudo: teamImg(89366)  },
  LEO: { id: 89362,   nombre: 'Leones FC',                escudo: teamImg(89362)  },
  ACA: { id: 89372,   nombre: 'Atlético Cali',            escudo: teamImg(89372)  },
}


// ── Partidos Torneo Apertura 2026 ─────────────────────────
// resultado: null = no jugado | { local: X, visitante: Y } = jugado
export const partidos = [
  { fecha: '2026-01-23', hora: '15:30', local: equipos.RC,  visitante: equipos.RSA, estadio: 'Estadio Jaime Morón León',       resultado: { local: 2, visitante: 0 } },
  { fecha: '2026-01-30', hora: '17:00', local: equipos.YUM, visitante: equipos.RC,  estadio: 'Estadio Municipal de Yumbo',     resultado: { local: 1, visitante: 1 } },
  { fecha: '2026-02-04', hora: '15:30', local: equipos.RC,  visitante: equipos.YUM, estadio: 'Estadio Jaime Morón León',       resultado: { local: 4, visitante: 1 } },
  { fecha: '2026-02-09', hora: '15:00', local: equipos.BOG, visitante: equipos.RC,  estadio: 'Estadio El Campín',              resultado: { local: 0, visitante: 1 } },
  { fecha: '2026-02-13', hora: '15:30', local: equipos.RC,  visitante: equipos.ACA, estadio: 'Estadio Jaime Morón León',       resultado: { local: 4, visitante: 1 } },
  { fecha: '2026-02-21', hora: '17:00', local: equipos.RC,  visitante: equipos.LEO, estadio: 'Estadio Jaime Morón León',       resultado: { local: 2, visitante: 3 } },
  { fecha: '2026-03-02', hora: '15:00', local: equipos.TIG, visitante: equipos.RC,  estadio: 'Estadio Metropolitano de Techo', resultado: { local: 0, visitante: 1 } },
  { fecha: '2026-03-06', hora: '15:30', local: equipos.RC,  visitante: equipos.ORS, estadio: 'Estadio Jaime Morón León',       resultado: { local: 4, visitante: 0 } },
  { fecha: '2026-03-10', hora: '15:30', local: equipos.RC,  visitante: equipos.INT, estadio: 'Estadio Jaime Morón León',       resultado: { local: 2, visitante: 2 } },
  { fecha: '2026-03-16', hora: '16:05', local: equipos.ENV, visitante: equipos.RC,  estadio: 'Estadio Polideportivo Sur',      resultado: null },
  { fecha: '2026-03-22', hora: '20:30', local: equipos.RC,  visitante: equipos.UMA, estadio: 'Estadio Jaime Morón León',      resultado: null },
  { fecha: '2026-03-27', hora: '15:00', local: equipos.BJC, visitante: equipos.RC,  estadio: 'Estadio Pascual Guerrero',      resultado: null },
  { fecha: '2026-03-31', hora: '19:00', local: equipos.RC,  visitante: equipos.QUI, estadio: 'Estadio Jaime Morón León',      resultado: null },
  { fecha: '2026-04-13', hora: '16:00', local: equipos.PAT, visitante: equipos.RC,  estadio: 'Estadio La Independencia',      resultado: null },
  { fecha: '2026-04-18', hora: '15:30', local: equipos.RC,  visitante: equipos.BAR, estadio: 'Estadio Jaime Morón León',      resultado: null },
]

// ── Helpers automáticos ───────────────────────────────────
export function getUltimoPartido() {
  const ahora = new Date()
  const jugados = partidos.filter(p => p.resultado !== null && new Date(p.fecha + 'T23:59:00') < ahora)
  return jugados.length > 0 ? jugados[jugados.length - 1] : null
}

export function getProximoPartido() {
  const ahora = new Date()
  return partidos.find(p => p.resultado === null && new Date(p.fecha + 'T00:00:00') >= ahora) || null
}