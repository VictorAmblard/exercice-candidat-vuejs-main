import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface Cell {
  id: number;
  value: number;
  visible: boolean;
  solverCell: boolean;
  info: string;
}

function newCell (id: number, value: number, solverCell = false, info = ''): Cell {
  return {
    id: id,
    value: value,
    visible: false,
    solverCell: solverCell,
    info: info
  }
}

function addHorizontalSolverCells (table: Array<Array<Cell>>): Array<Array<Cell>> {
  for (let x = 0; x < table.length; x++) {
    let bombs = 0
    let score = 0
    for (let y = 0; y < table[x].length; y++) {
      if (table[x][y].value === 0) { bombs++ }
      score += table[x][y].value
    }
    table[x].push(newCell(0, 0, true, score + ' / ' + bombs))
  }
  return table
}

function addVerticalSolverCells (table: Array<Array<Cell>>): Array<Array<Cell>> {
  const line: Array<Cell> = []
  for (let x = 0; x < 6; x++) {
    let bombs = 0
    let score = 0
    for (let y = 0; y < 6; y++) {
      if (table[y][x].value === 0) { bombs++ }
      score += table[y][x].value
    }
    line.push(newCell(0, 0, true, score + ' / ' + bombs))
  }
  table.push(line)
  return table
}

function newGrid (): Array<Array<Cell>> {
  let table: Array<Array<Cell>> = []
  let id = 1
  for (let i = 0; i < 6; i++) {
    const line: Array<Cell> = []
    for (let j = 0; j < 6; j++) {
      line.push(newCell(id, Math.floor(Math.random() * 4), false))
      id++
    }
    table.push(line)
  }
  table = addHorizontalSolverCells(table)
  table = addVerticalSolverCells(table)
  return table
}

function findIndices (table: Array<Array<Cell>>, id: number): Array<number> {
  for (let x = 0; x < table.length; x++) {
    for (let y = 0; y < table[x].length; y++) {
      if (table[x][y].id === id) {
        return [x, y]
      }
    }
  }
  return [-1, -1]
}

export default new Vuex.Store({
  state: {
    listCompanyA: [],
    listCompanyB: [],
    grid: Array<Array<Cell>>(),
    score: 0,
    defeat: false,
    helper: false
  },
  mutations: {
    setListCompanyA (state, companies) {
      state.listCompanyA = companies
    },
    moveItem (state) {
      if (state.listCompanyA.length > 0) {
        state.listCompanyB.push(state.listCompanyA[state.listCompanyA.length - 1])
        state.listCompanyA.pop()
      }
    },
    setGrid (state, grid) {
      state.grid = grid
      state.defeat = false
      state.score = 0
      state.helper = false
    },
    discoverCell (state, id) {
      const coord: Array<number> = findIndices(state.grid, id)
      if (state.grid[coord[0]][coord[1]].visible === false) {
        state.grid[coord[0]][coord[1]].visible = true
        if (state.grid[coord[0]][coord[1]].value === 0) { state.defeat = true }
        if (state.defeat === false) { state.score += state.grid[coord[0]][coord[1]].value }
      }
    },
    helperActive (state) {
      state.helper = true
    }
  },
  actions: {
    moveCompany (context) {
      context.commit('moveItem')
    },
    newGrid (context) {
      context.commit('setGrid', newGrid())
    },
    clickCell (context, id) {
      context.commit('discoverCell', id)
    },
    help (context) {
      context.commit('helperActive')
    }
  },
  modules: {
  }
})
