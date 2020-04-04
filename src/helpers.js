export const revisarMana = (cantidad,restante)=>{
    let clase;
    if((cantidad / 4)>restante){
        clase='alert alert-danger';
}else if((cantidad / 2)>restante) {
    clase = 'alert alert-warning';
}else{
    clase= 'alert alert-success'
}
return clase;
}