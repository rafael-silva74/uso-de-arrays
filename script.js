const aluno = [{nome:"Raphael", idade:"17", matériaPreferida:"matemática"},
                {nome:"Daniella", idade:"29", matériaPreferida:"artes"},
                {nome:"junior", idade:"22", matériaPreferida:"português"},
                {nome:"vanessa", idade:"46", matériaPreferida:"ciências"},
                {nome:"kaleb", idade:"16", matériaPreferida:"química"}];



const matemáticaAluno = aluno.filter(aluno => aluno.matériaPreferida === "matemática");
const portuguêsAluno = aluno.filter(aluno => aluno.matériaPreferida === "português");
const ciênciasAluno = aluno.filter(aluno => aluno.matériaPreferida === "ciências");
const químicaAluno = aluno.filter(aluno => aluno.matériaPreferida === "química");
const artesAluno = aluno.filter(aluno => aluno.matériaPreferida === "artes");
alert("o nome do aluno é: " + aluno[0].nome + " e a matéria favorita: " + aluno[0].matériaPreferida);