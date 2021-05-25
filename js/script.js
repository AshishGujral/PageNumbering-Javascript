
var li = document.querySelectorAll('li');
console.log(li[0]);
var page1=1;
// use for loop for hide the contact list 
for(let i=0;i<li.length;i++)
{
    li[i].hidden=true;
}

// get total using math ceil function to get the highest value integer
let total = li.length /10;
total = Math.ceil(total);
var button = document.getElementById("button");

// create a function create page
function CreatePage()
{
  // use for loop for creating button link 
    for(var page=1; page<=total; page++)
    {
        // create a button element 
        button1=document.createElement('button');
        // assign value to button element
        button1.value=page;
        button1.className= 'button';
        textnode=document.createTextNode(page);
        button1.appendChild(textnode);
        button.appendChild(button1);
        // use style property to center the text
        button.style.textAlign="center";
    }
    createbutton = document.querySelectorAll('button');
    // use for loop for call the funtion and getting the value and contact list
    for(let i=0;i<createbutton.length;i++)
    {
        // use style margin to set the margin
        createbutton[i].style.margin= "5px";
        // use onclick funtion when user click on page it return the clicked value and call the function and pass this value as object
        createbutton[i].onclick= function(){ var bvalue= this.value;console.log("Clicked button value is "+bvalue);ShowContact(bvalue);};
    }
}

// create a function showcontact 
function ShowContact(bvalue)
{
    // assign value to bvalue2 
       bvalue2= bvalue-1;
       bvalue2=bvalue2*10;
       //
       for(let i=0;i<li.length;i++)
        {
        li[i].hidden=true;    
        }
       // using for loop to show hidden contact 
       for(let i=0;i<bvalue*10;i++)
        {
           // console.log("clicked button value"+bvalue);
            if(i<li.length)
            {
                li[i].hidden=false;
            }
        }
        // use another for loop to hide some contact if user click on page 2 it hide page1 contact and soo on
        for(let j=0;j<bvalue2;j++)
        {
            li[j].hidden =true;
        }
    
}
CreatePage();
ShowContact(1);
