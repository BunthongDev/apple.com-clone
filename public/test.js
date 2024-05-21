class MyComponent extends HTMLElement {

    connectedCallback(){
        const image = this.getAttribute("image")
        const title = this.getAttribute("title")
        const subtitle = this.getAttribute("subtitle")
        const btn1 = this.getAttribute("btn1")
        const btn2 = this.getAttribute('btn2')
    
        this.innerHTML = `
    
        <section>
            <div class="iPhone 15 Pro ">
                <div class="content relative text-center justify-center bg-black flex items-center h-[690px] ">
                    <img src="${image}" alt=""
                        class="w-full h-full object-cover">
                    <div class="text-white absolute top-14 ">
                        <h2 class="font-[600] text-[55px]">${title}</h2>
                        <p class="text-[25px]">${subtitle}</p>
                        <div class="button ">
                            <button class="mx-[5px] mt-[15px] px-[25px] py-[10px] rounded-full bg-blue-600 text-white">${btn1}</button>
                            <button
                                class="mx-[5px] mt-[15px] px-[25px] py-[10px] border rounded-full border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 ">${btn2}</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    
        `
    }
  }
  
  customElements.define("my-component", MyComponent)