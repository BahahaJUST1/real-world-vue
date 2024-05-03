let displayIFrame = false;


function injectInterface(context) {

    const currentPath = window.location.pathname;
    // console.log("currentPath :", currentPath);

    const currentOrigin = window.location.origin;
    // console.log("currentOrigin :", currentOrigin);

    // ALLOW TO USE TRIBUO CONTEXT ONLY IF CURRENT PATH/ORIGIN IS TRIBUO OG WEBSITE

    let path = "http://localhost:5173/widget/" + context;

    const iframeObject = 
        '<div class="absolute right-0 top-0 w-[30%] h-full flex flex-col items-end">' +
            '<iframe id=\'bubo-iframe\'' +
                'src="' + path + '" ' +
                'class="invisible h-full w-[85%] mx-[5%] mt-[5%] rounded-xl border-2 border-blue-950" ' +
                'frameborder="0" ' +
            '></iframe>' +
            '<img ' +
                'src="https://i.imgur.com/eQILJxZ.png" ' +
                'class="w-[15%] mb-2 mr-[4%] mt-2 cursor-pointer hover:scale-105" ' +
                'onClick="switchIFrameVisibility()"' +
            '>' +
        '</div>';

    window.document.body.innerHTML += iframeObject;
}


function switchIFrameVisibility() {
    displayIFrame = !displayIFrame;
    const buboIFrame = document.querySelector("#bubo-iframe");
    displayIFrame ? buboIFrame.style.visibility = 'visible' : buboIFrame.style.visibility = 'hidden';
}

injectInterface('my-tribuo-advisor');