var list_of_students=[];


function submit(){
    var list_of_dudes=[];
for (i=1;i<=4;i++){
    var name=document.getElementById("stu."+i).value;
    console.log (name);

    list_of_students.push(name);

}
    console.log(list_of_students);
    var len=list_of_students.length;
    console.log(len);
    for (k=0;k<len;k++){
        list_of_dudes.push("<h4> NAME-"+ list_of_students[k] +"</h4>");

    }
    console.log(list_of_dudes);
    document.getElementById("list-of-students").innerHTML=list_of_dudes;
    var removecomma=list_of_dudes.join("");
    console.log(removecomma);
    document.getElementById("list_of_students").innerHTML=removecomma;
    document.getElementById("submit").style.display="none";
    document.getElementById("sorting").style.display="inline-block";
}
function sorting(){
    list_of_students.sort();
    console.log(list_of_students);
    var list_of_dudes_sort=[];
    var len=list_of_students.length;
    console.log(len);
    for (k=0;k<len;k++){
        list_of_dudes_sort.push("<h4> NAME-"+ list_of_students[k] +"</h4>");
        console.log(list_of_dudes_sort);
    }
    var removecomma=list_of_dudes_sort.join("");
    console.log(removecomma);
    document.getElementById("list-of-students").innerHTML=removecomma;

}
