let Employees=[
      {
          name:"Monika",
          age:39,
          city:"Anderi",
          salary:40000,
       },
       {
           name:"Reecha",
           age:29,
           city:"malad",
           salary:45000,
       },
       {
           name:"vaibhav",
           age:28,
           city:"Andheri",
           salary:46000,
       },
]

function display(emp){
       storage=" ";
       srno=1;
    emp.forEach(function(seekers,index){
        let jobs=`
        <tr>
        <td>${srno}</td>
        <td>${seekers.name}</td>
        <td>${seekers.age}</td>
        <td>${seekers.city}</td>
        <td>${seekers.salary}</td>
        <td><button onclick="Delete(${index})">Delete</button>
        </tr>`
        storage+=jobs
        srno++;
    })
    document.getElementsByClassName("tdata")[0].innerHTML =storage ;
}
display(Employees);

function searchByName() {
  let searchValue=document.getElementById("search").value
  
  let Name= Employees.filter(function(seekers){
       return (seekers.name.toUpperCase().indexOf(searchValue.toUpperCase())!= -1 )||(seekers.city.toUpperCase().indexOf(searchValue.toUpperCase())!= -1);
   })
    //  console.log(Name);
    display(Name);
};
function Delete(index){
    Employees.splice(index,1);
    display(Employees)

}