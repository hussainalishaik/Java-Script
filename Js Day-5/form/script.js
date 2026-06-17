const validateForm =(event) => {
    event.preventDefault()

    let username = event.target.username
    let password = event.target.password
    let error = document.getElementById('error')

    if (username.value ===""){
        error.innerHTML ="please enter username"
        username.style.borderColor ="red"
    }
    
    
}