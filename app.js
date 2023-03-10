function foo(a){
    var t = document.getElementById('ip')
    t.value += a
}
function res(){
    var a = document.getElementById('ip')
    a.value = eval(a.value)
}
function clr(){
    document.getElementById('ip').value = ''
}

