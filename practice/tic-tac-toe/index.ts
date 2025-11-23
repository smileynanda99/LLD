enum PieceType {
	X = 'X',
	O = 'O',
	TRINGLE = '△',
	SQUARE = '▢',
}


interface PlayingPiece {
	piece: PieceType;
}

class PlayingPieceX implements PlayingPiece {
	piece: PieceType;
	constructor() {
		this.piece = PieceType.X;
	}
}

class PlayingPieceO {
	piece: PieceType;
	constructor() {
		this.piece = PieceType.O;
	}
}

class PlayingPieceTingle {
	piece: PieceType;
	constructor() {
		this.piece = PieceType.TRINGLE;
	}
}

class PlayingPieceSquare {
	piece: PieceType;
	constructor() {
		this.piece = PieceType.TRINGLE;
	}
}

class PlayingPieceFactory {
	static getPlayingPiece(type: PieceType) {
		switch (type) {
			case PieceType.X:
				return new PlayingPieceX();
			case PieceType.O:
				return new PlayingPieceO();
			case PieceType.TRINGLE:
			    return new PlayingPieceTingle();
			case PieceType.SQUARE:
			    return new PlayingPieceSquare();
		}
	}
}

class Person {
	name: string;
	playingPiece: PlayingPiece;

	constructor(name: string, piece: PlayingPiece) {
		this.name = name;
		this.playingPiece = piece;
	}
}

class PlayingBoard {
	size: number;
	grid: Array<Array<PieceType | null>>;

	constructor(n: number) {
		this.size = n;
		this.grid = Array.from({ length: n }, () => Array(n).fill(null));
	}

	fill(x: number, y: number, playingPiece: PlayingPiece): boolean {
		if (this.grid[x][y]) {
			console.log(`Already selected: ${x}, ${y}.Please select different position!!`);
			return false;
		}

		// in future in we have any assosiate any animation for piece can handle here when filling
		this.grid[x][y] = playingPiece.piece;
		return true;
	}

	isFreeCellAvailable(): boolean {
		for (let i = 0; i < this.size; i++) {
			for (let j = 0; j < this.size; j++) {
				if (!this.grid[i][j]) return true;
			}
		}

		return false;
	}

	printGrid(): void {
		for (let i = 0; i < this.size; i++) {
			let line = '|';
			for (let j = 0; j < this.size; j++) {
				if (!this.grid[i][j]) line += '   |';
				else line += ` ${this.grid[i][j]} |`
			}
			console.log(line);
		}

	}

	resetBoard(): void {
		this.grid = Array(this.size).fill(Array(this.size).fill(null));
	}
}


class Orchestrator {
	de_queue: Array<Person>;
	playingBoard: PlayingBoard;

	constructor(size: number, players: Person[]) {
		this.playingBoard = new PlayingBoard(size);
		this.de_queue = players;
	}

	startGame() {
		let isWon = false;
		while (true) {
			this.playingBoard.printGrid();
			if (!this.playingBoard.isFreeCellAvailable()) {
				console.log('Game tie...');
				break;
			}

			const player = this.de_queue[0];
			console.log(`${player.name}'s turn`);
			const x = Math.floor(Math.random() * this.playingBoard.size);
			const y = Math.floor(Math.random() * this.playingBoard.size);
			const play = this.playingBoard.fill(x, y, player.playingPiece);
			if (!play) console.log('Please select free cell...');
			else {
				//check is win
				isWon = this.isPlayerWin(x, y, player);
				if (isWon) {
					this.playingBoard.printGrid();
					console.log(`${player.name}' won`);
					this.playingBoard.resetBoard();
					break;
				}
				this.de_queue.shift();
				this.de_queue.push(player);
			}
		}

	}

	private isPlayerWin(x: number, y: number, player: Person) {
		// check diogonal
		if (x == y) {
			let d = 0;
			for (let i = 0; i < this.playingBoard.size; i++) {
				if (this.playingBoard.grid[i][i] === player.playingPiece.piece) d++;
			}

			if (d === this.playingBoard.size) return true
		}

		// check vertical
		let v = 0;
		for (let i = 0; i < this.playingBoard.size; i++) {
			if (this.playingBoard.grid[i][y] === player.playingPiece.piece) v++;
		}
		if (v === this.playingBoard.size) return true

		// check horizal
		let h = 0;
		for (let j = 0; j < this.playingBoard.size; j++) {
			if (this.playingBoard.grid[x][j] === player.playingPiece.piece) h++;
		}
		if (h === this.playingBoard.size) return true

		return false;
	}
}


class TicTacToe {
	static play() {
		const players = [];

		// creating player 1 with X piece
		const x = PlayingPieceFactory.getPlayingPiece(PieceType.X);
		const player1 = new Person('player 1', x);
		players.push(player1);

		// creating player 2 with X piece
		const o = PlayingPieceFactory.getPlayingPiece(PieceType.O);
		const player2 = new Person('player 2', o);
		players.push(player2);

		// // creating player 3 with △ piece
		// const tringle = PlayingPieceFactory.getPlayingPiece(PieceType.TRINGLE);
		// const player3 = new Person('player 3', tringle);
		// players.push(player3);

		//initialization
		const game = new Orchestrator(3, players);

		// start the game
		game.startGame();
	}
}

TicTacToe.play();