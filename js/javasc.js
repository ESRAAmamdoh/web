var site_name=document.getElementById('bookmarkername')
var site_url=document.getElementById('BookMarkerUrl')
 
var site_list=[]
if(localStorage.getItem('sites')!=null){
    site_list=JSON.parse(localStorage.getItem('sites'))
    display()
}
function main(){
    addToSiteList()
    display()
    clearindex()
}
function addToSiteList(){
    var site_object={
        name: site_name.value,
        url:site_url.value

    }
    site_list.push(site_object)
    localStorage.setItem('sites',JSON.stringify(site_list))
}
function display(){
    var c='';
    for(var i=0;i<site_list.length;i++){
        c+=`
        <tr>
        <td>${i+1}</td>
        <td>${site_list[i].name}</td>
        <td><a href="${site_list[i].url}" class="btn btn-success" target="_blank"><i class="fa-solid fa-eye"></i> Visit</a></td>
        <td><button onclick="deleteindex(${i})" class="btn btn-danger" ><i class="fa-solid fa-trash"></i> DELETE</button></td>
       
    </tr>
        `
    }
    document.getElementById('tbody-index').innerHTML=c
}
function clearindex(){
    site_name.value=""
    site_url.value=""
}
function deleteindex(index){
    site_list.splice(index,1)
    localStorage.setItem('sites',JSON.stringify(site_list))
    display()
}