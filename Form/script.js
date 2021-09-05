




function addrow()
{
var fname = document.getElementById("first-name").value;
var lname=document.getElementById("last-name").value;
var address=document.getElementById("address").value;
var pin=document.getElementById("pin").value;
var state=document.getElementById("stateSel").value;
var country=document.getElementById("countySel").value;
const values = Array
.from(document.querySelectorAll('input[type="checkbox"]'))
.filter((checkbox) => checkbox.checked)
.map((checkbox) => checkbox.value);



var radios = document.getElementsByName("gender");
var selected = Array.from(radios).filter(radio => radio.checked).map(radio=>radio.value);

if(fname==null || fname=="")
{
        alert("First Name cannot be Null");
        document.getElementById("first-name").focus();
        return false;
}

if(address==null || address=="")
{
    alert("Please enter your address");
    document.getElementById("address").focus();
    return false;
}
        var genValue = false;

        for(var i=0; i<radios.length;i++){
            if(radios[i].checked == true){
                genValue = true;    
            }
        }
        if(!genValue){
            alert("Please Choose the gender");
            document.getElementById("gender").focus();
            return false;
        }

        var checkBoxes = document.querySelectorAll('input[type="checkbox"]');
        var isChecked = 0;
    for (var i = 0; i < checkBoxes.length; i++) {
        if ( checkBoxes[i].checked ) {
            isChecked++;
        };
    };
    if ( isChecked<2 ) {
            alert( 'Please, check at least two checkboxes!' );
            
            return false;
        }  


if(country=="")
{
    alert("Select your country");
    return false;
}
if(state=="")
{
    alert("Select your state");
    return false;
}
var regex = /^\d{6}$/;
if(pin == "" || pin==null){
    alert("Pin code Field cannot be left empty");
    document.getElementById("pin").focus();
    return false;
  }
if(regex.test(pin) == false){
alert("The lenght of Pin code must be of six digits");
document.getElementById("pin").focus();
return false;
}








var table = document.getElementById("mytable");
var row = table.insertRow(1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);
cell1.innerHTML =fname;
cell2.innerHTML=lname
cell3.innerHTML=address;
cell4.innerHTML=selected;
cell5.innerHTML=values;
cell6.innerHTML=country;
cell7.innerHTML=state;
cell8.innerHTML=pin;
document.getElementById("client").reset();

} 


var countryStateInfo = {
	"USA": ["California","Texas"],
	"India": ["Assam","Dispur","Guwahati","Gujarat","Vadodara","Surat","Andhra Pradesh",
    "Arunachal Pradesh",
   "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
  "Gujarat",
   "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"] 	
	}   



window.onload = function () {

    document.getElementById("first-name").focus();
	
	//Get html elements
	var countySel = document.getElementById("countySel");
	var stateSel = document.getElementById("stateSel");	
	
	
	//Load countries
	for (var country in countryStateInfo) {
		countySel.options[countySel.options.length] = new Option(country, country);
	}
	
	//County Changed
	countySel.onchange = function () {
		 
		 stateSel.length = 1; // remove all options bar first
		 
		 
		 if (this.selectedIndex < 1)
			 return; // done
		 
		 var states=countryStateInfo[this.value];
			for (var i = 0; i < states.length; i++) {
                stateSel.options[stateSel.options.length] = new Option(states[i], states[i]);
            }
	}
	}

