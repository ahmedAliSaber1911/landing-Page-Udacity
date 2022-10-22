/*global variables*/
const sections=document.querySelectorAll('section');
const linklist=document.getElementById('navbar__list');
const fragment=document.createDocumentFragment();


/*action when page loaded*/
sections.forEach(section => {
    /*store section attribute value*/
    const dataAttribute=section.getAttribute('data-nav');
    /*create list item*/
    const createli=document.createElement('li');
    /*create li anchor*/
    const createlink=document.createElement('a');
    /*add section attribute to anchor*/
    createlink.textContent=dataAttribute;
     createlink.classList.add("menu__link")
    /*add anchor to listItem*/
    createli.appendChild(createlink);
    /*add class to listitem*/
    createli.classList.add('init');
    /*action when listItem clicked*/
    /*appending listitem to fragment*/
    fragment.appendChild(createli)
    /*adding click action to listitem*/
    createli.addEventListener('click',() =>{
        /*to smooth scrolling*/
        section.scrollIntoView({'behavior':'smooth'});
    })
});
/*adding fragment to ul list*/
linklist.appendChild(fragment);



/*when any linkitem clicked function*/
let itemgroup = document.querySelectorAll('.init');
itemgroup.forEach( listItem => {
listItem.addEventListener('click',() => {
    itemgroup.forEach( lItem => {
        lItem.classList.remove('item');
        listItem.classList.add('item');
    });
    /*collect the relative section*/
    sections.forEach( section => {
        section.classList.remove('your-active-class');
        let dAttri=section.getAttribute('data-nav')
        if(dAttri===listItem.textContent){
            section.classList.add('your-active-class')
        }

    });

})
})

/*while scrolling page*/
window.onscroll= function(){

    sections.forEach( activeSection => {
    /*getting activeSection position*/
        const rect = activeSection.getBoundingClientRect();
    /*testing section position requirement*/
        if (rect.top >=0 && rect.top<=200){
        /*remove all sections class content*/
            sections.forEach( activeSection => {
                activeSection.classList='';
            });
        /*adding effect class to the section mets requirement*/
            activeSection.classList.add('your-active-class');
            /*styling relative link*/
            let links=document.querySelectorAll('a');
            links.forEach( link => {
                let sectionAttri=activeSection.getAttribute('data-nav');
                /*check if inner anchor mets section requirement*/
                if(link.textContent===sectionAttri){
                    const liS=document.querySelectorAll('li');
                    /*removing effectclass from all listitems */
                    liS.forEach( li =>{
                        li.classList.remove('item');
                    });
                    /*adding it the relative listitem */
                    link.parentElement.classList.add('item');
            }
        })
        }
    })
};
