let sickDays = {
  profile: {
    A: {
      dayUsed: 0,
      dayLeft: 30,
      withoutPay: 0,
      key: "asd1"
    },
    B: {
      dayUsed: 30,
      dayLeft: 0,
      withoutPay: 0,
      key: "12ds"
    }
  }
};

let getProfile = (name) => {
    if(name==="A"){
        console.log('Profile A:')
        console.log(sickDays.profile.A);
    }
  else if(name==="B"){
    console.log('Profile B:')
    console.log(sickDays.profile.B)
  }
  else {
      console.log('Please try again')
  }
};
let setSickDay = (name,confirm) => {
    if (name === "A") {
        getProfile("A")
          if (confirm === "confirm" && sickDays.profile.A.dayLeft > 0) {
            let num = sickDays.profile.A.dayLeft;
            num -= 1;
            console.log("You can used day sick in " + num + " day");
            return (num = sickDays.profile.A.dayLeft); //สมมติว่า update ไป json
          }
          else if(confirm === "confirm" && sickDays.profile.A.dayLeft <= 0){
              let num = sickDays.profile.A.withoutPay
              num += 1
              console.log('sick day used in without pay ' + num + ' day')
          }
          else{
            console.log('Please try again')
          }
        }
  if (name === "B") {
    getProfile("B")
      if (confirm === "confirm" && sickDays.profile.B.dayLeft > 0) {
        let num = sickDays.profile.B.dayLeft;
        num -= 1;
        console.log("You can used day sick in " + num + " day");
        return (num = sickDays.profile.B.dayLeft); //สมมติว่า update ไป json
      }
      else if(confirm === "confirm" && sickDays.profile.B.dayLeft <= 0){
          let num = sickDays.profile.B.withoutPay
          num += 1
          console.log('sick day used in without pay ' + num + ' day')

      }
      else{
        console.log('Please try again')
      }
    }
};

setSickDay("A","confirm");
setSickDay("B","confirm");
