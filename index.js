const readline = require('readline');

    class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.notify(phoneNumber));
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.add(phoneNumber);
    }

    removePhoneNumber(phoneNumber) {
        this.phoneNumbers.delete(phoneNumber);
    }

    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
        this.notifyObservers(phoneNumber);
        console.log(`Dialing ${phoneNumber}...`);
        } else {
        console.log(`Phone number ${phoneNumber} not found.`);
        }
    }
    }

    class Observer {
    constructor(name) {
        this.name = name;
    }

    notify(phoneNumber) {
        console.log(`${this.name} notified: Dialing ${phoneNumber}`);
    }
    }

    const telephone = new Telephone();
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    console.log('Welcome to Interactive Telephone!');
    console.log('Commands:');
    console.log('  add <phoneNumber>: Add a phone number');
    console.log('  remove <phoneNumber>: Remove a phone number');
    console.log('  dial <phoneNumber>: Dial a phone number');
    console.log('  exit: Exit the program\n');

    rl.on('line', (input) => {
    const [command, ...args] = input.split(' ');
    switch (command) {
        case 'add':
        rl.question('Enter phone number(s) and separate them by spaces: ', (phoneNumbers) => {
            phoneNumbers.split(' ').forEach(phoneNumber => telephone.addPhoneNumber(phoneNumber));
            console.log('Phone number(s) added successfully.');
        });
        break;
        case 'remove':
        rl.question('Enter phone number(s) and separate them by spaces: ', (phoneNumbers) => {
            phoneNumbers.split(' ').forEach(phoneNumber => telephone.removePhoneNumber(phoneNumber));
            console.log('Phone number(s) removed successfully.');
        });
        break;
        case 'dial':
        rl.question('Enter phone number(s) and seperate them by spaces: ', (phoneNumbers) => {
            phoneNumbers.split(' ').forEach(phoneNumber => telephone.dialPhoneNumber(phoneNumber));
        });
        break;
        case 'exit':
        rl.close();
        break;
        default:
        console.log('Invalid command. Please try again.');
    }
    });

    rl.on('close', () => {
    console.log('Exiting Interactive Telephone. Goodbye!');
    process.exit(0);
    });
