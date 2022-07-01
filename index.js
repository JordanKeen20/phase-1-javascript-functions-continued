function saturdayFun(activity){
    if (activity ==='bathe my dog'){
        return 'This Saturday, I want to bathe my dog!'
    } else {
        return 'This Saturday, I want to roller-skate!'
    }
    
}


function mondayWork(responsibility){
    if (responsibility === 'work from home'){
        return 'This Monday, I will work from home.'
    } else {
        return 'This Monday, I will go to the office.'
    }
}


function wrapAdjective(odd='*'){
    return function(character = 'special') {
        return `You are ${odd}${character}${odd}!`
    }
}
    