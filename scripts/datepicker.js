var $datepicker;
$(document).ready(function () {
    $datepicker = $('#datepicker').datepicker({
        format: 'dd/mm/yyyy',
        uiLibrary: 'bootstrap',
    });
});


function daycal(){
    var x = document.getElementById("datepicker").value;
    var result= x.split("/");
    var date=parseInt(result[0]);
    var month=parseInt(result[1]);
    var year=118;
    var d=new Date(118, month, date);
    var days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    document.getElementById("datepicker").value=x+" "+days[d.getDay()];
}