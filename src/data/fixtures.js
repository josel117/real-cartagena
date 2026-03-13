// ─────────────────────────────────────────────────────────────
// src/data/fixtures.js
// Para actualizar después de cada partido:
//   Cambiar resultado: null  →  { local: X, visitante: Y }
// ─────────────────────────────────────────────────────────────

const SOFA_TEAM   = 'https://api.sofascore.com/api/v1/team'
const SOFA_PLAYER = 'https://api.sofascore.com/api/v1/player'

export const equipos = {
  RC:  { id: 6119,    nombre: 'Real Cartagena',          escudo: `${SOFA_TEAM}/6119/image`    },
  INT: { id: 39866,   nombre: 'Internacional de Palmira', escudo: `${SOFA_TEAM}/39866/image`  },
  QUI: { id: 6110,    nombre: 'Deportes Quindío',         escudo: `${SOFA_TEAM}/6110/image`   },
  UMA: { id: 89376,   nombre: 'Unión Magdalena',          escudo: `${SOFA_TEAM}/89376/image`  },
  ENV: { id: 6114,    nombre: 'Envigado FC',              escudo: `${SOFA_TEAM}/6114/image`   },
  YUM: { id: 1166437, nombre: 'Independiente Yumbo',      escudo: `${SOFA_TEAM}/1166437/image`},
  BOG: { id: 89352,   nombre: 'Bogotá FC',                escudo: `${SOFA_TEAM}/89352/image`  },
  PAT: { id: 61504,   nombre: 'Patriotas Boyacá',         escudo: `${SOFA_TEAM}/61504/image`  },
  TIG: { id: 89354,   nombre: 'Tigres FC',                escudo: `${SOFA_TEAM}/89354/image`  },
  RCU: { id: 484422,  nombre: 'Real Cundinamarca',        escudo: `${SOFA_TEAM}/484422/image` },
  BAR: { id: 89364,   nombre: 'Barranquilla FC',          escudo: `${SOFA_TEAM}/89364/image`  },
  ORS: { id: 213490,  nombre: 'Orsomarso SC',             escudo: `${SOFA_TEAM}/213490/image` },
  RSA: { id: 89358,   nombre: 'Real Santander',           escudo: `${SOFA_TEAM}/89358/image`  },
  BJC: { id: 89366,   nombre: 'Boca Juniors de Cali',     escudo: `${SOFA_TEAM}/89366/image`  },
  LEO: { id: 89362,   nombre: 'Leones FC',                escudo: `${SOFA_TEAM}/89362/image`  },
  ACA: { id: 89372,   nombre: 'Atlético Cali',            escudo: `${SOFA_TEAM}/89372/image`  },
}

// IDs de jugadores en Sofascore → foto: SOFA_PLAYER/{id}/image
export const jugadoresIds = {
  'Fredy Montero':       39981,
  'Mauro Manotas':       797479,
  'Jarlan Barrera':      796511,
  'Ronaldo Lora':        974048,
  'Reynaldo Fontalvo':   1022273,
  'Aldo Montes':         1174794,
  'Guillermo Gómez':     1174006,
  'Marcel Vergara':      2232975,
  'Joiner Montero':      1066911,
  'Cristian Florez':     602184,
  'Andrés Escobar':      1173418,
  'Jhojan Nieva':        1175047,
  'Juan Herrera':        1174974,
  'Juan Rodríguez':      818908,
  'Didier Pino':         947335,
  'Jheison Solarte':     1809647,
  'Luis Guevara':        1478251,
  'Jairo Fuentes':       1174888,
  'Humberto García':     1174857,
  'Cristian Graciano':   1476923,
  'Guillermo Tegüe':     906007,
  'Álvaro Meléndez':     924906,
  'Farid Tamayo':        2228207,
  'Jairo Ditta':         1175763,
}

export function getSofaPlayerImg(nombre) {
  const id = jugadoresIds[nombre]
  return id ? `${SOFA_PLAYER}/${id}/image` : null
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