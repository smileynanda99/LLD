/*
The Memento Design Pattern is a behavioral pattern that helps save and restore an object's state without 
exposing its internal details. It is like a "snapshot" that allows you to roll back changes if something 
goes wrong. It is widely used in undo-redo functionality in applications like text editors or games.

https://www.geeksforgeeks.org/system-design/memento-design-pattern/
*/


class TextDocument {
    content: string;

    constructor() {
        this.content = '';
    }

    writeText(text: string) {
        this.content += text;
    }

    getContent(): string {
        return this.content;
    }

    createMemonto(): TextDocumentMemonto {
        return new TextDocumentMemonto(this.content);
    }

    restoreMemento(memento: TextDocumentMemonto) {
        this.content = memento.getContent();
    }
}

class TextDocumentMemonto {
    content: string;

    constructor(text: string) {
        this.content = text;
    }

    getContent(): string {
        return this.content;
    }
}

class TextDocumentCaretaker {
    history: TextDocumentMemonto[];

    constructor() {
        this.history = [];
    }

    saveSnapshot(memento: TextDocumentMemonto) {
        this.history.push(memento);
    }

    undo(): TextDocumentMemonto {
        if(!this.history.length) return null;

        // remove last element
        const memento = this.history[this.history.length-1];
        this.history.pop();
        return memento;
    }
}


class MementoPattern {
    static test() {
        const caretaker = new TextDocumentCaretaker();
        const text = new TextDocument();

        // Writing text;
        text.writeText('Rohit');

        // Taking snapshot
        const snapshot1 = text.createMemonto();
        caretaker.saveSnapshot(snapshot1);

        // Writing text;
        text.writeText(' Kumar');

        // Taking snapshot
        const snapshot2 = text.createMemonto();
        caretaker.saveSnapshot(snapshot2);

        // Writing text;
        text.writeText(' Nanda');


        // printing current text
        console.log('Printing current content: ', text.getContent());

        // undo & printing text
        const undo1 = caretaker.undo();
        text.restoreMemento(undo1);
        console.log('Printing content after undo: ', text.getContent());

        // again undo & printing text
        const undo2 = caretaker.undo();
        text.restoreMemento(undo2);
        console.log('Printing content after one more undo: ', text.getContent());
    }
}

MementoPattern.test();