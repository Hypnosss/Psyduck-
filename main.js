var styles = ` 
.wrap {
    animation: respiration 10s ease-in-out infinite;
    display: inline-block;
}

/*face*/ 
.face {
    width: 300px;
    height: 280px;
    background: #f1b698;
    position: relative;
    border-radius: 120px 135px 0 80px;
}

/*cheek*/   
.cheek {
    width: 140px;
    height: 180px;
    background: #f1b698;
    position: absolute;
    bottom: 1px;
    right: -87px;
    border-radius: 0 50% 50% 0;
    transform: skew(-2deg, -6deg) ;
}

/*hair*/ 
.hair {
    position: absolute;
    border-radius: 50% 50% 0 0;
    left: 72px;
    top: -20px;
    width: 150px;
    height: 50px;
    background: #090909;
    z-index: -1;
}
.hair:before {
    content: '';
    width: 200px;
    height: 200px;
    background: #090909;
    position: absolute;
    top: 20px;
    left: -100px;
    display: inline-block;
    border-radius: 50%;
    transform: skew(-20deg);
}

/*l_eyeblow*/ 
.l_eyeblow {
    position: absolute;
    top: -18px;
    width: 110px;
    height: 60px;
    left: 10px;
}
.l_eyeblow:before {
    content: '';
    width: 95px;
    height: 38px;
    background: #090909;
    transform: rotate(-40deg);
    display: inline-block;
    border-radius: 50px;
    position: absolute;
    top: 10px;
    left: -5px;
}
.l_eyeblow:after {
    content: '';
    width: 85px;
    height: 38px;
    background: #090909;
    transform: rotate(45deg);
    display: inline-block;
    border-radius: 80px 50px 50px 0;
    position: absolute;
    right: -18px;
    top: 3px;
}

/*l_eyelids*/ 
.l_eyelids {
    position: absolute;
    width: 150px;
    height: 50px;
    overflow: hidden;
    left: 3px;
    top: 45px;
}
.l_eyelids:after {
    content: '';
    height: 400px;
    border-radius: 50%;
    width: 150px;
    border-top: solid 3px #090909;
    border-right: solid 3px #f1b698;
    border-left: solid 3px #f1b698;
    display: block;
    transform: skew(-8deg) rotate(-10deg);
}

/*l_eye*/ 
.l_eye {
    position: absolute;
    top: 80px;
    left: 25px;
    width: 110px;
    height: 100px;
    background: #090909;
    border-radius: 50%;
    transform: rotate(-5deg);
}
.l_eye:before {
    content: '';
    width: 48px;
    height: 46px;
    background: #fff;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    top: 27px;
    left: 32px;
}

/*r_eyeblow*/
.r_eyeblow {
    position: absolute;
    top: -20px;
    width: 110px;
    height: 60px;
    right: 30px;
}
.r_eyeblow:before {
    content: '';
    width: 75px;
    height: 38px;
    background: #090909;
    transform: rotate(-38deg);
    display: inline-block;
    border-radius: 50px;
    position: absolute;
    top: 10px;
    left: 5px;
}
.r_eyeblow:after {
    content: '';
    width: 85px;
    height: 38px;
    background: #090909;
    transform: rotate(48deg);
    display: inline-block;
    border-radius: 80px 50px 50px 0;
    position: absolute;
    right: -17px;
    top: 7px;
}

/*r_eyelids*/ 
.r_eyelids {
    position: absolute;
    width: 150px;
    height: 50px;
    overflow: hidden;
    right: -11px;
    top: 42px;
}
.r_eyelids:after {
    content: '';
    height: 400px;
    border-radius: 50%;
    width: 150px;
    border-top: solid 3px #090909;
    border-right: solid 3px #f1b698;
    border-left: solid 3px #f1b698;
    display: block;
    transform: skew(7deg) rotate(2deg);
}

/*r_eye*/ 
.r_eye {
    position: absolute;
    top: 78px;
    right: 28px;
    width: 100px;
    height: 95px;
    background: #090909;
    border-radius: 50%;
    transform: rotate(5deg);
}
.r_eye:before {
    content: '';
    width: 42px;
    height: 42px;
    background: #fff;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    top: 27px;
    left: 28px;
}

/*ear*/ 
.ear {
    width: 80px;
    height: 100px;
    background: #f1b698;
    position: absolute;
    left: -50px;
    bottom: 50px;
    border-radius: 180px 0 200px 200px;
    z-index: -1;
    transform: skew(-3deg) rotate(5deg);
}

/*mouth*/ 
.mouth {
    width: 50px;
    height: 70px;
    background: #7d3a43;
    position: absolute;
    bottom: -15px;
    right: 24px;
    border-radius: 50%;
    transform: rotate(-30deg);
}

/*body*/ 

/*shirt*/ 
.shirt {
    position: absolute;
    width: 320px;
    height: 240px;
    background: #ea4043;
    z-index: -2;
    top: 320px;
    left: 210px;
    border-radius: 60px 0 0 0;
}

/*arm*/ 
.arm {
    position: absolute;
}
    .l_arm {
        width: 70px;
        height: 210px;
        background: #ea4043;
        position: absolute;
        left: -30px;
        top: -40px;
        border-radius: 60px 0 0 0;
        transform: rotate(20deg);
        z-index: -1;
    }
    .r_arm {
        width: 50px;
        height: 190px;
        background: #ea4043;
        position: absolute;
        left: 293px;
        top: -15px;
        transform: rotate(-5deg);
        border-radius: 0 20px 0 0;
        z-index: -1;
    }

/*hand*/ 
.l_hand {
    width: 55px;
    height: 60px;
    background: #f1b698;
    border-radius: 50%;
    z-index: -2;
    position: absolute;
    top: 495px;
    left: 155px;
}
.r_hand {
    width: 50px;
    height: 55px;
    background: #f1b698;
    border-radius: 50%;
    z-index: -3;
    position: absolute;
    top: 500px;
    left: 520px;
}


/*pants*/ 
.l_pants {
    position: absolute;
    top: 520px;
    width: 180px;
    height: 150px;
    background: #f9f472;
    z-index: -3;
    transform: skew(-7deg);
    left: 205px;
}
.r_pants {
    position: absolute;
    top: 530px;
    width: 150px;
    height: 140px;
    background: #f9f472;
    z-index: -3;
    transform: skew(7deg);
    left: 384px;
}

/*foot*/ 
.foot {
    z-index: -3;
    position: absolute;
    top: 670px;
    padding: 0 0 200px;
}
    /*l_foot*/
    .l_foot{
        width: 35px;
        height: 130px;
        background: linear-gradient(#f1b698 60%, #f0f0f0 60%);
        position: absolute;
        left: 45px;
    }
    .l_foot:before {
        content: '';
        width: 30px;
        height: 130px;
        display: block;
        transform: skewX(-7deg);
        position: absolute;
        background: linear-gradient(#f1b698 60%, #f0f0f0 60%);
        right: -20px;
    }
    
    /*l_shoes*/ 
    .l_shoes {
        border-top: 40px solid transparent;
        border-right: 90px solid #f0bf32;
        border-left: 40px solid transparent;
        position: absolute;
        top: 100px;
        left: -35px;
    }
    
    /*r_foot*/ 
    .r_foot{
        width: 35px;
        height: 130px;
        background: linear-gradient(#f1b698 60%, #f0f0f0 60%);
        position: absolute;
        right: -290px;
    }
    .r_foot:before {
        content: '';
        width: 30px;
        height: 130px;
        display: block;
        transform: skewX(7deg);
        position: absolute;
        background: linear-gradient(#f1b698 60%, #f0f0f0 60%);
        left: -20px;
    }
    
    /*r_shoes*/ 
    .r_shoes {
        border-top: 40px solid transparent;
        border-left: 90px solid #f0bf32;
        border-right: 40px solid transparent;
        position: absolute;
        top: 100px;
        left: 240px;
    }
`;

function writeCode(what,fn){
    var n = 0;
    var timer = setInterval(function(){
        //console.log(code,what);
        code.innerHTML += what[n];
        styleTags.innerHTML += what[n];
        n++;
        if(n === what.length){
            clearInterval(timer);
            fn.call();
        }
    },0);   
}

writeCode(styles,()=>{});

