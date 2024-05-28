
    // JavaScript for accordion functionality
    document.addEventListener("DOMContentLoaded", function() {
        const accordionBtns = document.querySelectorAll(".accordion-btn");

        accordionBtns.forEach((btn) => {
            btn.addEventListener("click", function() {
                const icon = btn.querySelector("svg");
                const content = btn.parentElement.nextElementSibling;

                if (content.classList.contains("hidden")) {
                    content.classList.remove("hidden");
                    icon.classList.add("rotate-180");
                } else {
                    content.classList.add("hidden");
                    icon.classList.remove("rotate-180");
                }
            });
        });
    });
