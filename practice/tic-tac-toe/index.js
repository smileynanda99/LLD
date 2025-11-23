var PieceType;
(function (PieceType) {
    PieceType["X"] = "X";
    PieceType["O"] = "O";
    PieceType["TRINGLE"] = "\u25B3";
    PieceType["SQUARE"] = "\u25A2";
})(PieceType || (PieceType = {}));
var PlayingPieceX = /** @class */ (function () {
    function PlayingPieceX() {
        this.piece = PieceType.X;
    }
    return PlayingPieceX;
}());
var PlayingPieceO = /** @class */ (function () {
    function PlayingPieceO() {
        this.piece = PieceType.O;
    }
    return PlayingPieceO;
}());
var PlayingPieceTingle = /** @class */ (function () {
    function PlayingPieceTingle() {
        this.piece = PieceType.TRINGLE;
    }
    return PlayingPieceTingle;
}());
var PlayingPieceSquare = /** @class */ (function () {
    function PlayingPieceSquare() {
        this.piece = PieceType.TRINGLE;
    }
    return PlayingPieceSquare;
}());
var PlayingPieceFactory = /** @class */ (function () {
    function PlayingPieceFactory() {
    }
    PlayingPieceFactory.getPlayingPiece = function (type) {
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
    };
    return PlayingPieceFactory;
}());
var Person = /** @class */ (function () {
    function Person(name, piece) {
        this.name = name;
        this.playingPiece = piece;
    }
    return Person;
}());
var PlayingBoard = /** @class */ (function () {
    function PlayingBoard(n) {
        this.size = n;
        this.grid = Array.from({ length: n }, function () { return Array(n).fill(null); });
    }
    PlayingBoard.prototype.fill = function (x, y, playingPiece) {
        if (this.grid[x][y]) {
            console.log("Already selected: ".concat(x, ", ").concat(y, ".Please select different position!!"));
            return false;
        }
        // in future in we have any assosiate any animation for piece can handle here when filling
        this.grid[x][y] = playingPiece.piece;
        return true;
    };
    PlayingBoard.prototype.isFreeCellAvailable = function () {
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                if (!this.grid[i][j])
                    return true;
            }
        }
        return false;
    };
    PlayingBoard.prototype.printGrid = function () {
        for (var i = 0; i < this.size; i++) {
            var line = '|';
            for (var j = 0; j < this.size; j++) {
                if (!this.grid[i][j])
                    line += '   |';
                else
                    line += " ".concat(this.grid[i][j], " |");
            }
            console.log(line);
        }
    };
    PlayingBoard.prototype.resetBoard = function () {
        this.grid = Array(this.size).fill(Array(this.size).fill(null));
    };
    return PlayingBoard;
}());
var Orchestrator = /** @class */ (function () {
    function Orchestrator(size, players) {
        this.playingBoard = new PlayingBoard(size);
        this.de_queue = players;
    }
    Orchestrator.prototype.startGame = function () {
        var isWon = false;
        while (true) {
            this.playingBoard.printGrid();
            if (!this.playingBoard.isFreeCellAvailable()) {
                console.log('Game tie...');
                break;
            }
            var player = this.de_queue[0];
            console.log("".concat(player.name, "'s turn"));
            var x = Math.floor(Math.random() * this.playingBoard.size);
            var y = Math.floor(Math.random() * this.playingBoard.size);
            var play = this.playingBoard.fill(x, y, player.playingPiece);
            if (!play)
                console.log('Please select free cell...');
            else {
                //check is win
                isWon = this.isPlayerWin(x, y, player);
                if (isWon) {
                    this.playingBoard.printGrid();
                    console.log("".concat(player.name, "' won"));
                    this.playingBoard.resetBoard();
                    break;
                }
                this.de_queue.shift();
                this.de_queue.push(player);
            }
        }
    };
    Orchestrator.prototype.isPlayerWin = function (x, y, player) {
        // check diogonal
        if (x == y) {
            var d = 0;
            for (var i = 0; i < this.playingBoard.size; i++) {
                if (this.playingBoard.grid[i][i] === player.playingPiece.piece)
                    d++;
            }
            if (d === this.playingBoard.size)
                return true;
        }
        // check vertical
        var v = 0;
        for (var i = 0; i < this.playingBoard.size; i++) {
            if (this.playingBoard.grid[i][y] === player.playingPiece.piece)
                v++;
        }
        if (v === this.playingBoard.size)
            return true;
        // check horizal
        var h = 0;
        for (var j = 0; j < this.playingBoard.size; j++) {
            if (this.playingBoard.grid[x][j] === player.playingPiece.piece)
                h++;
        }
        if (h === this.playingBoard.size)
            return true;
        return false;
    };
    return Orchestrator;
}());
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
    }
    TicTacToe.play = function () {
        var players = [];
        // creating player 1 with X piece
        var x = PlayingPieceFactory.getPlayingPiece(PieceType.X);
        var player1 = new Person('player 1', x);
        players.push(player1);
        // creating player 2 with X piece
        var o = PlayingPieceFactory.getPlayingPiece(PieceType.O);
        var player2 = new Person('player 2', o);
        players.push(player2);
        // // creating player 3 with △ piece
        // const tringle = PlayingPieceFactory.getPlayingPiece(PieceType.TRINGLE);
        // const player3 = new Person('player 3', tringle);
        // players.push(player3);
        //initialization
        var game = new Orchestrator(3, players);
        // start the game
        game.startGame();
    };
    return TicTacToe;
}());
TicTacToe.play();
