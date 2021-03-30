



for(var i=0;i<10;i++){
     console.log(i)
    }


var john=['john', 'smith', 1990, 'teacher']

for(var i=0;i<john.length;i++){
    console.log(john[i])
}

var vic=['vic','martinez', 1990, 'coach'];
for(var i=0;i<vic.length;i++){
    if(typeof vic[i]!=='string')continue;
    console.log(vic[i])
}

var dave=['dave', 'smith',1990, 'coach'];
for (var i=0;i<dave.length;i++){
    if(typeof dave[i]!=='string')break;
    console.log(dave[i]);

}

