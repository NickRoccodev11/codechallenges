// implement the facebook like message

function likes(names) {
    let statement=""
    switch(names.length) {
    case 0 :
      statement = "no one likes this"
      break;
    case 1:
       statement = `${names[0]} likes this`
      break;
        case 2:
       statement = `${names[0]} and ${names[1]} like this`
      break;
         case 3:
       statement = `${names[0]}, ${names[1]} and ${names[2]} like this`
      break;
    default:
     statement = `${names[0]}, ${names[1]} and ${names.length-2} others like this`
      
  }
    return statement
    
  }