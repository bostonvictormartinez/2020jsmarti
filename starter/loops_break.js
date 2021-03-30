

var linda=['linda', 'smith', 1990, 'coach'];
for(var i=0;i<linda.length;i++){
    if(linda[i]!=='string'){
        continue;
    console.log(linda[i]);
}
}


var kathy=['kathy','smith', 1990,'coach'];
for(var i=0;i<kathy.length;i++){
    if(typeof kathy[i]!=='string')continue;
    console.log(kathy[i])
}


var jim=['jim','jones', 1975, 'rapper'];

for(var i=0;i<jim.length;i++){
    if(typeof jim[i]!=='string') continue
    console.log(jim[i])

    
}



var dre=['dre','doc',1990,'rapper'];
for(var i=0;i<dre.length;i++){
    if(typeof dre[i]!=='string')continue
    console.log(dre[i])
}

var jay=['jay','johnson', 1980,'attendant'];
for (var i=0;i<jay.length;i++){
    if(typeof jay[i]!=='string')break
    console.log(jay[i])
}


var church=['St Greg',2,'Mary Julia Road','Boston', 02124];
for(var i=0; i<church.length;i++){
    if(typeof church[i]!=='string')break;
    console.log(church[i])
}