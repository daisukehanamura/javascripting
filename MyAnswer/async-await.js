const fetchPosts = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                `${user}: post1`,
                `${user}: post2`,
                `${user}: post3`,
                `${user}: post4`,
                `${user}: post5`,
            ]);
        }, 1000);
    });
};


const users = ["user1", "user2", "user3", "user4", "user5"];

/* 模範解答 */

const displayAllPosts = async () => {
    for (const user of users) {
        const posts = await fetchPosts(user);
        for (const post of posts) {
            console.log(post);
        }
    }
};

displayAllPosts();




/*
const displayMyPosts = async () => {
    try {
        const results = await Promise.all(users.map(user => fetchPosts(user)));
        const formattedResults = results.flatMap(posts => posts).join('\n');
        console.log(formattedResults);
    } catch (e) {
        console.error(e);
    }
};

displayMyPosts();
*/


/*
const displayMyPosts = async () => {
    try {
        let result = ""
        for (i = 0; i < users.length; i++) {
            let tmp = await fetchPosts(users[i]);
            result += tmp;
        }
        console.log(result);
    } catch (e) {
        console.error(e);
    }
};

displayMyPosts();
*/
