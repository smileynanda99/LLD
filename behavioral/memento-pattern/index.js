/*
The Memento Design Pattern is a behavioral pattern that helps save and restore an object's state without
exposing its internal details. It is like a "snapshot" that allows you to roll back changes if something
goes wrong. It is widely used in undo-redo functionality in applications like text editors or games.

https://www.geeksforgeeks.org/system-design/memento-design-pattern/
*/
var TextDocument = /** @class */ (function () {
    function TextDocument() {
        this.content = '';
    }
    TextDocument.prototype.writeText = function (text) {
        this.content += text;
    };
    TextDocument.prototype.getContent = function () {
        return this.content;
    };
    TextDocument.prototype.createMemonto = function () {
        return new TextDocumentMemonto(this.content);
    };
    TextDocument.prototype.restoreMemento = function (memento) {
        this.content = memento.getContent();
    };
    return TextDocument;
}());
var TextDocumentMemonto = /** @class */ (function () {
    function TextDocumentMemonto(text) {
        this.content = text;
    }
    TextDocumentMemonto.prototype.getContent = function () {
        return this.content;
    };
    return TextDocumentMemonto;
}());
var TextDocumentCaretaker = /** @class */ (function () {
    function TextDocumentCaretaker() {
        this.history = [];
    }
    TextDocumentCaretaker.prototype.saveSnapshot = function (memento) {
        this.history.push(memento);
    };
    TextDocumentCaretaker.prototype.undo = function () {
        if (!this.history.length)
            return null;
        // remove last element
        var memento = this.history[this.history.length - 1];
        this.history.pop();
        return memento;
    };
    return TextDocumentCaretaker;
}());
var MementoPattern = /** @class */ (function () {
    function MementoPattern() {
    }
    MementoPattern.test = function () {
        var caretaker = new TextDocumentCaretaker();
        var text = new TextDocument();
        // Writing text;
        text.writeText('Rohit');
        // Taking snapshot
        var snapshot1 = text.createMemonto();
        caretaker.saveSnapshot(snapshot1);
        // Writing text;
        text.writeText(' Kumar');
        // Taking snapshot
        var snapshot2 = text.createMemonto();
        caretaker.saveSnapshot(snapshot2);
        // Writing text;
        text.writeText(' Nanda');
        // printing current text
        console.log('Printing current content: ', text.getContent());
        // undo & printing text
        var undo1 = caretaker.undo();
        text.restoreMemento(undo1);
        console.log('Printing content after undo: ', text.getContent());
        // again undo & printing text
        var undo2 = caretaker.undo();
        text.restoreMemento(undo2);
        console.log('Printing content after one more undo: ', text.getContent());
    };
    return MementoPattern;
}());
MementoPattern.test();
