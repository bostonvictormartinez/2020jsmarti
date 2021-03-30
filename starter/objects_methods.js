var john={
    name:'john',
    lastname:'smith',
    birthYr:1990,
    family:['Dave', 'Mike','Harry'],
    isMarried:false,
    currentAge:function(birthYr){
        return 2000-birthYr
    }
}
console.log(john.currentAge(1991))


var team={
    forward:'john',
    midde:'dave',
    score:2,
    team:'giants',
    currentScore :function(score){
        return 2-this.score;
    }
}
console.log(team.currentScore());


var johns={
    first:'johnie',
    last:'smithie',
    yrBirth:1975,
    isMarried:true,
    currentAges:function(){
        return 2020 - this.yrBirth
    }
}
console.log(johns.currentAges());



var susie={
    names:'suzie',
    lastName:'ormond',
    yrBirths:1970,
    isMarrieds:true,
    currentAgess:function(){
        return 2020 - this.yrBirths;
    }
}
console.log(susie.currentAgess());
