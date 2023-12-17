// automatic processes

// appearance of section nav

const prelog = document.querySelector("#prelog");
const nav = document.querySelector("nav");
nav.style.transform = "translateY(-100%)";

const prelogObserveOptions = {
    rootMargin: "-10px 0px 0px 0px"
};

const prelogObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) 
        {
            nav.style.transform = "translateY(0)";
        }
        else
        {
            nav.style.transform = "translateY(-100%)";
        }
    })
}, prelogObserveOptions)

prelogObserver.observe(prelog);

// activation of section link on scroll
const sectionObserveOptions = {
    rootMargin: `-${window.innerHeight}px 0px 0px 0px`
};

const section = document.querySelectorAll("main > section");
section.forEach(section => {
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) 
            {
                document.querySelector(`nav a[href="#${section.id}"`).classList.add("active");
            }
            else
            {
                document.querySelector(`nav a[href="#${section.id}"`).classList.remove("active");
            }
        })
    }, sectionObserveOptions);

    sectionObserver.observe(section);
});

// pixel-animation
const grid = document.querySelector(".pixel-animation");
for (let i = 0; i < 784; i++)
{
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    if (Math.round(Math.random(), 0) > 0)
    {
        pixel.classList.add("filled");
    }
    grid.appendChild(pixel);
}


