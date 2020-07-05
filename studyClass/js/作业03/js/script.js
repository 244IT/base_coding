
;(function() {
  // 获取小图
  var smallImgWrap = document.getElementsByClassName("magnifier-min")[0]
  var smallImgList = smallImgWrap.getElementsByTagName("img")
  // 获取大图
  var largeImgWrap = document.getElementsByClassName("large-outer")[0]
  var largeImgList = largeImgWrap.getElementsByTagName("img")
 
  var magnifier = document.getElementsByClassName("magnifier")[0]
  // 获取阴影
  var shadow = document.getElementsByClassName("lens")[0]
  
  var index = 0
  smallImgList[index].style.display = "block"
  largeImgList[index].style.display = "block"

  /* 1.放大镜效果 */
  // 鼠标移入显示阴影和大图
  smallImgWrap.addEventListener("mouseover", function() {
    shadow.style.display = "block"
    largeImgWrap.style.display = "block"
  })
  // 鼠标移动事件
  smallImgWrap.addEventListener("mousemove", function(e) {
    // 获取阴影偏移量
    var x = e.clientX - magnifier.offsetLeft - shadow.offsetWidth / 2
    var y = e.clientY - magnifier.offsetTop - shadow.offsetHeight / 2
    
    // 阴影偏移量限制
    if(x < 0) {
      x = 0
    }else if(x >  smallImgWrap.offsetWidth - shadow.offsetWidth) {
      x = smallImgWrap.offsetWidth - shadow.offsetWidth
    }

    if(y < 0) {
      y = 0
    }else if(y >  smallImgWrap.offsetHeight - shadow.offsetHeight) {
      y = smallImgWrap.offsetHeight - shadow.offsetHeight
    }

    // 设置阴影位置
    shadow.style.left = x + "px"
    shadow.style.top = y + "px"

    // 设置大图的显示范围
    largeImgList[index].style.left = -x * 2 + "px"
    largeImgList[index].style.top = -y * 2 + "px"
  })

  // 鼠标移出隐藏阴影和大图
  smallImgWrap.addEventListener("mouseout", function() {
    shadow.style.display = "none"
    largeImgWrap.style.display = "none"
  })

  // 获取tab小图
  var tabImgWrap = document.getElementsByClassName("magnifier-list")[0]
  var tabImg = tabImgWrap.getElementsByTagName("img")
  var tabLength = tabImg.length
  tabImg[index].className = "on"
  
  /* 2.点击tab切换 */
  for(var i = 0; i < tabLength; i++) {
    tabImg[i].addEventListener("click", (function(i) {
      var newIndex = i
      return function() {
        if(newIndex === index) return
        tabImg[index].className = ""
        smallImgList[index].style.display = "none"
        largeImgList[index].style.display = "none"

        tabImg[newIndex].className = "on"
        smallImgList[newIndex].style.display = "block"
        largeImgList[newIndex].style.display = "block"

        index = newIndex
      }
    })(i))
  }

  /* 3.点击套餐显示对应价格 */
  // 获取套餐元素
  var specifications = document.getElementsByClassName("specifications")[0]
  var itemList = specifications.getElementsByTagName("span")
  var itemLength = itemList.length
  
  for(var j = 0; j < itemLength; j++) {
    itemList[j].addEventListener("click", function() {
      var sublings = this.parentNode.children
      var sublingsLength = sublings.length
      for(var z = 0; z < sublingsLength; z++) {
        sublings[z].className = ""
      }

      this.className = "on"
      // 判断点击的一行是否是套餐
      if(this.parentNode.id === "setMenu") {
        showPrice(this.id)
      }
    })
  }
  // 显示套餐价格函数
  function showPrice(txt) {
    // 获取显示价格元素
    var totalPrice = document.getElementById("price")
    var price = 0
    switch(txt) {
      case "one":
        price = 1099
        break
      case "two":
        price = 2988
        break
      case "three":
        price = 3499
        break
      default:
        priceL = 1099
    }
    totalPrice.innerHTML = "¥" + price.toFixed(2)
  }
})()