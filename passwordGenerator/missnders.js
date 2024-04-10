let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    for (let i = 1; i <= 8; i++) {
     
      let char = Math.floor(Math.random()*str.length +1)
      
      pass += str.charAt(char)
    }

    console.log(pass);