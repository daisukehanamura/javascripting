const fetchData = (key) => {
    return new Promise((resolve, reject) => {
        switch (key) {
            case "quick":
                setTimeout(() => {
                    resolve("quick: hi!");
                }, 1000);
                break;

            case "medium":
                setTimeout(() => {
                    resolve("medium: hello!!");
                }, 2000);
                break;

            case "slow":
                setTimeout(() => {
                    resolve("slow: good morning!!!");
                }, 3000);
                break;

            default:
                reject(new Error(`unknown key: ${key}`));
                break;
        }
    });
};

Promise.all([
    fetchData("quick"),
    fetchData("medium"),
    fetchData("slow"),
]).then((v) => {
    console.log(v);
});

Promise.any([
    fetchData("quick"),
    fetchData("medium"),
    fetchData("slow"),
]).then((v) => {
    console.log(v);
});