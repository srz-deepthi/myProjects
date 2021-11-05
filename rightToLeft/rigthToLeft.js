var flag=0;
function changeDir(){
    if(flag==1){
        $('body').removeClass('direction-rtl').addClass('direction-ltr');
        $('#px').removeClass('float-left').addClass('float-right');
        flag=0;
    }
    else{
        $('body').removeClass('direction-ltr').addClass('direction-rtl');
        $('#px').removeClass('float-right').addClass('float-left');
        flag=1;
    }
}
