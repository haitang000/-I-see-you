
// 容器
const container=document.querySelector('.container');
let img_width = 200; //每张图片的固定宽度

if (
    navigator.userAgent.match(/Mobi/i) ||
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {
    console.log('[✅Done] 检测到当前使用设备为移动端设备');
    img_width=160; //移动端适配
}else{
    console.log('[✅Done] 检测到当前使用设备为PC端设备');
    img_width=200; //pc端适配
}


// 加入图片元素
function createImgs(){
    for(let i=1;i<=48;i++){
        let src='image/'+i+'.jpg';
        let img=document.createElement('img');
        img.src=src;
        img.width=img_width;
        // 每一张图片加载完就设置位置
        img.onload=setPositions;
        // 将图片添加到容器中
        container.appendChild(img);
    }
}

// 多加入一下图片
createImgs();
createImgs();
//createImgs();
//createImgs();

// 计算一共有多少列，以及每一列之间的间隙
function cal(){
    // 容器宽度
    let container_width=container.clientWidth;
    // 计算列的数量
    let columns=Math.floor(container_width/img_width);
    // 计算间隙
    let space_number=columns+1; //间隙的数量
    let left_space=container_width-columns*img_width; //计算剩余的空间
    let space=left_space/space_number; //每个间隙的空间
    return {
        space: space,
        columns: columns
    };
}

// 设置每张图片的位置
function setPositions(){
    // 获取列数和间隙
    let info=cal();
    // 该数组的长度为列数，每一项表示该列的下一个图片的纵坐标
    let next_tops=new Array(info.columns);
    // 将数组的每一项填充为0
    next_tops.fill(0);
    for(let i=0;i<container.children.length;i++){
        let img=container.children[i];
        // 找到next_tops中的最小值作为当前图片的纵坐标
        let min_top=Math.min.apply(null,next_tops);
        img.style.top=min_top+'px';
        // 重新设置数组这一项的下一个top值
        let index=next_tops.indexOf(min_top); //得到使用的是第几列的top值
        next_tops[index]+=img.height+info.space;
        // 计算横坐标
        let left=(index+1)*info.space+index*img_width;
        img.style.left=left+'px';
    }
    // 得到next_tops中的最大值
    let max=Math.max.apply(null,next_tops);
    // 设置容器的高度
    container.style.height=max+'px';
}

// window.onload=setPositions;
// 定时器
let timer=null;
// 窗口尺寸变动后，重新排列
window.onresize=function(){
    if(timer){
        clearTimeout(timer);
    }
    timer=setTimeout(setPositions,100);
    console.log('[✅Done] 窗口尺寸变动,照片已重新排列');
}

let Titleh1 = document.querySelector('#title-h1');
let Titlep = document.querySelector('#title-p');
let time = new Date(); // 确保time变量是一个Date对象
let month = time.getMonth() + 1; // 月份从1开始
let day = time.getDate();

/*window.onload = function(){
    if (month == 12 && day == 5) {
        Titleh1.innerText = "🎉 今天是夏彦的生日 12.5 🎉"; //标题
        Titlep.innerText = "祝  ☀比冬日暖阳还要耀眼的你☀  快乐安康 万事顺遂" //描述
        setTimeout(function() {
            Titleh1.innerText = "🎉 生日快乐，夏侦探 🎉";
        }, 3000);
    }else{
        Titleh1.innerText = "「与你重逢，是最美好的事」";
            setTimeout(function() {
                Titleh1.innerText = "你好！欢迎来到夏彦照片墙";
            }, 3000);
    }
};*/

if (month == 12 && day == 5) {
    Titleh1.innerText = "🎉 今天是夏彦的生日 12.5 🎉";
    Titlep.innerText = "祝 ☀比冬日暖阳还要耀眼的你☀ 快乐安康 万事顺遂";
    
    // 先淡入显示
    setTimeout(function() {
        Titleh1.style.opacity = 1;
        Titlep.style.opacity = 1;
    }, 100); // 延迟100毫秒再淡入，避免页面加载的突兀感

    // 3秒后更新Titleh1文本，并再次触发淡入效果
    setTimeout(function() {
        Titleh1.style.opacity = 0; // 先淡出
        setTimeout(function() {
            Titleh1.innerText = "🎉 生日快乐，夏侦探 🎉";
            Titleh1.style.opacity = 1; // 再次淡入
        }, 2000); // 等待淡出完成
    }, 3000);

} else {
    // 如果不是12月5日，显示默认信息
    Titleh1.innerText = "「与你重逢，是最美好的事」";
    setTimeout(() => {
        Titleh1.style.opacity = 1; // 触发淡入效果
    });

    // 等待3秒后更改文本，并添加淡入淡出效果
    setTimeout(function() {
        Titleh1.style.opacity = 0; // 先淡出
        setTimeout(function() { // 等待淡出结束
            Titleh1.innerText = "你好！欢迎来到夏彦照片墙";
            Titleh1.style.opacity = 1; // 触发淡入效果
        }, 2000); // 等待2秒，确保淡出动画完成
    }, 5000); // 5秒后开始切换文本，包含初始的3秒等待时间
}

// 定义一个函数，用于计算网站运行时间
function siteTime(){
    // 每隔1秒调用一次siteTime函数
    window.setTimeout("siteTime()", 1000);
    // 定义一些时间单位
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    // 获取当前时间
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth()+1;
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();

    // 定义一个时间点，这里以2024年8月15日13时19分17秒为例
    var t1 = Date.UTC(2024,08,15,13,19,17);
    // 获取当前时间的时间戳
    var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
    // 计算两个时间点之间的差值
    var diff = t2-t1;
    // 计算差值中的年、天、时、分、秒
    var diffYears = Math.floor(diff/years);
    var diffDays = Math.floor((diff/days)-diffYears*365);
    var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
    var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
    var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
    // 将计算结果显示在页面上
    document.getElementById("sitetime").innerHTML="本站已运行"+diffYears+"年"+diffDays+"天"+diffHours+"时"+diffMinutes+"分钟"+diffSeconds+"秒";
}

// 调用siteTime函数
siteTime();