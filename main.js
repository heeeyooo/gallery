const col1 = document.querySelector(".js-col-1");
const col2 = document.querySelector(".js-col-2");
const col3 = document.querySelector(".js-col-3");
const gridContainer = document.querySelector(".grid-container");

const imgData = [
    {
        info: "aurora",
        img: "img/aurora/1.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/2.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/3.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/4.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/5.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/6.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/7.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/8.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/9.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/10.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/11.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/12.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/13.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/14.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/15.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/16.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/17.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/18.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/19.jpg",
    },
    {
        info: "aurora",

        img: "img/aurora/20.jpg",
    },
    {
        info: "santorini",
        img: "img/santorini/1.jpg",
    },
    {
        info: "santorini",

        img: "img/santorini/2.jpg",
    },
    {
        info: "santorini",

        img: "img/santorini/3.jpg",
    },
    {
        info: "santorini",

        img: "img/santorini/4.jpg",
    },
    {
        info: "santorini",

        img: "img/santorini/5.jpg",
    },
    {
        info: "santorini",

        img: "img/santorini/6.jpg",
    },
    {
        info: "santorini",

        img: "img/santorini/7.jpg",
    },
];

// 1 way to make masonry layout

// function generateHTMLData(info) {
//     let gridContainerHTML = "";

//     imgData
//         .filter((img) => {
//             return img.info === info ? img : "";
//         })
//         .forEach((img) => {
//             gridContainerHTML += `
//     <div class="item animate"><img src="${img.img}" alt=""></div>
//     `;
//         });

//     gridContainer.innerHTML = gridContainerHTML;

//     // setTimeout(() => {
//     //     const items = document.querySelectorAll(".item");
//     //     items.forEach((item) => {
//     //         const itemRect = item.getBoundingClientRect();
//     //         if (itemRect.top < window.innerHeight) {
//     //             item.classList.add("item--reveal");
//     //         }
//     //     });
//     // }, 500);

//     // addEventListener("scroll", () => {
//     //     const items = document.querySelectorAll(".item");
//     //     items.forEach((item) => {
//     //         const itemRect = item.getBoundingClientRect();
//     //         if (itemRect.top < window.innerHeight) {
//     //             item.classList.add("item--reveal");
//     //         }
//     //     });
//     // });

//     setTimeout(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("in-view");
//                     return;
//                 }
//                 // entry.target.classList.remove("in-view");
//             });
//         });
//         const allAnimatedElements = document.querySelectorAll(".animate");
//         allAnimatedElements.forEach((element) => observer.observe(element));
//     }, 500);

//     // animate for class element we want to animate
//     // .in-view class to style element that has animate
// }

// generateHTMLData("aurora");

// 2 way to make masonry layout
function dataForBigScreen(info) {
    let colHTML = "";
    imgData
        .filter((img, index) => {
            if (img.info === info && index % 3 === 0) {
                return img;
            }
        })
        .forEach((img) => {
            colHTML += `
            <div class="item animate"><img src="${img.img}" alt=""></div>
    `;
        });
    col1.innerHTML = colHTML;

    let col2HTML = "";
    imgData
        .filter((img, index) => {
            if (img.info === info && index % 3 === 1) {
                return img;
            }
        })
        .forEach((img) => {
            col2HTML += `
                       <div class="item animate"><img src="${img.img}" alt=""></div>

    `;
        });
    col2.innerHTML = col2HTML;

    let col3HTML = "";
    imgData
        .filter((img, index) => {
            if (img.info === info && index % 3 === 2) {
                return img;
            }
        })
        .forEach((img) => {
            col3HTML += `
                       <div class="item animate"><img src="${img.img}" alt=""></div>

    `;
        });
    col3.innerHTML = col3HTML;

    // I use setTimeout to prevent img from animation until they loaded completely
    // setTimeout(() => {
    //     const items = document.querySelectorAll(".item");
    //     items.forEach((item) => {
    //         const itemRect = item.getBoundingClientRect();
    //         if (itemRect.top < window.innerHeight) {
    //             item.classList.add("item--reveal");
    //         }
    //     });
    // }, 500);

    // addEventListener("scroll", () => {
    //     const items = document.querySelectorAll(".item");
    //     items.forEach((item) => {
    //         const itemRect = item.getBoundingClientRect();
    //         if (itemRect.top < window.innerHeight) {
    //             item.classList.add("item--reveal");
    //         }
    //     });
    // });

    setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    return;
                }
                // entry.target.classList.remove("in-view");
            });
        });
        const allAnimatedElements = document.querySelectorAll(".animate");
        allAnimatedElements.forEach((element) => observer.observe(element));
    }, 500);
}

function dataForSmallScreen(info) {
    let colHTML = "";
    imgData
        .filter((img, index) => {
            if (img.info === info && index % 2 === 0) {
                return img;
            }
        })
        .forEach((img) => {
            colHTML += `
                        <div class="item animate"><img src="${img.img}" alt=""></div>

    `;
        });
    col1.innerHTML = colHTML;

    let col2HTML = "";
    imgData
        .filter((img, index) => {
            if (img.info === info && index % 2 === 1) {
                return img;
            }
        })
        .forEach((img) => {
            col2HTML += `
                        <div class="item animate"><img src="${img.img}" alt=""></div>

    `;
        });
    col2.innerHTML = col2HTML;

    // setTimeout(() => {
    //     const items = document.querySelectorAll(".item");
    //     items.forEach((item) => {
    //         const itemRect = item.getBoundingClientRect();
    //         if (itemRect.top < window.innerHeight) {
    //             item.classList.add("item--reveal");
    //         }
    //     });
    // }, 500);

    // addEventListener("scroll", () => {
    //     const items = document.querySelectorAll(".item");
    //     items.forEach((item) => {
    //         const itemRect = item.getBoundingClientRect();
    //         if (itemRect.top < window.innerHeight) {
    //             item.classList.add("item--reveal");
    //         }
    //     });
    // });

    setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    return;
                }
                // entry.target.classList.remove("in-view");
            });
        });
        const allAnimatedElements = document.querySelectorAll(".animate");
        allAnimatedElements.forEach((element) => observer.observe(element));
    }, 500);
}

if (window.innerWidth < 800) {
    dataForSmallScreen("aurora");
    col3.style.display = "none";
} else {
    dataForBigScreen("aurora");
    col3.style.display = "grid";
}

addEventListener("resize", () => {
    if (window.innerWidth < 800 && col3.style.display === "grid") {
        col3.style.display = "none";
        dataForSmallScreen("aurora");
    } else if (window.innerWidth > 800 && col3.style.display === "none") {
        col3.style.display = "grid";
        dataForBigScreen("aurora");
    }
});

document.querySelector(".js-santorini-data").addEventListener("click", () => {
    if (window.innerWidth < 800) {
        dataForSmallScreen("santorini");
    } else if (window.innerWidth > 800) {
        dataForBigScreen("santorini");
    }
});

document.querySelector(".js-aurora-data").addEventListener("click", () => {
    if (window.innerWidth < 800) {
        dataForSmallScreen("aurora");
    } else if (window.innerWidth > 800) {
        dataForBigScreen("aurora");
    }
});
