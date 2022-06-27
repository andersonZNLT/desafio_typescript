/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";
*/

//vamos declarar uma constante para receber os valores;
//precisamos declarar e tipar code e name;
//depois basta atribuir os valores;
const employee: {code: number, name: string} = {
    code: 10,
    name: 'joao'
}