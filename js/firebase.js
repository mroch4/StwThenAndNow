firebase.initializeApp({
    apiKey: "AIzaSyCrzqTh1AEGBQgIA2rxEGmZwoF6VFx81x4",
    authDomain: "stwdawniejdzis.firebaseapp.com",
    databaseURL: "https://stwdawniejdzis-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "stwdawniejdzis",
    storageBucket: "stwdawniejdzis.firebasestorage.app",
    messagingSenderId: "1094028198106",
    appId: "1:1094028198106:web:382dfe24a37048ea6a25e3"
});

const database = firebase.database();

window.firebaseInterop = {
    // Rating
    getRatingById: async function (refPath) {
        try {
            const snapshot = await database.ref(refPath).once("value");
            const data = snapshot.val();
            return data || { a: 0, b: 0 };
        } catch (error) {
            console.error("firebaseInterop.getRatingById error: ", error);
            return { a: 0, b: 0 };
        }
    },

    updateRating: async function (refPath, rating) {
        try {
            await database.ref(refPath).set({
                a: rating.a,
                b: rating.b,
            });
            return true;
        } catch (error) {
            console.error("firebaseInterop.updateRating error: ", error);
            return false;
        }
    },

    // Replies
    addReply: async function (refPath, reply) {
        try {
            await database.ref(refPath).push(reply)
            return true;
        } catch (error) {
            console.error("firebaseInterop.addReply error:", error);
            return false;
        }
    },

    getRepliesById: async function (refPath) {
        try {
            const snapshot = await database.ref(refPath).once("value");
            const data = snapshot.val();
            return Object.values(data ?? {});
        } catch (error) {
            console.error("firebaseInterop.getRepliesById error: ", error);
            return [];
        }
    },
};
