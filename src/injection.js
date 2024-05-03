let displayIFrame = false;


function injectInterface(context) {

    const currentPath = window.location.pathname;
    // console.log("currentPath :", currentPath);

    const currentOrigin = window.location.origin;
    // console.log("currentOrigin :", currentOrigin);

    // ALLOW TO USE TRIBUO CONTEXT ONLY IF CURRENT PATH/ORIGIN IS TRIBUO OG WEBSITE

    let path = "http://localhost:5173/widget/" + context;

    const iframeObject = 
        '<div id=\'bubo-container\' class="absolute right-0 top-0 w-full md:w-[30%] h-full flex flex-col items-end">' +
            '<iframe id=\'bubo-iframe\'' +
                'src="' + path + '" ' +
                'class="invisible h-full w-full md:mx-[5%] md:mt-[5%] md:rounded-xl md:border-2 md:border-blue-950" ' +
                'frameborder="0" ' +
            '></iframe>' +
            '<img ' +
                'src="https://i.imgur.com/eQILJxZ.png" ' +
                'class="bottom-0 w-[60px] mb-2 mr-[2%] md:mr-[4%] mt-2 cursor-pointer hover:scale-105" ' +
                'onClick="switchIFrameVisibility()"' +
            '>' +
        '</div>';

    window.document.body.innerHTML += iframeObject;
}


function switchIFrameVisibility() {
    displayIFrame = !displayIFrame;
    const buboIFrame = document.querySelector("#bubo-iframe");
    const buboContainer = document.querySelector("#bubo-container");
    displayIFrame ? (buboIFrame.style.visibility = 'visible') : (buboIFrame.style.visibility = 'hidden');
}

injectInterface('my-tribuo-advisor');