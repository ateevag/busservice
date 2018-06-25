

function addFields(){
   

    var number = document.getElementById("Seats").value;
    var container = document.getElementById("container");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    if(number<=4){
    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Passenger " + (i+1)));
        var input = document.createElement("input");
        input.id = "passenger"+i;
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
        input.type = "text";
        container.appendChild(document.createTextNode("Age " + (i+1)));
        var age = document.createElement("input");
        age.id = "age"+i;
        container.appendChild(age);
        container.appendChild(document.createElement("br"));
        age.type = "number";
        container.appendChild(document.createTextNode("Gender " + (i+1)));
        var gender = document.createElement("input");
        gender.id = "gender"+i;
        container.appendChild(gender);
        container.appendChild(document.createElement("br"));
        gender.type = "text";
       
    }
   
    }
    
}



var noOfSeats = 0, clickCounter = 0, k = 0, UserCount = 0;
$(document).ready(function () {
    $('.table').attr('disabled', true);
    var TableRows = $('.table tr');
    var emptyCell = '<td></td>';
    for (var i = 1; i < TableRows.length; i++) {
        if(i!=3){
        var rowID = 1;
        var colId = $('.table tbody tr:nth-child(' + i + ') td:nth-child(' + 2 + ')').text();
        for (var j = 0; j < 7; j++) {
            var id = rowID + colId;
            var appendString = '<td><span class="tdBox" id=' + id + '></span></td>';
            if (j == 10) {
                $('.table tbody tr:nth-child(' + i + ')').append(emptyCell);
                rowID--;
            }
            else {
                $('.table tbody tr:nth-child(' + i + ')').append(appendString);
            }
            rowID++;
        }
    }
    else{
        var rowID = 1;
        var colId = $('.table tbody tr:nth-child(' + i + ') td:nth-child(' + 1 + ')').text();
        for (var j = 0; j < 7; j++) {
            var id = rowID + colId;
            var appendString = '<td></td>';
            if (j == 10) {
                $('.table tbody tr:nth-child(' + i + ')').append(emptyCell);
                rowID--;
            }
            else {
                $('.table tbody tr:nth-child(' + i + ')').append(appendString);
            }
            rowID++;
        }
    }
}

    $('#Seats').focusout(function () {
        var BookedSeats = $('#Seats').val();
        noOfSeats = BookedSeats;
        if (BookedSeats > 4)
        {
            alert('Please select max of 4 seats only');
            $('#Seats').val('');
            $('.table tbody tr td span').css({opacity: 0.7});
        }
    });
    var redCount = 0;
    $('#Selectseat').unbind('click').bind('click', function () {
        if ($('#Seats').val() != '' || $('#Seats').val() != 0) {
            var table = document.getElementById("seatTable");
            for (var i = 1, row; row = table.rows[i]; i++) {
                for (var j = 1, col; col = row.cells[j]; j++) {
                    if (col.firstChild != null)
                    {
                        var ClassName = col.firstChild.className;
                        if (ClassName != '' && typeof ClassName !== "undefined" && ClassName !== null) {
                            if (ClassName[1] == 'redColor') {
                                redCount++;
                            }
                            else
                            {
                                break;
                            }
                        }
                    }
                }
            }
            if (redCount == 32)
            {
                $('.table tbody tr td').unbind('click');
                $('.table tbody tr td span').css({opacity: 0.7});
                alert('Sorry HouseFull');
                return;
            }
            $('.table').attr('disabled', false);
            $('.table tbody tr td span').css({opacity: 1});
            $('.table tbody tr td').unbind('click').bind('click', function () {
                var ClassName = $(this).find('span').attr('class');
                ClassName = ClassName.split(" ");
                if (ClassName[1] == 'greenColor') {
                    $(this).find('span').removeClass('greenColor');
                    clickCounter--;
                }
                else
                {
                    if (clickCounter >= noOfSeats)
                    {
                        return;
                    }
                    else
                    {
                        if (ClassName[1] == 'redColor')
                        {
                            return;
                        }
                        else
                        {
                            $(this).find('span').addClass('greenColor');
                            clickCounter++;
                        }
                    }
                }
            });
        }
        else
        {
            alert('Please select no of seats');
        }
    });
    $('#ConfirmSeat').unbind('click').bind('click', function () {
        var table = document.getElementById("seatTable");
        var idList = '';
        
        var UserName = $('#passenger0').val();
        if (UserName == '')
        {
            alert('Please enter the name to confirm the seats');
            return;
        }
        if ($('#Seats').val() == '' || $('#Seats').val() == 0)
        {
            alert('Please enter number of seats to confirm');
            return;
        }
        else
        {
            for (var i = 1, row; row = table.rows[i]; i++) {
                for (var j = 1, col; col = row.cells[j]; j++) {
                    if (col.firstChild != null)
                    {
                        var ClassName = col.firstChild.className;
                        if (ClassName != '' && typeof ClassName !== "undefined" && ClassName !== null) {
                            ClassName = ClassName.split(" ");
                            if (ClassName[1] == 'greenColor') {
                                UserCount++;
                                idList += $('.table tbody tr:nth-child(' + i + ') td:nth-child(' + (j + 1) + ') span').attr('id') + ',';
                                $('.table tbody tr:nth-child(' + i + ') td:nth-child(' + (j + 1) + ') span').removeClass('greenColor').addClass('redColor');
                            }
                            if (ClassName[1] == 'greenColor') {
                                redCount++;
                            }
                        }
                    }
                }
            }
            if (UserCount != parseInt(noOfSeats))
            {
                UserCount = 0;
                var array = idList.split(',');
                for (var l = 0; l < array.length; l++) {
                    $('#' + array[l]).removeClass('redColor').addClass('greenColor');
                }
                alert('selected seats does not match with the number of seats specified');
                return;
            }
            idList = idList.substring(0, idList.length - 1);
            var newRow = document.createElement('tr');
            newRow.setAttribute('id', 'id_' + k);
            $('.resultTable').append(newRow);
            var td = document.createElement('td');
           
            var number = document.getElementById("Seats").value;
            var name=[];
           
            for(var z=0; z<number;z++){
               var x=document.getElementById("passenger"+z).value;
               
               name.push(x);
               
       
           }

           for(var r=0; r<number;r++){
            td.innerHTML +=name[r] +",";
            
           }
           document.getElementById("passseat").value=idList;
           document.getElementById("passcount").value=UserCount;
           
            document.getElementById('id_' + k).appendChild(td);
            td = document.createElement('td');
            td.innerHTML = UserCount;
            document.getElementById('id_' + k).appendChild(td);
            td = document.createElement('td');
            td.innerHTML = idList;
            document.getElementById('id_' + k).appendChild(td);
           
            k++;
            clickCounter = 0;
           UserCount = 0;
           
            $('#Name').val('');
            $('#Seats').val('');
            $('.table tbody tr td').unbind('click');
            $('.table tbody tr td span').css({opacity: 0.7});
           
            
            
           
        }
     
    });
    

});
function sendvalue(){

            var number = document.getElementById("Seats").value;
            var name=[];
            var age=[];
            var gender=[];

            var namex="";
            var agex="";
            var genderx="";
            for(var s=0; s<number;s++){
               var x=document.getElementById("passenger"+s).value;
               var y=document.getElementById("age"+s).value;
               var z=document.getElementById("gender"+s).value;
               name.push(x);   
               age.push(y);   
               gender.push(z);   
               namex +=name[s] +",";    
               agex +=age[s] +",";   
               genderx +=gender[s] +",";   
               document.getElementById("passname").value=namex;
               document.getElementById("passage").value=agex;
               document.getElementById("passgender").value=genderx;

           }
        }