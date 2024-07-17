// async await function declaration

function AlanreadFile(){
  let p = new Promise ( function (resolve){
    setTimeout(function() {resolve ("hi there !");
  }, 3000);
})
  return p;
}

async function main(){ // any function that wants to use await,need to be async
  const value = await AlanreadFile(); // awaits for the alanreadfile to read and awaits the thread for 3s and then it prints the output
  console.log(value); // rather than usng .then syntax we add await before and get the final value in the variable.
}

main()
console.log("After main");