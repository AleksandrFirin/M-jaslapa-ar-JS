

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 
                13, 14, 15, 16, 17, 18, 19, 20, 21, 22]

const userInput = prompt("Ievadiet skaitli priekš massīva(no 1 līdz 22) filtrēšanas (2, 3 vai 5):");
const inputs = Number(userInput);

function filtresana(){
    if ([2, 3, 5].includes(inputs)) {
        const filteredNumbers = numbers.filter(num => num % inputs === 0);
        console.log(`Skaitļi kuri dalās ar ${divisor}:`, filteredNumbers);
    } else {
        filtresana()
    }
}