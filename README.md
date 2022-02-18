# Twitter Clone

I used react and css for the frontend and firebase for the backend. This saved me a lot of time and increased my efficiency.


## What I got to learn -

 I was able to improve my **react skills**, learned **how react is used in projects** and the **merits of using react**,  **how to use Firebase services** such as **Firebase database** , how to perform **perform CRUD operations** in the database through simple actions such as clicking buttons and how to use firebase to **host your projects**.

## Problems I encountered -

The coding process was mostly smooth, but a major problem which I encountered was a build error while importing **firebase.js** into other files such as **Feed.js**. 
The issue was that instead of referencing to **firebase.js** which was present in the **source folder**, the import function  kept referencing firebase present in the **node modules**. 
The **issue was resolved** after I changed how I **imported firebase and firestore** from the firebase modules. The method which I was using earlier gave errors because apparently **Firebase goes through a lot of updates** because of which sometimes some **import methods can result in errors**.

## 	What's next for the project -

Currently I want to change some UI elements after which I want to focus on fixing the chat as currently the messages pop anywhere randomly.-

### Try the project out yourself - https://twitter-clone-8c396.web.app/
