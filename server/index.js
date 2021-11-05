const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
              "A good time to finish up old tasks.",
              "A soft voice may be awfully persuasive.",
              "A pleasant surprise is waiting for you."  
    ];
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
});

app.get("/api/couponss", (req, res) => {
  const coupons = ["https://www.buffalowildwings.com/en/promos",
            "https://www.coupons.com/",
            "https://www.joinhoney.com/"
    ];
    let randomIndex = Math.floor(Math.random() * coupons.length);
    let randomCoupons = coupons[randomIndex];

    res.status(200).send(randomCoupons);
});

app.get("/api/take", (req, res) => {
  const mon = ["Thanks for the info, ill be sure to spend your money well"
  ];

  res.status(200).send(mon);
});


app.listen(4000, () => console.log("Server running on 4000"));
