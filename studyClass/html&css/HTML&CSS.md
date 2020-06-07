### 01.认识HTML

* html是什么？

  html是超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。

* 运行在哪？

  HTML 运行在浏览器上，由浏览器来解析。

* 你认识的超文本标记语言？

  * 超文本： 所谓超文本，即超出文本，比普通文本更高一级，它包含了我们常见的音频、视频以及超链接等。
  * 标记：标记是用HTML自己的语法规则把文本内容给包裹起来，这就叫做标记
  * 总结：HTML是一种比普通文本更高一级的拥有自己语法规则的语言。

### 02.HTML字符集

* 字符集的意义：
  1. 网页中特殊意义的字符
  2. 键盘上没有的字符

| ***\*显示结果\**** | ***\*描述\**** | ***\*实体名称\**** | ***\*实体编号\**** |
| ------------------ | -------------- | ------------------ | ------------------ |
|                    | 空格           | \&nbsp;            |                    |
| <                  | 小于号         | \&lt;              | <                  |
| >                  | 大于号         | >                  | >                  |
| &                  | 和号           | &                  | &                  |
| "                  | 引号           | "                  | "                  |
| '                  | 撇号           | ' (IE不支持)       | '                  |
| ￠                 | 分             | ¢                  | ¢                  |
| ￡                 | 镑             | £                  | £                  |
| ￥                 | 日元           | ¥                  | ¥                  |
| €                  | 欧元           | €                  | €                  |
| §                  | 小节           | §                  | §                  |
| ©                  | 版权           | ©                  | ©                  |
| ®                  | 注册商标       | ®                  | ®                  |
| ™                  | 商标           | ™                  | ™                  |
| ×                  | 乘号           | ×                  | ×                  |
| ÷                  | 除号           | ÷                  | ÷                  |

### 03.块级元素

* 特点：
  1. 独占一行
  2. 高度默认被内容撑开
  3. 高度和宽度以及内外边距都是可修改的
* 元素/标签（常见）
  1. div：架构、结构
  2. p：段落
  3. h1~h6：标题
  4. ol：有序列表
  5. ul：无序列表
  6. li：列表项
  7. table：表格
  8. form：表单
  9. pre：预格式文本，一般和code配合使用
  10. hr：水平线
  11. noscript：若浏览器禁止了javascript脚本、运行里面的代码。

### 04.行内元素

* 特点：
  1. 不独占一行
  2. 宽高默认被内容撑开
  3. 高度、宽度、垂直外边距不可修改，垂直内边距不会影响布局。
* 元素/标签
  1. span：文档中的节
  2. a：超链接（页面跳转） 常用属性：href、target
  3. em：文字倾斜、带语义强调
  4. i：文字倾斜
  5. strong：文字加粗、带语义强调
  6. b：文字加粗
  7. label：定义与表单元素的关系，通常配合input使用
  8. code：代码文本

### 05.行内块元素

* 特点：

  1. 不独占一行
  2. 宽高默认被内容撑开
  3. 高度和宽度以及内外边距都是可修改的

* 元素：

  1. img：定义图像

  2. input：表单，常用type属性值：

  * text（默认，输入框）
  * password(密码)
  * checkout（复选框）
  * radio（单选框）
  * file：（上传）
  * button：（按钮）
  * submit：(提交)
  * reset：（重置）

  3. textarea：文本域

  4. select：选择列表，配合option使用

### 06.HTML规范

1. 块级元素与块级元素平级、内嵌元素与内嵌元素平级

```
<div>
	<span></span>
	<p></p>
</div>  //span是行内元素，p是块级元素，所以这个是错误的嵌套
<div>
	<span></span>
	<a></a>
</div>  //对的
```

2. 块元素可以包含内联元素或某些块元素，但内联元素不能包含块元素，它只能包含其它的内联元素

```
<div><span></span></div>
<span><span></span></span>
```

3. 有几个特殊的块级元素只能包含内嵌元素，不能再包含块级元素

   h1、h2、h3、h4、h5、h6、p、dt

4. 块级元素不能放在标签p里面

5. li 标签可以包含 div 标签，因为li 和 div 标签都是装载内容的容器

### 07.认识CSS

* CSS是什么？

  CSS 指层叠样式表 (Cascading Style Sheets)，用来设置页面的样式

* 运行在哪？

  CSS 运行在浏览器上，由浏览器来解析，基于HTML使用。

- 你认识的CSS?

  * CSS负责结构、表现、行为中的表现

  * CSS样式通常存储在**样式表**中
  * 外部样式表可以极大提高工作效率、便于项目的维护

### 08.CSS引入方式

1. 内联样式

```
<div style='background: red;'>  1111 </div>
```

2. 内部样式

```
<style type="text/css">
	div{
		background: red;
	}
</style>
```

3. 链接样式

```
<link rel="stylesheet" type="text/css" href="css/style.css">
```

* rel：规定当前文档与被链接文档之间的关系
* type：规定被链接文档的 MIME 类型。
* href：规定被链接文档的位置（URL）。

4. 导入样式

```
@import url('b.css');
```

### 09.CSS基本选择器

基本选择器：

- 标签选择器：针对一类标签

````
<style>
    div{
    	font-size:18px;
    }
</style>
````

- ID选择器：针对某一个特定的标签使用

```
<style>
	#box{
		font-size:18px;
	}
</style>
// html部分
<div id="box">111<div>
```

- 类选择器：针对你想要的所有标签使用

```
<style>
	.box{
		font-size:18px;
	}
</style>
// html部分
<div class="box">111<div>
```

- 通用选择器（通配符）：针对所有的标签都适用（不建议使用）

```
<style>
	*{
		margin:0;
		padding:0;
	}
</style>
```

### 10.关系选择器

* 包含选择器：选择所有包含在div里面的类名是.box的元素

```
<style>
	div .box{
		font-size:18px;
	}
</style>
```

* 子选择器：选择所有作为div元素的类名是.box的子元素（不包含.box下的元素，本例span的font-size为18px是因为font-size是继承属性）

```
<style>
	div>.box{
		font-size:18px;
	}
</style>
// html部分
<div>
	<div class="box"> 
		222
		<span>111</span>
	</div>
</div>
```

* 相邻选择器：选择紧贴在类名是.box之后的类名是.box1的元素（只有第一个.box生效）

```
<style>
	.box+.box1{
		font-size:18px;
	}
</style>
// html部分
<div>
	<div class="box">111</div>
	<div class="box1">222</div>
	<div class="box1">222</div>
	<div>333</div>
</div>
```

* 兄弟选择器：选择类名是.box之后所有兄弟元素div（.box后面的div全生效 ）

```
<style>
	.box~div{
		font-size:18px;
	}
</style>
// html部分
<div>
	<div class="box">111</div>
	<div class="box1">222</div>
	<div class="box1">222</div>
	<div>333</div>
</div>
```

### 11.其他选择器

* 属性选择器（不常用）

| ***\*选择器\**** | **\*描述\***                                                 |
| ---------------- | ------------------------------------------------------------ |
| E[attr]          | 选择具有att属性的E元素                                       |
| E[attr="val"]    | 选择具有att属性且属性值等于val的E元素                        |
| E[attr~="val"]   | 选择具有att属性且属性值其中一个等于val的E元素（包含只有一个值且该值等于val的情况） |
| E[attr\|="val"]  | 选择具有att属性且属性值为以val开头并用连接符-分隔的字符串的E元素，如果属性值仅为val，也将被选择 |
| E[attr^="val"]   | 选择具有att属性且属性值为以val开头的字符串的E元素            |
| E[attr$="val"]   | 选择具有att属性且属性值为以val结尾的字符串的E元素            |
| E[attr*="val"]   | 选择具有att属性且属性值为包含val的字符串的E元素              |

* 伪类选择器

| ***选择器***          | ***描述***                                                   |
| --------------------- | ------------------------------------------------------------ |
| E:link                | 设置超链接a在未被访问前的样式                                |
| E:visited             | 设置超链接a在其链接地址已被访问过时的样式                    |
| E:hover               | 设置元素鼠标在其悬停时的样式                                 |
| E:active              | 设置元素在被用户激活（在鼠标点击与释放之间发生的事件）时的样式 |
| E:focus               | 设置元素在成为输入焦点（该元素的onfocus事件发生）时的样式。(一般应用于表单元素) |
| E:checked             | 匹配用户界面上处于选中状态的元素E。(用于input type为radio与checkbox时) |
| E:enabled             | 匹配用户界面上处于可用状态的元素E。(一般应用于表单元素)      |
| E:disabled            | 匹配用户界面上处于禁用状态的元素E。(一般应用于表单元素)      |
| E:empty               | 匹配没有任何子元素（包括text节点）的元素E                    |
| E:root                | 匹配E元素在文档的根元素。在HTML中，根元素永远是HTML          |
| E:not(s)              | 匹配不含有s选择符的元素E                                     |
| E:first-child         | 匹配父元素的第一个子元素E                                    |
| E:last-child          | 匹配父元素的最后一个子元素E                                  |
| E:only-child          | 匹配父元素仅有的一个子元素E                                  |
| E:nth-child(n)        | 匹配父元素的第n个子元素E                                     |
| E:nth-last-child(n)   | 匹配父元素的倒数第n个子元素E                                 |
| E:first-of-type       | 匹配同类型中的第一个同级兄弟元素E                            |
| E:last-of-type        | 匹配同类型中的最后一个同级兄弟元素E                          |
| E:only-of-type        | 匹配同类型中的唯一的一个同级兄弟元素E                        |
| E:nth-of-type(n)      | 匹配同类型中的第n个同级兄弟元素E                             |
| E:nth-last-of-type(n) | 匹配同类型中的倒数第n个同级兄弟元素E                         |

* 伪元素选择器

| ***选择器***                   | ***描述***                                             |
| ------------------------------ | ------------------------------------------------------ |
| E:before/E::before             | 在目标元素E的前面插入的内容。用来和content属性一起使用 |
| E:after/E::after               | 在目标元素E的后面插入的内容。用来和content属性一起使用 |
| E:first-letter/E::first-letter | 设置元素内的第一个字符的样式                           |
| E:first-line/E::first-line     | 设置元素内的第一行的样式                               |
| E::placeholder                 | 设置元素文字占位符的样式。(一般用于input输入框)        |
| E::selection                   | 设置元素被选择时的字体颜色和背景颜色                   |

### 12.选择器的优先级

1. 选择器的权重大小

	!important > 行内 > id > class > 标签 > *(通配)

2. 如何计算

	!important     : 无穷大
	行内    		  : 1000
	id   		   : 100
	class|属性|伪类  : 10
	标签			  : 1
	*(通配)		  : 0

* 例子：		

	.g-container div   ===》 class + 标签 = 11
	div #gPic		   ===》标签 +  id = 101

* **选择器相同的情况下 后者覆盖前者**

### 13.尺寸大小及单位

一、尺寸大小
	widht   : 宽度
	height  : 高度
	
	// width和height的默认值是auto
	
	auto和%的区别：
	
		1》auto ： 会将元素撑开至整个父元素widht，但是会减去margin+padding+border
		2》%    ： 会强制将元素变成父元素一样的宽度，并且额外的空间（margin+padding+border）会加到width上

二、单位（列举常用）

绝对单位 : 不会因为其他元素的尺寸变化而变化。
相对单位 : 没有一个固定的度量值，而是由其他元素尺寸来决定的相对值。

	px   :  像素    ==》绝对单位
	
	vw	 :	1% 视口（浏览器可视区域）的宽度
	
	vh	 :	1% 视口（浏览器可视区域）的高度
	
	%	 :	相对于父元素的宽度或字体大小

* % 与 父元素有关系、auto 与子元素有关系

* 为什么height:100%不生效：如果包含块的高度没有显示，并且该元素不是绝对定位，则计算值为auto，也就是说子元素100%*auto=NaN，所以结算无效

### 14.元素之间的转换

不管是块级元素还是行内元素（内联元素），都有自己默认的display属性，可以通过改变display属性值，转换元素的表现。

display : none				元素隐藏且不占位置
display : block       	 	xxx元素转换成“块”
display : inline       		xxx元素转换成“行内”
display : inline-block 		xxx元素转换成“行内块”

### 15.CSS文字样式

* 常用样式：

1. 字体样式   :  font-family
2. 字体大小   :  font-size	
   * 每个浏览器可能默认大小都不一样

3. 字体粗细   :  font-weight
   * bold、100-900

4.  字体颜色   ：  color   
   * color:#ff0000 ===简写：#f00
   * color:rgba(1,1,1,1)
   * color:red

5. 首行文本缩进  : text-indent

6. 文本水平对齐方式 : text-align
   * left   : 左
   * right  : 右
   * center : 居中

7. 设置文本装饰 ： text-decoration

   * none		 : 定义标准文本 
   * line-through : 删除线
   * underline    : 下划线

   如何取消a链接下划线 text-decoration:none;

8. 显示光标类型    : cursor
   * cursor : pointer; 

* 常用技巧

1. 单行文字溢出显示...

	overflow: hidden;  ===>溢出隐藏
	white-space: nowrap;  ===>不换行
	text-overflow: ellipsis;规定当文本溢出元素时发生的事情

2. 多行文字溢出显示...

	display: -webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:4;   ===>在第几行显示
	overflow: hidden;
### 16.背景图的样式

1.背景色  : background-color 

	background: red;
	background: #f00;

2.背景图  : background-image

	background:url('xxx.png')

3.规定如何重复背景图像：background-repeat

	background-repeat:repeat-x  :横向
					  repeat-y  :纵向
					  no-repeat :不重复
4.背景图位置：background-position

	background-position: x y 
	background-position:right [center默认]
	
	只设置了x方向，y默认走center
	图像的起始位置时：0 0 。 居中50%，右下角100% 100%
5.背景图尺寸：background-size

	background-size:关键字、百分比、数字
	
		1、关键词
			图片大于盒子尺寸===》缩小 [contain]
			图片小于盒子尺寸===》放大 [cover]
		2、百分比 ： x y
	
			****只设置了x方向，系统会自动算y值[按照比例]
### 17.盒模型

1. 盒模型组成部分

	content(width|height)  +  padding + border + margin

2. padding ： 内边距 ===>值：百分比、数值、没有负值

	padding-left
	padding-right
	padding-bottom
	padding-top
	
	padding:10px(上) 20px(右) 30px(下) 40px(左)
	padding:50px (上、右、下、左)
	padding:20px(上、下) 30px(右、左)
	padding:10px(上) 20px(右左) 30px(下)
	
	***百分比只和父元素width计算

3. border：边框===》值：1px solid #f00;
   * 1px   :  边框的尺寸
   * solid :  实线、dashed:  虚线
   * #f00  :  颜色

```
border-left  : 左边框
border-right : 右边框
border-top   : 上边框
border-bottom: 下边框

border-color:上 右 下 左
```

4. margin  : 外边距 ===>值：百分比、数值、负值	

	margin-left
	margin-right
	margin-bottom
	margin-top
	
	简写
	margin:10px(上) 20px(右) 30px(下) 40px(左)
	margin:50px (上、右、下、左)
	margin:20px(上、下) 30px(右、左)
	margin:10px(上) 20px(右左) 30px(下)
	
	***百分比只和父元素width计算
	
	-----auto的问题：适应剩余空间-----
	     auto不生效：没有剩余空间占有了

4. 俩种盒模型
   w3c标准：width  = 宽度
   ie标准 ：width  = content  + padding + border 
5. 切换盒模型的标准：
   	w3c：box-sizing:conten-box
   	ie ：box-sizing:border-box

### 18.浮动和清除浮动

1. 浮动 ：  float 

2. 值left、right、none
3. 本质：实现文字环绕

4. 浮动的特性

   * 1、包裹（收缩、隔绝）

     2、破坏 : 会让负元素的高度塌陷（不是bug，是标准）

5. 清除浮动
   * 固定高度
   * 多加一个块元素，加入样式clear:both
   * 开启BFC（详见下节）
   * 伪元素

```
.g-container::after{
    content: "";
    clear: both;
    display: block;
}
```

### 19.overflow和BFC

1. overflow  

   * 当内容溢出的时候的表现
   * 属性值
     * 溢出隐藏 ： hidden
     * 溢出隐藏但是还有滚动条：scroll
     * 溢出的时候才有滚动条：aoto
     * 默认值：visible
     * overflow-y:scroll;
     * overflow-x:scroll;

2. BFC

   * 什么是BFC?

     BFC是块级格式化上下文，可以理解为一个独立的布局环境，如果一个元素具有BFC，环境内部的元素布和外部的元素布局不会相互影响，而是相互独立的状态。

   * 触发BFC的方式
     * html根元素
     * float不是none
     * overflow的值是hidden、scroll、auto
     * display值是：inline-block、table-cell 、table-caption、flex、inline-flex
     * position的值不是relative和static
   * 使用场景
     * 清除浮动
     * 去margin重叠
     * 更灵活更健壮的布局

### 20.定位

1. 定位：position

2. 作用：通过定位可以将页面中的元素，摆放到页面的任意位置

3. 属性值：

   * static 默认值，元素没有开启定位
   * relative，开启元素的相对定位
   * absolute，开启元素的绝对定位

   * fixed，开启元素的固定定位

4. 相对定位：relative

   * 相对定位元素相对于其自身在文档流中的位置来定位
   * 开启元素的相对定位后，如果不设置偏移量，元素位置不会发生任何变化
   * 相对定位的元素不会脱离文档流
   * 相对定位不会改变元素的性质，块元素还是块元素，内联元素还是内联元素
   * 相对定位偏移后会保留自己原来空间（原来的空间还占有）

5. 绝对定位：absolute

   * 绝对定位的元素是相对于距离他最近的开启了定位的祖先元素进行定位，如果所有的祖先元素都没开启定位，则相对于浏览器窗口进行定位。
   * 元素设置绝对定位以后，如果不设置偏移量，元素的位置不会发生变化
   * 绝对定位的元素会完全脱离文档流
   * 绝对定位会改变元素的性质。内联变块，块的高度和宽度都被内容撑开，并且不独占一行

6. 固定定位：fixed

   * 固定定位是一种特殊的绝对定位，它的特点大部分都和绝对定位一样
   * 不同的是固定定位的元素
     * 永远都是相对于浏览器窗口进行定位的
     * 他不会随滚动条滚动
   * IE6不支持固定定位

7. 层级：z-index

   * 当元素开启了定位以后，可以通过z-index来设置元素的层级
   * z-index值越高元素越优先显示
   * 如果z-index值一样，或者都没有z-index则优先显示下边的元素
   * 定位元素 > 浮动元素 > 文档流中的元素
   * 父元素永远不会盖住子元素

8. 偏移量

   * 当元素开启了定位以后，可以通过偏移量来设置元素的位置
     * left：元素距离定位位置的左侧距离
     * top：元素距离定位位置的上边距离
     * right：元素距离定位位置的右侧距离
     * bottom：元素距离定位位置的底部距离
   * 相对定位中如果left和right和top和bottom同时出现，只有left和top生效
   * 绝对定位和固定定位中如果left和right和top和bottom同时出现，则都生效（表现拉伸的效果）

