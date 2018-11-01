// let num = 1250;
// let answ = num / 15;
//
// if(answ > 100){
//     console.log('Answer is greater than 100 ', answ)
// }else if (answ > 50){
//     console.log('Answer is greater than 50 ', answ)
// } else {
//     console.log('Answer is very small ', answ)
// }

// let count;
// document.write('Loop Started <br>');
//
// for (count = 0; count <= 10; count++ ) {
//     document.write('Count is at ', count + '<br>')
// }
//
// document.write('<br> Loop Stopped');
// let students = ['Ayumba', 'Frank', 'Ian', 'Bernard', 'Joan', 'Salome', 'Eneki', 'Diana', 'Phillip'];
// students.push('Charles');
// students.splice(9, 1);

let students = [
    {
        name: 'Jane P Doe',
        height: 6
    },
    {
        name: 'John K Doe',
        height: 5.9
    },
    {
        name: 'Peter K Doe',
        height: 5.9
    },
    {
        name: 'Paul J Doe',
        height: 5.9
    },
    {
        name: 'Joseph John Doe',
        height: 5.9
    },
    {
        name: 'Patric John Doe',
        height: 5.9
    },
    {
        name: 'Jane John Doe',
        height: 5.9
    }
];


for (let i = 0; i < students.length; i++){
    document.getElementById('students').innerHTML += `
    <li class="list-group-item">${students[i].name}</li>
`
}