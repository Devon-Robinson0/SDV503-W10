//SECTION - 03 - Objects and arrays as data modeling
//NOTE - OBJECTS {}: Used to represent a single thing with named properties
//NOTE - ARRAYS []: Used to represent a list of things, in a specific order

console.log('=== 3. Objects and arrays as data modelling ===\n');

// 1) One object = one thing
const book1 = {
    title: 'Clean Code',
    author: 'Robert Martin',
    pages: 464,
    available: true,
};
console.log(('1) one book object:'));
console.log(`   ${book1.title} by ${book1.author} (${book1.pages} pages)`);

// 2) An array of obkects = a list of things
const library = [
    { title: 'Clean Code', author: 'Robert Martin', pages: 464, available: true },
    { title: 'Clean Code', author: 'Robert Martin', pages: 464, available: true },
    { title: 'Clean Code', author: 'Robert Martin', pages: 464, available: true },
    { title: 'Clean Code', author: 'Robert Martin', pages: 464, available: true },
];

console.log(`\n2) the library has ${library.length} books`);

// 3) Looping with forEach
console.log('\n all titles:');
library.forEach(book => {
    console.log(`   - ${book.title}`);
});

// 4) filter: Creates a NEW array woth only the items that return 'true'
const available = library.filter(book => book.available);
console.log(`\n4) Books currently available: ${available.length}`);
available.forEach(book => {
    console.log(`   - ${book.title}`);
});

// 5) map: creates a NEW array by transforming every single item
const titles = library.map(book => book.title);
console.log('\n5) Just the titles:');
console.log(`   ${titles.join(', ')}`);

// 6) find: Get the FIRST item taht matches
const longBook = library.find(book => book.pages > 400);
console.log('\n6) first book with more than 400 pages:');
console.log(`   - ${longBook.title}`);

// 7) reduce: combine all items into one value
const totalPages = library.reduce((sum, book) => sum + book.pages, 0);
console.log(`\n7) total pages across all books: ${totalPages}`);

// 8) Nested data: object inside object, array inside object
const studentRecord = {
    id: 'S-101',
    name: 'Layla',
    address: {
        street:'12 university Rd',
        city: 'Beirut',
        country: 'Lebanon',
    },
    grades: [85, 92, 78, 90],
};

console.log('\n8) nested data:');
console.log(`   name:   ${studentRecord.name}`);
console.log(`   city:   ${studentRecord.address.city}`);
console.log(`   grades: ${studentRecord.grades.join(', ')}`);

const sum = studentRecord.grades.reduce((a, b) => a + b, 0);
const average = sum / studentRecord.grades.length;
console.log(`   average:    ${average}`);

console.log('\nDone\n');