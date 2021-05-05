const imageHolder = document.getElementById("catImage");



const changeImage = () => {


    const randomNum1 = Math.floor(Math.random() * 10000000);



    const link = `https://thiscatdoesnotexist.com/?${randomNum1}`;

    imageHolder.src = link;


}

setInterval(changeImage, 300)

