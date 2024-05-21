class HeroSection extends HTMLElement {
    connectedCallback(){
        const image = this.getAttribute("image")
        const title = this.getAttribute("title")
        const titleColor = this.getAttribute("titleColor")
        const subtitle = this.getAttribute("subtitle")
        const btn1 = this.getAttribute("btn1")
        const btn2 = this.getAttribute('btn2')

    
        this.innerHTML = `
    
        <section class= "mb-[10px]">
            <div class="iPhone 15 Pro ">
                <div class="content relative text-center justify-center bg-black flex items-center h-[690px] ">
                    <img src="${image}" alt=""
                        class="w-full h-full object-cover">
                    <div class="text-white absolute top-14 ">
                        <h2 class="font-[600] text-[30px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${titleColor}">${title}</h2>
                        <p class="text-[18px] sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl ${titleColor}">${subtitle}</p>
                        <div class="button ">
                            <button class="mx-[5px] mt-[15px] px-[25px] py-[10px] rounded-full bg-blue-600 text-white text-[12px] sm:text-sm md:text-lg lg:text-lg xl:text-md">${btn1}</button>
                            <button
                                class="mx-[5px] mt-[15px] px-[25px] py-[10px] border rounded-full border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 text-[12px] sm:text-sm md:text-lg lg:text-lg xl:text-md">${btn2}</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    
        `
    }
}

customElements.define("hero-section", HeroSection)