const users=[
    {
        first_name:"mike",
        location:"london"
    },
    {
        first_name:"tim",
        location:"us"
    },
    {
        first_name:"john",
        location:"australia",
    }                       

];
var ans=users.map(function(e){
    var a=e.first_name+" "+"lives in"+" "+e.location;
    return a;

})
document.write(ans);