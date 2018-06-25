function swap(){
    var a= document.getElementById('search').value;
    var b= document.getElementById('search1').value;
    var temp=a;
    a=b;
    b=temp;
    var x=a;
    var y=b;
    document.getElementById('search').value=x;
    document.getElementById('search1').value=y;
}