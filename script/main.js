// trigger to play music in the background with sweetalert
// window.addEventListener('load', () => {
//     Swal.fire({
//         title: 'Do you want to play music in the background?',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes',
//         cancelButtonText: 'No',
//     }).then((result) => {
//         if (result.isConfirmed) {
//             document.querySelector('.song').play();
//             animationTimeline();
//         } else {
//             animationTimeline();
//         }
//     });
// });


// animation timeline
const animationTimeline = () => {
    const wishes = [
        "Happy Birthday to the person who has been my compass for as long as I can remember. From those early days in school where I was just learning to find my footing, to my graduation and the complex professional world beyond, you have always been there lighting the path. I know I haven't always been the easiest student to guide, and perhaps I haven't yet become the disciple you envisioned, but please know that my failures to be perfect never diminished my respect for you. You are more than a teacher; you are the big brother who taught me how to walk through life with dignity. I am endlessly grateful for your patience, your lessons, and the way you’ve shaped who I am today.",

        "Wishing you the happiest of birthdays. As I look back on everything we have shared, I realize how rare this bond truly is. You have played the roles of mentor, teacher, and big brother all at once, carrying the weight of my future on your shoulders. I know we have had our share of misunderstandings and differences; I know there were times I might have disappointed you or when communication failed us. But beneath all of that lies a foundation of admiration and love that is unshakeable. Thank you for never giving up on me, even when things were difficult. I respect you in my own way, more than words can often say, and I hope this year brings you the peace and pride you deserve.",

        "Happy Birthday, sir. It is impossible to sum up so many years of guidance in a single message, but I want to try. You took a young, unpolished version of me and patiently chipped away at the rough edges, guiding me from the classroom to where I stand today. I carry your lessons in everything I do. While I may not always express it perfectly, and while we may view the world differently at times, my gratitude for your presence in my life is absolute. You are the standard I aspire to, even if I stumble along the way. Thank you for being the big brother who chastises when necessary but protects always. May your day be filled with the same immense value you bring to my life.",

        "On your special day, I want to take a moment to express the things I often leave unsaid. You have been the architect of my academic and personal growth, standing by me from my earliest school memories to my biggest milestones. I know our journey hasn't been a straight line—we have faced our share of friction and silence, but please never doubt the depth of my regard for you. I may not be the perfect reflection of your teachings, but I am a product of your care. I admire your strength, your wisdom, and your heart. Happy Birthday to a mentor who is truly family. I hope to one day make you as proud as I am to know you.",

        "Happy Birthday to my lifelong mentor. Looking back at the distance we have traveled from my school days to now, I am overwhelmed by how much you have given me. You stepped in as a big brother when I needed direction and as a strict teacher when I needed discipline. I carry a quiet regret that I couldn't always be the student or disciple you could be seamlessly proud of, yet I hope you can see the effort I make to honor your guidance. Our differences only make my respect for you more profound because you stuck by me despite them. Thank you for leading the way, today and always. I love and respect you deeply."
    ];

    // Pick a random wish
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    textBoxChars.innerText = randomWish;
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;
    
    const chatboxSpans = document.querySelectorAll(".hbd-chatbox span");
    const reversedChatboxSpans = Array.from(chatboxSpans).reverse();
    
    // Calculate the per-character delay to finish in 2 seconds
    // (2.0 seconds / number of characters)
    const deleteStaggerDelay = 1.0 / chatboxSpans.length;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
    .from(".one", 0.7, {
        opacity: 0,
        y: 10
    })
    .from(".two", 0.4, {
        opacity: 0,
        y: 10
    })
    .to(".one",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3.5")
    .to(".two",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "-=1")
    .from(".three", 0.7, {
        opacity: 0,
        y: 10
    })
    .to(".three",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3")
    .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
    })
    .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
    })
    // This is the new, FASTER typing animation
    .staggerTo(
        ".hbd-chatbox span",
        0.05, // <-- DURATION: Changed from 1.5 to 0.05 (much faster)
        {
            visibility: "visible",
        },
        0.04   // <-- STAGGER: Changed from 0.05 to 0.04 (a bit faster)
    )
    // This animates the fake button
    .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
    },
    "+=1.5") // <-- READ TIME: Changed from 4s to 1.5s (you can change this)
    
    // This is the delete animation you added
    .staggerTo(
        reversedChatboxSpans,
        0.1,
        {
            visibility: "hidden",
        },
        deleteStaggerDelay
    )
    .to(
        ".four",
        0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
    "+=0.5") // This "+=4" gives 4 seconds of read time

    // --- THIS IS THE NEW "DELETE" ANIMATION ---
    .staggerTo(
        reversedChatboxSpans,  // <-- Uses the REVERSED list
        0.1,                   // Duration for each char to hide (very fast)
        {
            visibility: "hidden",
        },
        deleteStaggerDelay     // <-- Uses our CALCULATED 2-sec speed
    )
    // --- END OF NEW CODE ---

    .to(
        ".four",
        0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
    "+=0.5")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
        ".idea-5",
        0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
        "+=1.5"
    )
    .to(
        ".idea-5 span",
        0.7, {
            rotation: 90,
            x: 8,
        },
        "+=1.4"
    )
    .to(
        ".idea-5",
        0.7, {
            scale: 0.2,
            opacity: 0,
        },
        "+=2"
    )
    .staggerFrom(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
        0.2
    )
    .staggerTo(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
        0.2,
        "+=1.5"
    )
    .staggerFromTo(
        ".baloons img",
        2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
        0.2
    )
    .from(
        ".profile-picture",
        0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        },
        "-=2"
    )
    .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
    })
    .staggerFrom(
        ".wish-hbd span",
        0.7, {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
        0.1
    )
    .staggerFromTo(
        ".wish-hbd span",
        0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
        0.1,
        "party"
    )
    .from(
        ".wish h5",
        0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
        "party"
    )
    .staggerTo(
        ".eight svg",
        1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        },
        0.3
    )
    .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
        ".last-smile",
        0.5, {
            rotation: 90,
        },
        "+=1"
    );

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
}
animationTimeline();
