const setLocalStorage = id => {

    let users;

    const usersFromStorage = localStorage.getItem('user')
    if(usersFromStorage){
        users = JSON.parse(usersFromStorage)
    }else{
        users = {}
    }
    
    const quantity = users[id]
    if(quantity){
        const newQuantity = quantity + 1
        users[id] = newQuantity
    }else{
        users[id] = 1
    }
    
    localStorage.setItem('user', JSON.stringify(users))
}

export {setLocalStorage}