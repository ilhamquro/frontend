function download(callbackVerify) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Download selama 3 detik");
        callbackVerify();
    }, 3000);
    });
}

function verify(callbackNotify) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Verify");
        callbackNotify();
    }, 2000);
    });
}

function notify() {
    console.log("Download Selesai");
}

function main() {
    download(function () {
        verify(function () {
            notify();
        });
    });
}

main();