export class User {
    // userinfo = {}
    online = false
    html = null;
    constructor(userinfo){
        this.userinfo = userinfo
        this.element
    }

    createHtml(){
        const containerElement = document.createElement('div')
        containerElement.classList.add('user')
        containerElement.dataset.present = this.online

        console.log(containerElement)
        const childHtml = `
            <img src="${this.userinfo.picture.large}">
            <div class="user--info">
                <h1>${this.userinfo.name.title} ${this.userinfo.name.first} ${this.userinfo.name.last}</h1>
                <p>${this.userinfo.dob.age} years old</p>
                <p>${this.userinfo.location.city}</p>
            </div>
            <a href="mailto:${this.userinfo.email}">
                <span class='mail'>✉️</span>
            </a>`
        console.log(childHtml)
        childHtml.toString()

        containerElement.insertAdjacentHTML("afterbegin", childHtml);
        //addeventlistener ici plus facile à mon avis
        containerElement.addEventListener('click',() => this.setOnline())
        this.html = containerElement

        // containerElement.innerHTML = childHtml

    }

    render(){
        const main = document.querySelector('main')
        main.insertAdjacentElement('afterbegin', this.html)
    }

    setOnline(){
        console.log('lancé')
        this.online ? this.online = false : this.online = true
        console.log(this.online)
        this.html.dataset.present = this.online
    }
}