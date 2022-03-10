// 创建桌面组件实例
let widget = new ListWidget();

// 添加文本
let text = widget.addText("创建空白小组件");
// 文本字体与大小
text.font = Font.systemFont(25);
// 文本颜色
text.textColor = Color.red();
// 对齐文本
text.centerAlignText();

widget.addText("[🌞] 屏幕亮度：" + parseInt(Device.screenBrightness()*100) + "%");

widget.addText("[⚡️] 电量剩余：" + parseInt(Device.batteryLevel()*100) + "%");
widget.addText("[🔋] 充电状态：" + (Device.isCharging() ? "充电中" : "未充电"));
widget.addText("[🍎] 设备型号：" + Device.model());
// 设置背景颜色为蓝色
widget.backgroundColor = new Color('#f35942', 0.2);
// 开始创建渐变背景
let bgColor = new LinearGradient();
bgColor.locations = [0,1];
//bgColor.colors = [
//    new Color("#EAE5C9"),
//    new Color("#6CC6CB")
//];

bgColor.colors = [
    Color.yellow(),
    Color.dynamic(
        Color.white(),
        Color.black())
];
// 添加渐变颜色到组件背景
//widget.backgroundGradient = bgColor;

// 图片链接
const imageUrl = "https://s4.ax1x.com/2022/02/14/HyrlzF.jpg";
// 请求URL链接并读取为图片
const req = new Request(imageUrl);
//const image = await req.loadImage();

// 将图片设置为背
//widget.backgroundImage = image;

// 如果是在app中运行，则显示预览
if(config.runsInApp) {
// 创建实例
    let alert = new Alert();
// 添加标题
    alert.title = "登录系统";
// 添加副标题
    alert.message = "请输入账号密码";
// 账号密码输入框
    alert.addTextField("账号");
    alert.addSecureTextField("密码");
// 添加按钮
    alert.addCancelAction("取消");
    alert.addAction("登陆");
    alert.addAction("基础设置");
    alert.addAction("组件设置");
    alert.addAction("其他设置");

// 弹出输入框，并返回选择的索引值
    const idex = await alert.present();
//const idex = await alert.presentSheet();
    if (idex === 0) {
        const name = alert.textFieldValue(0);
        const key = alert.textFieldValue(1);
        log([name, key])
    }

// 如果是在app中运行，则显示预览
// if(config.runsInApp) {
    await widget.presentMedium();
}
// 添加组件实例
Script.setWidget(widget);
Script.complete();