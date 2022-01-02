const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('progress');  
const nextBtn =  document.querySelector('btn next');   
const prevBtn =  document.querySelector('btn prev');     
const currentActive = 0;

nextBtn.forEach(element => {
    element.addEventListener('click', () =>{
        if(element.classlist.contains('Active')){
            Active++
        }
        // else if(currentActive => circles[]);
    })

    prevBtn.forEach(element => {
        element.addEventListener('click', () =>{
            if(element.classlist.contains('Active')){
                Active++
            }
        })
    })

    function update(){
        forEach(element => {
            circles();
        });
    }
});

// btns.forEach(element => {
//     element.addEventListener('click', () => {
//      if(element.classList.contains('decrease')){count--;
//      }else if(element.classList.contains('increase')){count++;  
//      }else if(element.classList.contains('reset')){count = 0;
//      }if(count <= 0){
//          counterValue.style.color = ('red');
//      }if(count == 0){
//          counterValue.style.color = ('pink');
//      }if(count >= 0){
//          counterValue.style.color = ('green');

// const panels = document.querySelectorAll('.panel');

// panels.forEach(panel => {
//     panel.addEventListener('click', () =>{
//         removeActiveClass();
//         panel.classList.add('active');
//     })
// })

        
//         function removeActiveClass(){
//             panels.forEach(panel => {
//                 panel.classList.remove('active')