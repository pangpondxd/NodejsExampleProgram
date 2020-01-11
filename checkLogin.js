const users = {
    user1: {
        username: 'test123',
        password: '1234'
    }
}
console.log('Username: ')
let stdin = process.openStdin()
stdin.addListener("data", (username) => {
    let a = username.toString().trim()
   // console.log(a.toString().trim())
   console.log('Password: ')
   stdin.addListener("data", (password) => {
       console.log('Username: ' + username + 'Password: ' + password)
       let b = password.toString().trim()
       Login(a,b)
       stdin.destroy()
   })
})

Login = (username, password) => {
    if(username == users.user1.username){
        if(password == users.user1.password){
            console.log('Success ' + username + password )
            console.log('Login Successfully')
        }
    }
    else{
        console.log('Failed ' + username + password)
        console.log('Please try again')
    }
}

