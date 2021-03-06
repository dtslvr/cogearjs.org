export default class AutoSubmenu {
	constructor(options){
		let defaults = {
			activeLinkSelector: "aside.menu a.is-active",
			headersSelector: "article > h1"
		}
		this.options = options ? Object.assign(defaults,options) : defaults
		!this.isBuilt && this.build()
		this.isBuilt = true
	}
	build(){
		let activeLink = document.querySelector(this.options.activeLinkSelector)
		if(!activeLink || activeLink.parentElement.querySelector('ul')){
			return
		}
		let headers = document.querySelectorAll(this.options.headersSelector)
		if(!headers.length) return
		let ul = document.createElement("ul")
		ul.classList.add('animated')
		ul.classList.add('fadeInLeft')
		headers.forEach((header)=>{
			if(header.innerText == activeLink.innerText) return 
			let li = document.createElement("li")
			let a = document.createElement("a")
			a.href = "#" + header.id
			a.innerText = header.innerText
			li.appendChild(a)
			ul.appendChild(li)
		})
		if(ul.querySelectorAll('li').length) activeLink.parentElement.appendChild(ul)
	}
}