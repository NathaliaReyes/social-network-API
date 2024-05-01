const { User } = require('../models');

//Seed data for the User model
const userData = [
    {
        "username": "PikachuMaster",
        "email": "pikachumaster@email.com"
    },
    {
        "username": "CharizardFan",
        "email": "charizardfan@email.com"
    },
    {
        "username": "JigglypuffLover",
        "email": "jigglypufflover@email.com"
    },
    {
        "username": "SquirtleTrainer",
        "email": "squirtletrainer@email.com"
    },
    {
        "username": "BulbasaurGamer",
        "email": "bulbasaurgamer@email.com"
    },
    {
        "username": "MewtwoMaster",
        "email": "mewtwomaster@email.com"
    },
    {
        "username": "EeveeEnthusiast",
        "email": "eeveeenthusiast@email.com"
    },
    {
        "username": "GyaradosGuru",
        "email": "gyaradosguru@email.com"
    },
    {
        "username": "SnorlaxDreamer",
        "email": "snorlaxdreamer@email.com"
    },
    {
        "username": "MachampChampion",
        "email": "machampchampion@email.com"
    },
    {
        "username": "GengarGhost",
        "email": "gengarghost@email.com"
    },
    {
        "username": "VaporeonTamer",
        "email": "vaporeontamer@email.com"
    },
    {
        "username": "DragoniteMaster",
        "email": "dragonitemaster@email.com"
    },
    {
        "username": "MeowthManiac",
        "email": "meowthmaniac@email.com"
    },
    {
        "username": "LugiaLover",
        "email": "lugialover@email.com"
    }
];

// Data for thoughts on random tech courses
const techCourseThoughts = [
    { thoughtText: "Harvard'iew of key concepts like algorith" },
    { thoughtText: "Courseracs such as supervised learning, " },
    { thoughtText: "Udacity'owing students to master AI cg." },
    { thoughtText: "MIT's Inming principles and advance" },
    { thoughtText: "Google'sce, with hands-on labs a." },
    { thoughtText: "edX's Migies like Hadoop and S." },
    { thoughtText: "Stanfordser interface desig" },
    { thoughtText: "DataCampa manipulation, ." },
    { thoughtText: "Udemy's es and web applications from scratch." },
    { thoughtText: "Pluralsiical labs and simulations " },
    { thoughtText: "IBM's Daand case studies to apply concepts in practical scenarios." },
    { thoughtText: "Amazon Wt exahitecture design principles, and best practices." },
    { thoughtText: "Unity's th Unity game engine, with lish games for various platforms." },
    { thoughtText: "LinkedInns, and object-oriented programmimples and exercises." },
    { thoughtText: "React Nar navigation, with real-world ase skills to employers." },
    { thoughtText: "Cisco Ne, switching, and network secursing Cisco equipment." },
    { thoughtText: "Full Sta.js, MongoDB, and React, with pros." },
    { thoughtText: "Blockcharrencies, with case studies anapplications." },
    { thoughtText: "Deep Leaorks, recurrent networks, ang assignments in Python using TensorFlow." },
    { thoughtText: "Microsofl machines, storage, netw-on labs to practice Azure skills." }
];

// Data for reactions to the tech course thoughts
const techCourseReactions = [
    { reactionBody: "I totally agree! CS50: Intro to Computer Science - A comprehensive overview of key concepts like algorithms, data structures, and programming languages." },
    { reactionBody: "This course is amazing! Machine Learning by Andrew Ng - Deep dive into fundamentals covering supervised learning, unsupervised learning, and neural networks with Python." },
    { reactionBody: "Wow, what a learning journey! Udacity's AI Nanodegree - Hands-on projects mastering AI concepts like natural language processing, computer vision, and reinforcement learning." },
    { reactionBody: "Absolutely love it! MIT's Intro to CS with Python - Rigorous course covering fundamental programming principles and advanced topics like algorithm analysis." },
    { reactionBody: "Such an immersive experience! Google's IT Support Cert - Solid foundation in IT troubleshooting and customer service, preparing for entry-level IT roles with hands-on labs." },
    { reactionBody: "Incredible content! edX's Data Science MicroMasters - Comprehensive curriculum covering data analysis, machine learning, and big data technologies with practical projects." },
    { reactionBody: "So much fun! Stanford's iOS Development with Swift - Build iOS apps from scratch focusing on UI design, data persistence, and app deployment to the App Store." },
    { reactionBody: "Keeps me engaged throughout! DataCamp's Data Science Track - Interactive challenges mastering data manipulation, visualization, and machine learning with Python and R." },
    { reactionBody: "Brilliant content! Udemy's Web Dev Bootcamp - Covering HTML, CSS, JavaScript, Node.js, and more with hands-on projects for building responsive websites and apps." },
    { reactionBody: "I can't get enough of it! Pluralsight's Cybersecurity Path - Comprehensive curriculum covering network security, ethical hacking, cryptography, and incident response." },
    { reactionBody: "Insanely informative! IBM's Data Science Cert - Hands-on introduction to data science and machine learning tools with real-world projects and case studies." },
    { reactionBody: "Endless learning possibilities! AWS Solutions Architect Training - Prepare for the AWS Solutions Architect exam with comprehensive coverage of AWS services and best practices." },
    { reactionBody: "Tugs at the brain's neurons! Unity Learn Platform - Tutorials and courses for game developers covering game design, 3D modeling, animation, and programming with Unity." },
    { reactionBody: "Action-packed and enlightening! LinkedIn Learning's Python Essential Training - Fundamentals of Python including data types, control structures, functions, and object-oriented programming." },
    { reactionBody: "Gripping curriculum! React Nanodegree by Udacity - Build modern web apps using React, Redux, and React Router with real-world projects for showcasing skills." },
    { reactionBody: "So immersive! Cisco CCNA Course - Comprehensive overview of networking concepts including TCP/IP, routing, switching, and network security with hands-on labs." },
    { reactionBody: "Engaging and thought-provoking! Full Stack Web Developer Bootcamp on LinkedIn Learning - Front-end and back-end web development technologies with projects for deploying full-stack web apps." },
    { reactionBody: "Challenging but enriching! Blockchain Basics on Coursera - Introduction to blockchain covering decentralized ledgers, smart contracts, and cryptocurrencies with hands-on projects." },
    { reactionBody: "Exciting learning experience! Deep Learning Specialization by Andrew Ng on Coursera - Comprehensive curriculum covering deep learning algorithms, neural networks, and natural language processing." },
    { reactionBody: "A rollercoaster of knowledge! Microsoft Azure Fundamentals on Pluralsight - Beginner-friendly introduction to cloud computing and Microsoft Azure services with hands-on labs." }
];

// Get a random value
getRandomValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Assign a random user to each thought
const thoughtsData = [];
techCourseThoughts.forEach(thought => {
    const randomUser = getRandomValue(userData);
    const newThought = {
        thoughtText: thought.thoughtText,
        username: randomUser.username
    };
    thoughtsData.push(newThought);
});

random0to4 = () => Math.floor(Math.random() * 5) + 1;

// Assign a random reaction to each thought
const generateReaction = () => {
    const reactionData = [];
    for(let i = 0; i < random0to4(); i++) {
        const randomUser = getRandomValue(userData);
        reactionData.push({
            reactionBody: getRandomValue(techCourseReactions).reactionBody,
            username: randomUser.username
        });

    }
    return reactionData;
}

console.log(userData);
console.log(thoughtsData); // Logs the thoughtText and username
console.log(generateReaction());



module.exports = { userData, thoughtsData, random0to4, generateReaction };