var bogy = {query:`mutation{
    createPerson(personValues:{
          name : "14"
      f_name:"ewfcda"
      image:"wfd"
      cast:"wefe"
      cnic:"efascdc"
      address:"wfeeewef"
      mobile:["dqwcsac","fwefswfe"]
      isSeller:true
      isBuyer:false
      isWitness:true
  
    }) {
      name
      f_name
      image
      cast
      cnic
      address
      isSeller
      isBuyer
      isWitness
    }
  }`};
  var result = JSON.stringify(bogy);
console.log(result);
