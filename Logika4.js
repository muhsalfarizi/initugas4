for (var a = 1; a < 10; a++){
    for(var b = 1; b < 10; b++){
        if(a == b){
            document.write(' * ')
        } else {
            document.write(' _ ')
        } if(a + b == 10){
            document.write(' * ')
        } else {
            document.write(' _ ')
        } 
    }
    document.write('<br>');
}
