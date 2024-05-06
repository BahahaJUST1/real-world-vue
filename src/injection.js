let displayIFrame = false;


function injectInterface(context) {

    const currentPath = window.location.pathname;
    // console.log("currentPath :", currentPath);

    const currentOrigin = window.location.origin;
    // console.log("currentOrigin :", currentOrigin);

    // ALLOW TO USE TRIBUO CONTEXT ONLY IF CURRENT PATH/ORIGIN IS TRIBUO OG WEBSITE

    let path = "http://localhost:5173/widget/" + context;

    const iframeObject = 
        '<div id="bubo-container" class="absolute right-0 top-0 w-full md:w-[30%] h-full flex flex-col items-end">' +
            '<img id="bubo-arrow-close" ' +
                'data-src="https://i.imgur.com/ueQUEBK.png" ' +
                'class="iframe-image-utility absolute h-[20px] transform -translate-x-1/2 -translate-y-1/2 top-6 left-1/2 cursor-pointer hover:scale-105 md:hidden invisible" ' +
                'onClick="switchIFrameVisibility()"' +
            '>' +
            '<iframe id="bubo-iframe"' +
                'src="' + path + '" ' +
                'class="invisible h-full w-full md:mx-[5%] md:mt-[5%] md:rounded-xl md:border-2 md:border-blue-950" ' +
                'frameborder="0" ' +
            '></iframe>' +
            '<img id="bubo-widget" ' +
                'data-src="https://i.imgur.com/eQILJxZ.png" ' +
                'class="iframe-image-utility bottom-0 w-[60px] mb-2 mr-[2%] md:mr-[4%] mt-2 cursor-pointer hover:scale-105" ' +
                'onClick="switchIFrameVisibility()"' +
            '>' +
        '</div>';

    window.document.body.innerHTML += iframeObject;
}


function switchIFrameVisibility() {
    displayIFrame = !displayIFrame;

    const buboIFrame      = document.querySelector("#bubo-iframe");
    const buboWidget      = document.querySelector("#bubo-widget");
    const buboArrowCLose  = document.querySelector("#bubo-arrow-close");

    if (displayIFrame) {
        buboIFrame.style.visibility = 'visible';
        buboWidget.classList.add("hidden");
        buboWidget.classList.add("md:block");
        buboArrowCLose.classList.remove("invisible");
    }
    else {
        buboIFrame.style.visibility = 'hidden';
        buboWidget.classList.remove("hidden");
        buboArrowCLose.classList.add("invisible");
    }
}

injectInterface('my-tribuo-advisor');

// load images after the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelectorAll(".iframe-image-utility").forEach((img) => { img.src = img.dataset.src });
});