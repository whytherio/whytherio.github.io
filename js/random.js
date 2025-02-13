// 先声明所有数组
const textArray = [
    "栉风沐雨，朝乾夕惕",
    "行远自迩，笃行不怠",
    "云程发轫，培风图南",
    "青衿之志，履践致远",
    "韬光逐薮，含章未曜",
    "戢鳞潜翼，思属风云"
];

const mottoArray = [
    "顺其自然", "林间小憩", "竹林月夜",
    "海阔天空", "云隐雁鸣", "灿若烈阳"
];

// 配置数组要在变量声明之后
const textConfigs = [
    { id: 'random-text', array: textArray },
    { id: 'motto-text', array: mottoArray }
];

// 通用随机函数
function setRandomText(elementId, textArray) {
    const index = Math.floor(Math.random() * textArray.length);
    document.getElementById(elementId).textContent = textArray[index];
}

// 只保留一个初始化函数
function initTexts() {
    textConfigs.forEach(config => {
        setRandomText(config.id, config.array);
    });
}

window.onload = initTexts;
