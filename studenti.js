function getStudentsFromStorage() {
    return JSON.parse(sessionStorage.getItem('studenti'))
}

function setStudentsToStorage(students) {
    sessionStorage.setItem('studenti', JSON.stringify(students))
}


function dodaj(){
    var studenti=[];
    var spaseniStudenti=JSON.parse(sessionStorage.getItem('studenti'))
    if (spaseniStudenti!= null) studenti=spaseniStudenti
    var student={
        firstName:document.getElementById("ime").value,
        lastName:document.getElementById("prezime").value,
        number:document.getElementById("index").value,
        department:document.getElementById("smjer").value,
        cycle:document.getElementById("ciklus").value,
        semester:document.getElementById("semestar").value,       
        }
    studenti.push(student);
    console.log(studenti);
    setStudentsToStorage(studenti);
}

function trazeni(){
    let indexTrazenog=document.getElementById("trazeni").value;
    var trazeniStudent=pretraga(indexTrazenog);
    if(trazeniStudent===undefined){
        document.getElementById("ispis").innerHTML="Student sa tim brojem indexa nije unsesn.";
    }else{
        document.getElementById("ispis").innerHTML="Traženi student je: "+JSON.stringify(trazeniStudent);
    }
    console.log(trazeni);
}

function pretraga(index){
    return getStudentsFromStorage().find(student => student.number==index);
}

function listaStudenata(){
    var studenti=[];
    var ispis="";
    var spaseniStudenti=JSON.parse(sessionStorage.getItem("studenti"))
    if(spaseniStudenti!=null){
        studenti=spaseniStudenti;
    }
    for(let i=0; i<studenti.length; i++){
        ispis+= `${studenti[i].number}
        ${studenti[i].firstName} ${studenti[i].lastName}<br> `
    }
    document.getElementById("lista").innerHTML=ispis;
}




