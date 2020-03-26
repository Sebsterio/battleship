/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\r\nconst Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\r\n\r\nmodule.exports = ({ boardSize, p1, p2 }) => {\r\n\tconst playerBoard = Gameboard(boardSize);\r\n\tconst enemyBoard = Gameboard(boardSize);\r\n\tconst player = Player(enemyBoard, p1);\r\n\tconst enemy = Player(playerBoard, p2);\r\n\r\n\t// temp\r\n\tplayerBoard.placeShip(\"A\", 1, 5, \"horizontal\");\r\n\tplayerBoard.placeShip(\"D\", 3, 4, \"horizontal\");\r\n\tplayerBoard.placeShip(\"B\", 3, 3, \"vertical\");\r\n\tplayerBoard.placeShip(\"E\", 6, 2, \"vertical\");\r\n\tplayerBoard.placeShip(\"G\", 6, 2, \"vertical\");\r\n\tenemyBoard.placeShip(\"A\", 1, 5, \"horizontal\");\r\n\tenemyBoard.placeShip(\"D\", 3, 4, \"horizontal\");\r\n\tenemyBoard.placeShip(\"B\", 3, 3, \"vertical\");\r\n\tenemyBoard.placeShip(\"E\", 6, 2, \"vertical\");\r\n\tenemyBoard.placeShip(\"G\", 6, 2, \"vertical\");\r\n\t// ---\r\n\r\n\tlet turn = 0;\r\n\tconst maxTurns = boardSize * boardSize;\r\n\r\n\tconst takeTurn = (attackCell, handleWin) => {\r\n\t\tif (player.attack(attackCell)) handleWin(\"Player\");\r\n\t\tif (enemy.AI()) handleWin(\"Enemy\");\r\n\t\tturn++;\r\n\t\tif (turn > maxTurns) throw new Error(\"Turn limit exceeded\");\r\n\t};\r\n\r\n\treturn {\r\n\t\ttakeTurn,\r\n\t\tplayerBoard,\r\n\t\tplayer\r\n\t};\r\n};\r\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\r\nconst generateBoard = __webpack_require__(/*! ./generateBoard */ \"./src/generateBoard.js\");\r\n\r\nmodule.exports = size => ({\r\n\tsize,\r\n\r\n\t// list of coords; type: object\r\n\t// props: coords (e.g. A1)\r\n\t// values: null (initial) | 'miss' | {ship: _ref_, segment: _N_}}\r\n\tcells: generateBoard(size),\r\n\tships: [],\r\n\r\n\tplaceShip(x, y, length, orientation) {\r\n\t\tx = x.toUpperCase();\r\n\r\n\t\t// Validate coords of ship extremities\r\n\t\tif (\r\n\t\t\ty < 1 ||\r\n\t\t\ty > size ||\r\n\t\t\t(orientation === \"vertical\" &&\r\n\t\t\t\t(y + length - 1 < 1 || y + length - 1 > size))\r\n\t\t)\r\n\t\t\tthrow new Error(\"Incorrect y coordinate: \" + y);\r\n\t\tconst xCharCode = x.charCodeAt(0);\r\n\t\tconst ASCII_A = 65;\r\n\t\tconst maxCharCode = ASCII_A - 1 + size;\r\n\t\tif (\r\n\t\t\txCharCode < ASCII_A ||\r\n\t\t\txCharCode > maxCharCode ||\r\n\t\t\t(orientation == \"horizontal\" &&\r\n\t\t\t\t(xCharCode + length - 1 < ASCII_A ||\r\n\t\t\t\t\txCharCode + length - 1 > maxCharCode))\r\n\t\t)\r\n\t\t\tthrow new Error(\"Incorrect x coordinate: \" + x);\r\n\r\n\t\t// Instantiate new ship and save reference\r\n\t\tconst newShip = Ship(length);\r\n\t\tthis.ships.push(newShip);\r\n\r\n\t\t// For each ship segment create a grid cell with ship reference\r\n\t\tconst shipCoordsTemp = {};\r\n\t\tfor (let segment = 0; segment < length; segment++) {\r\n\t\t\t// Validate coords and save in shipCoordsTemp\r\n\t\t\tconst coord = x + y; // concat\r\n\t\t\tif (this.cells[coord] !== null)\r\n\t\t\t\tthrow new Error(\"Cell occupied: \" + coord);\r\n\t\t\tshipCoordsTemp[coord] = { ship: newShip, segment };\r\n\r\n\t\t\t// Increment a coordinate\r\n\t\t\tswitch (orientation) {\r\n\t\t\t\tcase \"horizontal\":\r\n\t\t\t\t\tx = String.fromCharCode(x.charCodeAt(0) + 1);\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"vertical\":\r\n\t\t\t\t\ty++;\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tdefault:\r\n\t\t\t\t\tthrow new Error(\"Uknown ship orientation\");\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// Save coords of ship segments\r\n\t\tthis.cells = { ...this.cells, ...shipCoordsTemp };\r\n\t},\r\n\r\n\treceiveAttack(coord) {\r\n\t\tconst cell = this.cells[coord];\r\n\t\tif (cell === null) {\r\n\t\t\tthis.cells[coord] = \"miss\";\r\n\t\t\treturn 0;\r\n\t\t}\r\n\t\tif (cell === \"miss\") return null;\r\n\t\tcell.ship.hit(cell.segment);\r\n\t\tcell.hit = true;\r\n\t\treturn 1;\r\n\t\t// if (cell.ship.isSunk())\r\n\t},\r\n\r\n\tareAllShipsSunk() {\r\n\t\treturn this.ships.every(ship => ship.isSunk());\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/generateBoard.js":
/*!******************************!*\
  !*** ./src/generateBoard.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = boardSize => {\r\n\tconst board = {};\r\n\tfor (let y = 1; y <= boardSize; y++) {\r\n\t\tconst ASCII_A = 65;\r\n\t\tfor (let x = ASCII_A; x < ASCII_A + boardSize; x++) {\r\n\t\t\tconst xChar = String.fromCharCode(x);\r\n\t\t\tconst coord = xChar + y;\r\n\t\t\tboard[coord] = null;\r\n\t\t}\r\n\t}\r\n\treturn board;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/generateBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\r\n\r\nconst populateBoardWithCells = (board, boardSize) => {\r\n\tconst ASCII_A = 65;\r\n\tconst cells = [];\r\n\tfor (let y = 1; y <= boardSize; y++) {\r\n\t\tfor (let x = 0; x < boardSize; x++) {\r\n\t\t\tconst xChar = String.fromCharCode(ASCII_A + x);\r\n\t\t\tcells.push(`<div class=\"cell\" data-cell=${xChar + y}>${xChar + y}</div>`);\r\n\t\t}\r\n\t}\r\n\tboard.innerHTML = cells.join(\"\");\r\n};\r\n\r\nconst declareWinner = winner => {\r\n\tconsole.log(winner + \" won!\");\r\n};\r\n\r\nconst renderBoardContent = (board, cells) => {\r\n\tfor (let cell in cells) {\r\n\t\tconst cellElement = board.querySelector(`[data-cell=\"${cell}\"]`);\r\n\t\tif (cells[cell] !== null) {\r\n\t\t\tif (cells[cell].ship) {\r\n\t\t\t\tcellElement.classList.add(\"own-ship\");\r\n\t\t\t\tif (cells[cell].ship.isSunk())\r\n\t\t\t\t\tcellElement.classList.add(\"own-ship-sunk\");\r\n\t\t\t\telse if (cells[cell].hit) cellElement.classList.add(\"own-ship-hit\");\r\n\t\t\t} else if (cells[cell] === \"miss\")\r\n\t\t\t\tcellElement.classList.add(\"own-board-miss\");\r\n\t\t\telse if (cells[cell] === 1) cellElement.classList.add(\"hit\");\r\n\t\t\telse if (cells[cell] === 0) cellElement.classList.add(\"miss\");\r\n\t\t}\r\n\t}\r\n};\r\n\r\nconst initApp = () => {\r\n\t// const app = document.querySelector(\".app\");\r\n\tconst p1board = document.querySelector(\".p1-board\");\r\n\tconst p2board = document.querySelector(\".p2-board\");\r\n\r\n\tlet game;\r\n\r\n\tconst updateBoards = () => {\r\n\t\trenderBoardContent(p1board, game.playerBoard.cells);\r\n\t\trenderBoardContent(p2board, game.player.enemyView);\r\n\t};\r\n\r\n\tconst startGame = ({ boardSize }) => {\r\n\t\tdocument.documentElement.style.setProperty(\"--board-size\", boardSize);\r\n\t\tpopulateBoardWithCells(p1board, boardSize);\r\n\t\tpopulateBoardWithCells(p2board, boardSize);\r\n\t\tgame = Game({ boardSize, p1: \"P\", p2: \"AI\" });\r\n\t\tupdateBoards();\r\n\t};\r\n\r\n\tp2board.addEventListener(\"click\", e => {\r\n\t\tgame.takeTurn(e.target.dataset.cell, declareWinner);\r\n\t\tupdateBoards();\r\n\t});\r\n\r\n\tstartGame({ boardSize: 8 });\r\n};\r\n\r\ninitApp();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const generateBoard = __webpack_require__(/*! ./generateBoard */ \"./src/generateBoard.js\");\r\n\r\nmodule.exports = (enemyBoard, playerControl) => ({\r\n\t// P | AI\r\n\tplayerControl,\r\n\r\n\t// A record of own attacks\r\n\t// On init, keys = enemyBoardCoords, values = null\r\n\tenemyView: generateBoard(enemyBoard.size),\r\n\r\n\t// record attack result\r\n\tattack(coord) {\r\n\t\tconsole.log(this);\r\n\t\tconst isEnemyHit = enemyBoard.receiveAttack(coord);\r\n\t\tthis.enemyView[coord] = isEnemyHit; // 1|0\r\n\r\n\t\t// return whether won\r\n\t\tif (isEnemyHit && enemyBoard.areAllShipsSunk()) return true;\r\n\t\treturn false;\r\n\t},\r\n\r\n\t// attack a random cell that hasn't been attacked yet\r\n\tAI() {\r\n\t\tconst clearCells = [];\r\n\t\tfor (let coord in this.enemyView) {\r\n\t\t\tif (this.enemyView[coord] === null) clearCells.push(coord);\r\n\t\t}\r\n\t\trandomClearCell = Math.floor(Math.random() * clearCells.length);\r\n\t\tconst attackCoord = clearCells[randomClearCell];\r\n\t\treturn this.attack(attackCoord);\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = length => ({\r\n\tlength: length || 0,\r\n\thits: Array(length).fill(0),\r\n\thit(i) {\r\n\t\tif (i < 0 || i >= this.length) return;\r\n\t\tthis.hits[i] = 1;\r\n\t},\r\n\tisSunk() {\r\n\t\treturn this.hits.every(segment => segment === 1);\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ })

/******/ });