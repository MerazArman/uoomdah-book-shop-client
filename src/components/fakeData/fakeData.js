const fakeData = [
    {   
        "key":"1a",
        "name":"city on the",
        "author":"Mark Goldman",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/iiWSKq5.png"

    },
    {   
        "key":"2a",
        "name":"My book cover",
        "author":"Ubar Hat",
        "price": 190,
        "stock":2,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/ECT8SE5.png"

    },
    {   
        "key":"3a",
        "name":"Prottaborton",
        "author":"Ali Ahmad",
        "price": 220,
        "stock":9,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/0D6w5Gd.png"

    },
    {   
        "key":"4a",
        "name":"Khidmatul Islam",
        "author":"Abu bakar Razi",
        "price": 720,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/7f7gy8C.png"

    },
    {   
        "key":"5a",
        "name":"Memory",
        "author":"Cirls Game",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/cvqBu3Q.png"

    },
    {   
        "key":"6a",
        "name":"Raufur Rahim",
        "author":"Abir Mahmud",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/sBE3nZn.png"

    },
    {   
        "key":"7a",
        "name":"Lailatul Awla",
        "author":"Abdul Karim",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/NfHrSrA.png"

    },
    {   
        "key":"8a",
        "name":"Indian History",
        "author":"Gongopoddhay",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/iJgzFpw.png"

    },
    {   
        "key":"9a",
        "name":"Productive Muslim",
        "author":"Mohammad Faris",
        "price": 290,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/ifRiKo4.png"

    },
    {   
        "key":"10a",
        "name":"The islam",
        "author":"Atikur ",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/YwjqKmm.png"

    },
    {   
        "key":"11a",
        "name":"The Clear Quran",
        "author":"DR. Akbar ",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/E48Omxy.png"

    },
    {   
        "key":"12a",
        "name":"Islam kamil",
        "author":"Mohammad Amin",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/hPpSSwR.png"

    },
    {   
        "key":"13a",
        "name":"Rahikul makhtum",
        "author":"",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/UixTXsJ.png"

    },
    {   
        "key":"14a",
        "name":"US History",
        "author":"Makebone",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/AAMy08u.png"

    },
    {   
        "key":"15a",
        "name":"Orginal",
        "author":"Ali Afsar",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/k7Ideqf.png"

    },
    {   
        "key":"16a",
        "name":"History",
        "author":"",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/Y2GW7Zm.png"

    },
    {   
        "key":"17a",
        "name":"World History",
        "author":"",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/aW7URG0.png"

    },
    {   
        "key":"18a",
        "name":"Elouqunt Javascript",
        "author":"Eloqens",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/7mKdw8Q.png"

    },
    {   
        "key":"19a",
        "name":"Learn React",
        "author":"Arbibn kak",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/J218sGy.png"

    },
    {   
        "key":"20a",
        "name":"the Road React",
        "author":"robin Wirch",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/rKa7IQp.png"

    },
    {   
        "key":"21a",
        "name":"The C",
        "author":"Barin asim",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/Yfai5iw.png"

    },
    {   
        "key":"22a",
        "name":"effective typescript",
        "author":"Deno fal",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/3KU6Xjt.png"

    },
    {   
        "key":"23a",
        "name":"Python crash",
        "author":"jhanklar daba",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/ev6dcli.png"

    },
    {   
        "key":"24a",
        "name":"javascript evry",
        "author":"akil kanok",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/Qz3KQqP.png"

    },
    {   
        "key":"24a",
        "name":"javascript evry",
        "author":"akil kanok",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/6HmI1s1.png"

    },
    {   
        "key":"24a",
        "name":"Learn javascript",
        "author":"akil kanok",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/nZBiwsJ.png"

    },
    {   
        "key":"24a",
        "name":"Engineer at Google",
        "author":"akil kanok",
        "price": 120,
        "stock":3,
        "descriptions":"I feel such connection to the human who made it, which delights and moves me. If you can write a joke that is still funny in 100 years, you are great.",
        "img":"https://imgur.com/Z7eyN2C.png"

    }
]

export default fakeData;