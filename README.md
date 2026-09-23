# Instruction of Kohrin's Portfolio Web page!
    Name: Kohrin Suzuki
    Student Id: 20169978

## What is this site?
This web site is Assessment Task 2,phase 1 to 3 in Web technology class.
Pahse-1 is simply made with html and css.
Phase-2 is added some js code to implement dynamic feature with api.
Phase-3 is rearranging dashboard page with tailwind css module.

## Which Api I use
I use 2 Api for phase-2.
1. Sudoku api
    Get a sudoku pazzle from 3 levels.(easy, midium, hard)

2. Cocktail api
    Get some cocktail recipes searched the name by given keyword.

Both api is from Ninja Api service.

## Components from tailwind css
Here is a list of components I use in the dashboard page.
- Sticky Header
```html
<div class="sticky top-0 flex flex-col justify-between p-6 mx-auto md:flex-row gap-2 bg-gray-800 text-gray-200">
    <a class="flex items-center mb-4 title-font md:mb-0 gap-2">
        <img src="../../assets/img/SCC-Logo.svg" alt="SCC Logo" class="h-6">
        <h1 class="text-sm">Site Name</h1>
    </a>
    <div class="flex text-base md:ml-auto border border-dashed">
        <p>Navigation Area</p>
    </div>
</div>
```

- Simple Footer
```html
<div class="text-gray-400 bg-gray-800 body-font
    w-full container flex flex-col items-start justify-between p-6
            mx-auto md:flex-row gap-2">
    <a class="flex items-center mb-4 title-font md:mb-0 gap-2
                  hover:text-white transition duration-500 ease-in-out">
        <img src="../../assets/img/SCC-Logo.svg" alt="SCC Logo" class="h-6">
        <h1 class="text-sm">Site Name</h1>
    </a>
    <div class="flex flex-wrap text-sm pl-6 ml-6 text-base
                border-l border-gray-400 grow ">
        <p class="m-auto">
            © Copyright 2023 SITE_OWNER, all rights reserved.
        </p>
    </div>
    <div class="flex flex-wrap text-sm pl-6 ml-6 text-base border-l border-gray-400
                md:mr-auto gap-2">
        <a href="#"
           class="border-b border-gray-400 hover:border-gray-200 hover:text-white
                  transition duration-500 ease-in-out">Home</a>
        <a href="#"
           class="border-b border-gray-400 hover:border-gray-200 hover:text-white
                  transition duration-500 ease-in-out">About</a>
        <a href="#"
           class="border-b border-gray-400 hover:border-gray-200 hover:text-white
                  transition duration-500 ease-in-out">Contact</a>
        <a href="#"
           class="border-b border-gray-400 hover:border-gray-200 hover:text-white
                  transition duration-500 ease-in-out">Policies</a>
    </div>
</div>
```

- Card (Vertical)
```html
<div class="w-1/4 border border-gray-500 flex flex-col gap-4 p-4">
    <div class="bg-gray-800 text-gray-200 p-4 -m-4 mb-0">
        <h4 class="text-bold text-xl">Card Header</h4>
    </div>
    <div class="flex flex-col gap-4">
        <p>This card contains text only, no image, just a plain simple text card.</p>
        <p>It also omits header and footer areas.</p>
        <p>It is 1/4 of the parent container width.</p>
    </div>
    <div class="bg-gray-200 text-gray-800 p-4 -m-4 mt-0">
        <p>Card Footer Content</p>
    </div>
</div>
```