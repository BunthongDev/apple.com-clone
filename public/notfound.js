
// not yet done "Probaby I do it wrong!!"

const routes = {
    '/': '<h1 class="text-4xl font-bold text-gray-800 mb-4">Home Page</h1><p class="text-lg text-gray-600 mb-8">Welcome to the Home Page.</p>',
    '/about': '<h1 class="text-4xl font-bold text-gray-800 mb-4">About Page</h1><p class="text-lg text-gray-600 mb-8">This is the About Page.</p>',
};

const notFoundPage = `
    <section class="flex items-center justify-center mt-[20px] mb-[150px]">
    <div class="mt-12 lg:mt-16 relative">
        <div class="message text-[45px] font-medium max-w-lg leading-[47px] text-center mx-auto px-4">
            <h1>The Page you're looking for can't be found.</h1>
        </div>
        <div class="search-form mt-12 px-[15px]">
            <form class="relative w-full max-w-lg h-14 bg-gray-300 flex items-center rounded mx-auto">
                <div class="absolute left-0 pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </div>
                <input type="text" placeholder="Search apple.com" class="border w-full h-full pl-10 pr-3 text-gray-700 placeholder-gray-600 focus:outline-none rounded" />
            </form>
        </div>
        <div class="text-blue-600 mt-6 text-center">
            <p>Or see our site map ></p>
        </div>
    </div>
    </section>
`;

function navigateTo(event, path) {
    event.preventDefault();
    window.history.pushState({}, path, window.location.origin + path);
    updateContent();
}

function updateContent() {
    const path = window.location.pathname;
    const content = routes[path] || notFoundPage;
    document.getElementById('notfound').innerHTML = content;
}

// Handle back/forward navigation
window.onpopstate = updateContent;

// Initial content load
updateContent();
