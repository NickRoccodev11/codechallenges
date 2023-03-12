// given a name, return the abbreviation in this form: nick rocco => N.R



function abbrevName(name){
    let nameArr = name.split(" ");
      return `${nameArr[0][0].toUpperCase()}.${nameArr[1][0].toUpperCase()}`
    }