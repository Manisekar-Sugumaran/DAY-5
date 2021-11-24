var reviltitlecap=()=>{
function toTitles(s)
{
  return s.replace(/\w\S*/g, function(t) 
{
  return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); 
  });
  }
var str = toTitles('ajith revildo');
console.log(str)
}
reviltitlecap();