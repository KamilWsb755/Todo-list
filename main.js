const buttons = document.querySelectorAll('button[data-key]')


const removeTask = (e)=>{
    const index = e.target.dataset.key;
    const li = document.querySelector(`li[data-key="${index}"]`).remove()
}

buttons.forEach(button => button.addEventListener('click',removeTask))

