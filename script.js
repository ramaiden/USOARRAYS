var areas = ['radiologia', 'traumatologia', 'dental']

var radiologia = [{
    hora: '11:00',
    especialista: 'IGNACIO SCHULZ',
    paciente: 'FRANCISCA ROJAS',
    rut: '9878782-1',
    prevision: 'FONASA',

},
{
    hora: '11:30',
    especialista: 'FEDERICO SUBERCASEAUX',
    paciente: 'PAMELA ESTRADA',
    rut: '15345241-3',
    prevision: 'ISAPRE',

},
{
    hora: '15:00',
    especialista: 'FERNANDO WURTHZ',
    paciente: 'ARMANDO LUNA',
    rut: '16445345-9',
    prevision: 'ISAPRE',

},
{
    hora: '15:30',
    especialista: 'ANA MARIA GODOY',
    paciente: 'MANUEL GODOY',
    rut: '17666419-0',
    prevision: 'FONASA',

},
{
    hora: '16:00',
    especialista: 'PATRICIA SUAZO',
    paciente: 'RAMÓN ULLOA',
    rut: '14989389-K',
    prevision: 'FONASA',

}
];

var traumatologia = [{
    hora: '8:00',
    especialista: 'MARIA PAZ ALTUZARRA',
    paciente: 'PAULA SANCHEZ',
    rut: '15554774-5',
    prevision: 'FONASA',
},
{
    hora: '10:00',
    especialista: 'RAUL ARAYA',
    paciente: 'ANGÉLICA NAVAS',
    rut: '15444147-9',
    prevision: 'ISAPRE',
},
{
    hora: '10:30',
    especialista: 'MARIA ARRIAGADA',
    paciente: 'ANA KLAPP',
    rut: '17879423-9',
    prevision: 'ISAPRE',
},
{
    hora: '11:00',
    especialista: 'ALEJANDRO BADILLA',
    paciente: 'FELIPE MARDONES',
    rut: '1547423-6',
    prevision: 'ISAPRE',
},
{
    hora: '11:30',
    especialista: 'CECILIA BUDNIK',
    paciente: 'DIEGO MARRE',
    rut: '16554741-K',
    prevision: 'FONASA',
},
{
    hora: '12:00',
    especialista: 'ARTURO CAVAGNARO',
    paciente: 'CECILIA MENDEZ',
    rut: '9747535-8',
    prevision: 'ISAPRE',
},
{
    hora: '12:30',
    especialista: 'ANDRES KANACRI',
    paciente: 'MARCIAL SUAZO',
    rut: '11254785-5',
    prevision: 'ISAPRE',
}
];

var dental = [{
    hora: '8:30',
    especialista: 'ANDREA ZUÑIGA',
    paciente: 'MARCELA RETAMAL',
    rut: '11123425-6',
    prevision: 'ISAPRE',
},
{
    hora: '11:00',
    especialista: 'MARIA PIA ZAÑARTU',
    paciente: 'ANGEL MUÑOZ',
    rut: '9878789-2',
    prevision: 'ISAPRE',
},
{
    hora: '11:30',
    especialista: 'SCARLETT WITTING',
    paciente: 'MARIO KAST',
    rut: '7998789-5',
    prevision: 'FONASA',
},
{
    hora: '13:00',
    especialista: 'FRANCISCO VON TEUBER',
    paciente: 'KARIN FERNANDEZ',
    rut: '18887662-K',
    prevision: 'FONASA',
},
{
    hora: '13:30',
    especialista: 'EDUARDO VIÑUELA',
    paciente: 'HUGO SANCHEZ',
    rut: '17665461-4',
    prevision: 'FONASA',
},
{
    hora: '14:00',
    especialista: 'RAQUEL VILLASECA',
    paciente: 'ANA SEPULVEDA',
    rut: '14441281-0',
    prevision: 'ISAPRE',
}
];



var nuevo_traumatologia = [{
        hora: '09:00',
        especialista: 'RENÉ POBLETE',
        paciente: 'ANA GELLONA',
        rut: '13123329-7',
        prevision: 'ISAPRE',
    },
    {
        hora: '09:30',
        especialista: 'MARIA SOLAR',
        paciente: 'RAMIRO ANDRADE',
        rut: '12221451-K',
        prevision: 'FONASA',
    },
    {
        hora: '10:00',
        especialista: 'RAUL LOYOLA',
        paciente: 'CARMEN ISLA',
        rut: '10112348-3',
        prevision: 'ISAPRE',
    },
    {
        hora: '10:30',
        especialista: 'ANTONIO LARENAS',
        paciente: 'PABLO LOAYZA',
        rut: '13453234-1',
        prevision: 'ISAPRE',
    },
    {
        hora: '12:00',
        especialista: 'MATIAS ARAVENA',
        paciente: 'SUSANA POBLETE',
        rut: '14345656-6',
        prevision: 'FONASA',
    }];



    function impresion_tabla(objetos) {
    for (i = 0; i < objetos.length; i++) {
        document.write(`
          <th scope="row">${objetos[i].hora}</th>
          <td>${objetos[i].especialista}</td>
          <td>${objetos[i].paciente}</td>
          <td>${objetos[i].rut}</td>
          <td>${objetos[i].prevision}</td>
        </tr>`)
    }
}

document.write(`<div class="text-center my-5">`)
document.write(`Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].paciente}. <br>`)
document.write(`Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].paciente}.<br>`)
document.write(`Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].paciente}.<br>`)
document.write(`</div>`)



document.write(`
<div class="container my-5">
<h2>Radiología</h2>
<table class="table">
  <thead>
    <tr>`)
for (pac in radiologia[1]) {
    document.write(`<th scope="col">${pac}</th>`)
}

document.write(`
</tr>
</thead>

<tbody>
    <tr>`)
    impresion_tabla(radiologia)

document.write(`</tbody>
</table>`)


document.write(`
<h2>Traumatología</h2>
<table class="table">
  <thead>
    <tr>`)
for (pac in traumatologia[1]) {
    document.write(`<th scope="col">${pac}</th>`)
}

document.write(`
</tr>
</thead>

<tbody>
    <tr>`)
    impresion_tabla(traumatologia)

document.write(`</tbody>
</table>`)

document.write(`
<table class="table">
<h2>Dental</h2>
  <thead>
    <tr>`)
for (pac in dental[1]) {
    document.write(`<th scope="col">${pac}</th>`)
}

document.write(`
</tr>
</thead>

<tbody>
    <tr>`)
    impresion_tabla(dental)

document.write(`</tbody>
</table>`)



//1. Agregar las siguientes horas al arreglo de Traumatología:
document.write("<br><h4>1. Agregar las siguientes horas al arreglo de Traumatología:</h4> ")
let traumatologia1 = nuevo_traumatologia.concat(traumatologia);

traumatologia = []
traumatologia = traumatologia1
document.write(`
<table class="table">
  <thead>
    <tr>`)
for (pac in traumatologia[1]) {
    document.write(`<th scope="col">${pac}</th>`)
}

document.write(`
</tr>
</thead>

<tbody>
    <tr>`)
    impresion_tabla(traumatologia)

document.write(`</tbody>
</table>`)

//2. Eliminar el primer y último elemento del arreglo de Radiología.
document.write("<br><h4>2. Eliminar el primer y último elemento del arreglo de Radiología.</h4>")

radiologia.pop()
radiologia.shift()

document.write(`
<table class="table">
  <thead>
    <tr>`)
for (pac in radiologia[1]) {
    document.write(`<th scope="col">${pac}</th>`)
}

document.write(`
</tr>
</thead>

<tbody>
    <tr>`)
    impresion_tabla(radiologia)

document.write(`</tbody>
</table>`)


//3. Imprimir en la página HTML, la lista de consultas médicas de Dental. 8:30 - ANDREA ZUÑIGA - MARCELA RETAMAL - 11123425-6 - ISAPRE
document.write("<br><h4>3. Imprimir en la página HTML, la lista de consultas médicas de Dental. 8:30 - ANDREA ZUÑIGA - MARCELA RETAMAL - 11123425-6 - ISAPRE</h4>")

for (let i = 0; i < dental.length; i++) {
    document.write(`${dental[i].hora} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].rut} - ${dental[i].prevision} <br>`)
}

//4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. 
document.write("<br><h4>4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. </h4>")
pacientes = []

for (let i1 = 0; i1 < traumatologia1.length; i1++) {
    pacientes.push(traumatologia1[i1].paciente);
}

for (let i1 = 0; i1 < dental.length; i1++) {
    pacientes.push(dental[i1].paciente)
}

for (let i1 = 0; i1 < radiologia.length; i1++) {
    pacientes.push(radiologia[i1].paciente)
}
for (let a12 of pacientes) {
    document.write(a12 + "<br>")
}


//5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental.
document.write("<br><h4>5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental.</h4>")
let nuevodental = dental.filter(function (filtro) {
    return filtro.prevision == 'ISAPRE'
})

for (let i1 = 0; i1 < nuevodental.length; i1++) {
    document.write(nuevodental[i1].paciente + "<br>");
}

//6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología.
document.write("<br><h4>6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología.</h4>")

let nuevo_traumatologia1 = traumatologia1.filter(function (filtro) {
    return filtro.prevision == 'ISAPRE'
})

for (let i1 = 0; i1 < traumatologia1.length; i1++) {
    document.write(traumatologia1[i1].paciente + "<br>");
}
document.write(`</div>`)