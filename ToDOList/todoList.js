/*var itemsList=new Array();
function addItems() {
    let list='';
    if(document.getElementById("nItem").value==""){
        return false;
    }
    itemsList.push(document.getElementById("nItem").value);
    let index=itemsList.length-1;
    //alert("index value is:"+index);

    for(let item of itemsList){
        list+="<li>";
        list+=item;
        list+="<span class=\"close\" aria-hidden=\"true\" onclick=\"this.parentElement.remove();\">&times;</span>";
        list+="</li>";
        
    }
    document.getElementById("dispItems").innerHTML=list;
    document.getElementById("nItem").value='';
}*/

function addItems() {
    if(document.getElementById("nItem").value=="")
    {
        return false;
    }
    var nodeSpan = document.createElement('span')
    nodeSpan.innerHTML ="&times\;";
    nodeSpan.setAttribute('class',"close");
    nodeSpan.setAttribute('aria-hidden',true);  
    nodeSpan.setAttribute('onclick',"this.parentElement.remove();");
    let newItem=document.getElementById("nItem").value;
    nodeSpan.setAttribute('id',newItem);
    var node = document.createElement("li");
    var textnode = document.createTextNode(newItem);
    node.setAttribute('id',newItem);
    node.appendChild(textnode);
    node.appendChild(nodeSpan);
    document.getElementById("dispItems").appendChild(node);

    document.getElementById("nItem").value="";
  }

  
